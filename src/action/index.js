import { ADD_ARTICLES } from "./Type";
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

// export const fetchArticle = (url) => {
//   try {
//     return async function (url) {
//       return fetch(url, {
//         method: "GET",
//       })
//         .then((res) => res.json())
//         .then((articles) => {
//           console.log(articles, "getting the all articles");
//           return {
//             type: ADD_ARTICLES,
//             payload: articles,
//           };
//         });
//     };
//   } catch (err) {
//     return console.log(err.message);
//   }
// };

export default fetchArticle;
