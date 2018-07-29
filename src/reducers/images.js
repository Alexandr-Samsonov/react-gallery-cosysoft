const initialState = {
  items: [
    {
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
    default:
      return state;
  }
};