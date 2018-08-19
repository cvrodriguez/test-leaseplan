import {fork} from 'redux-saga/effects';
import watchReposSearchSaga from '../sagas/watchers';

function* startForman(){

    yield fork(watchReposSearchSaga)
}

export default startForman;