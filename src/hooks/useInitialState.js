import { useState } from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }

    const removeFromCart = (product) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== product.id),
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export { useInitialState }