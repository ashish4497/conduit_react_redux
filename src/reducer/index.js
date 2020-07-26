import { ADD_ARTICLES, ADD_TAGS } from "../action/Type";
const initialState = {
  articles: [],
  tags: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case ADD_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
}
