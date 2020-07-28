import {
  ADD_ARTICLES,
  ADD_TAGS,
  USER_INFO,
  POST_ARTICLE,
  POST_COMMENT,
} from "../action/Type";
const initialState = {
  articles: [],
  tags: [],
  user: {},
  postArticle: {},
  comment: {},
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
    case USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case POST_ARTICLE:
      return {
        ...state,
        postArticle: action.payload,
      };
    case POST_COMMENT:
      return {
        ...state,
        comment: action.payload,
      };
    default:
      return state;
  }
}
