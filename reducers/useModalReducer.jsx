import { useReducer } from "react";

import { modalActions } from "consts/actions";

export const useModalReducer = () => {
    const initialState = {
        isOpen: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case modalActions.OPEN:
                return {
                    isOpen: true,
                };
            case modalActions.CLOSE:
                return {
                    isOpen: false,
                };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return [state, dispatch];
};
