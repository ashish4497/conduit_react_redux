import { ADD_ARTICLES, ADD_TAGS } from "./Type";
export function fetchArticle(articlesUrl) {
  return function (dispatch) {
    fetch(articlesUrl, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ articles }) =>
        dispatch({
          type: ADD_ARTICLES,
          payload: articles,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function fetchTags(tagsUrl) {
  return function (dispatch) {
    fetch(tagsUrl, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(({ tags }) =>
        dispatch({
          type: ADD_TAGS,
          payload: tags,
        })
      )
      .catch((error) => console.log(error));
  };
}

export default fetchArticle;
