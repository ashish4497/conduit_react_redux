const initialState = {
  article: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "addEventListener": {
      return state;
    }
    default:
      return state;
  }
}
