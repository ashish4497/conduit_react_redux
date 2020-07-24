import { ADD_ARTICLES } from "../action/Type";
const initialState = {
  articles: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
}
