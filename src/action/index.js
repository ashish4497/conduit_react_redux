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

// export function postArticle(articleUrl) {
//   return function (dispatch) {
//     fetch(articleUrl, {
//       method: "POST",
//       "content-type": "application/json",
//     })
//       .then((res) => res.json())
//       .then(({ artile }) =>
//         dispatch({
//           type: POST_ARTICLE,
//           payload: artile,
//         })
//       )
//       .catch((error) => console.log(error));
//   };
// }
