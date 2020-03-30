import { all, call } from 'redux-saga/effects';

import { fetchCollectionsRequest } from './shop/shop.sagas'
import { userSagas } from './user/user.saga'

export default function* rootSaga(){
    yield all([
        call(fetchCollectionsRequest),
        call(userSagas)
    ])
}
