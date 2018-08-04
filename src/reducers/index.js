import { combineReducers } from 'redux'

const initialState = {
    example: 'example'
}

// declare your reducers here
const defaultReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'EXAMPLE':
            return {
                ...state,
                example: 'prop'
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    // put your reducers in here
    defaultReducer,
})

export default reducers