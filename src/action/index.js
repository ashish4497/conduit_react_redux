import { ADD_ARTICLES } from "./Type";
export function fetchArticle(articlesUrl) {
  return function (dispatch) {
    fetch(articlesUrl, {
      method: "GET",
    });
    console.log(articlesUrl, "check the article url what come in");
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
