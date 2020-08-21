import { INCREMENT } from '../actions/increment';
import { DECREMENT } from '../actions/decrement';

const initialState = {
    number: 0
};

function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            number: state.number + 1,
        };
    }
    if (action.type === DECREMENT) {
        return {
            ...state,
            number: state.number - 1,
        };
    }
    return state;
};

export default counterReducer;