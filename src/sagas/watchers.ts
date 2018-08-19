import * as actionstypes from '../constants/actionstype';
import searchRepositorySaga from '../sagas/repositoriesSaga';

import {takeLatest} from 'redux-saga';


function* watchReposSearchSaga(){
 
    yield takeLatest(actionstypes.REPOSITORY_FETCH, searchRepositorySaga);

}
export default watchReposSearchSaga;