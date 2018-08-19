import * as actionstypes from '../constants/actionstype';

import {call, put} from 'redux-saga/effects';

import {fetchRepositories} from '../services/ServicesRepositories';



function* searchRepositorySaga({payload}: any){
try {
    const repositoriesList: any = yield call(fetchRepositories, payload);

    yield put({
        payload: repositoriesList,
        type: actionstypes.REPOSITORY_SUCCESS
      
    })
} catch (error) {
    yield put({
        payload: error,
        type: actionstypes.REPOSITORY_ERROR
        
    
    })
    
}
}
 export default searchRepositorySaga;