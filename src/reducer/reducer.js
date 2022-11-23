export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.payload.videos,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload.categories,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
    // ref: devtrium useReducer blog
  }
};
