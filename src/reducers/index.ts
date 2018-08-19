import {combineReducers} from 'redux';
import repositories from './repositoriesReducers';

const rootReducers = combineReducers({
    repositories
})

export default rootReducers;
