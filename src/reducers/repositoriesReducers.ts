import * as actionstypes from '../constants/actionstype';
import {initialState} from './initialState';


const repositories = (state=initialState.repositories, action:any) => {

    switch (action.type) {
        case actionstypes.REPOSITORY_SUCCESS:
            
            // return action.payload;

            return action.payload.map( (rep: any) => rep.full_name)
    
        default: return state;
            
    }

};

export default repositories;