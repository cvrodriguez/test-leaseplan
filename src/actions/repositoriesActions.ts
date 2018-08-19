import {createAction} from 'redux-actions';
import * as actionstypes from '../constants/actionstype';

export interface ISearchRepositoriesPayload{
    userName: string;
}

export const searchRepos = createAction<ISearchRepositoriesPayload>(actionstypes.REPOSITORY_FETCH);
