import React from 'react';

export const layoutState = {
    navberHamburger: false,
    loginSignupModal: false,
    cartModal:false,
}

export const layoutReducer = (state, action) => {
    switch (action.type) {
        case 'hamburgerToggle':
            return {
                ...state,
                navberHamburger: action.payload
            }
        case 'loginSignupModalToggle':
            return {
                ...state,
                loginSignupModal: action.payload
            }
        case 'cartModalToggle':
            return {
                ...state,
                cartModal: action.payload
            }
        default:
            return state
    }
}