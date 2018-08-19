import * as actionstypes from '../constants/actionstype';
import {initialState} from './initialState';


const repositories = (state=initialState.repositories, action:any) => {

    switch (action.type) {
        case actionstypes.REPOSITORY_FETCH:
            
            // return action.payload;

            return [
                'tergtrbrh', 'fdgfgf'
            ]
    
        default: return state;
            
    }

};

export default repositories;