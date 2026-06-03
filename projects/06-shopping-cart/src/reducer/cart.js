export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];

export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};

export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayload;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        updateLocalStorage(newState);
        return newState;
      }

      // otra forma de hacerlo con slice y spread operator
      // const newState = [
      //     ...state.slice(0, productInCartIndex),
      //     { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
      //     ...state.slice(productInCartIndex + 1)
      // ]

      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1,
        },
      ];
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.DECREASE_QUANTITY: {
      const { id } = actionPayload;

      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex < 0) return state;

      const newState = structuredClone(state);

      if (newState[productInCartIndex].quantity > 1) {
        newState[productInCartIndex].quantity -= 1;
      } else {
        newState.splice(productInCartIndex, 1);
      }

      updateLocalStorage(newState);
      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([]);
      return [];
    }

    default:
      return state;
  }
};
