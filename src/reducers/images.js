const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return {
        ...state,
        items: [ ...state.items, action.payload ]
      };
    default:
      return state;
  }
};