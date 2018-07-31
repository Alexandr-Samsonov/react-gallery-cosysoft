const initialState = {
  items: [
    {
      id: 1,
      url: 'https://avatars.mds.yandex.net/get-pdb/770122/1ab4d475-9b9e-45ab-a80a-b86806c24482/s1200',
      comment: 'Комментарий комментарий'
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return {
        ...state,
        items: [ ...state.items, action.payload ]
      };
    case 'CHANGE_COMMENT':
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload.id) {
            return { id: item.id, url: item.url, comment: action.payload.comment };
          } else {
            return item;
          }
        })
      };
    case 'DELETE_IMAGE':
      return {
        ...state,
        items: state.items.filter(item =>
          item.id != action.payload.id
        )
      };
    default:
      return state;
  }
};