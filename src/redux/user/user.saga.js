import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import { signInSuccess, signInFailure } from './user.actions';

import { auth, googleProvider, createUserProfileDoc } from '../../firebase/firebase.utils'

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* getSnapshotFromUserAuth(user){
    try {
        const userRef = yield call(createUserProfileDoc, user);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error){
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle(){
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
}

export function* signInWithEmailAndPassword({ payload: { email, password }}){
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
}

export function* userSagas(){
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}