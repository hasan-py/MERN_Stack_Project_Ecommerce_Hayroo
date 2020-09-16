import React from 'react';

export const authState = {
    
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'hamburgerToggle':
            return {
                ...state,
                navberHamburger: action.payload
            }
        default:
            return state
    }
}