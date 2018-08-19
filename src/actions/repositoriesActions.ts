import {createAction} from 'redux-actions';
import * as actionstypes from '../constants/actionstype';

interface ISearchRepositoriesPayload{
    userName: string;
}

export const searchRepos = createAction<ISearchRepositoriesPayload>(actionstypes.REPOSITORY_FETCH);
