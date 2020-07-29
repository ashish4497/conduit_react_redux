import {
  ADD_ARTICLES,
  ADD_TAGS,
  USER_INFO,
  POST_ARTICLE,
  POST_COMMENT,
  FETCH_COMMENT,
} from "./Type";

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

export function getUserInfo(url, token) {
  console.log(url, "log the action");
  return function (dispatch) {
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then(({ user }) =>
        dispatch({
          type: USER_INFO,
          payload: user,
        })
      )
      .catch((error) => console.log(error));
  };
}

export function postArticle(postUrl, state, history) {
  // console.log(state, "check the state");
  // console.log(postUrl, "hit url");
  return function (dispatch) {
    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.authToken}`,
      },
      body: JSON.stringify({ article: state }),
    })
      .then((res) => res.json())
      .then(({ article }) => {
        dispatch({
          type: POST_ARTICLE,
          payload: article,
        });
        return history.push(`/userpost/${article.slug}`);
      })
      .catch((error) => console.log(error));
  };
}

export function postComment(commentUrl, state) {
  // console.log(commentUrl, state, "ehsnlfn");
  return function (dispatch) {
    fetch(commentUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${localStorage.authToken}`,
      },
      body: JSON.stringify({ comment: state }),
    })
      .then((res) => res.json())
      .then(({ comment }) => {
        dispatch({
          type: POST_COMMENT,
          payload: comment,
        });
      });
  };
}

export function fetchComment(url) {
  return function (dispatch) {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(({ comments }) => {
        dispatch({
          type: FETCH_COMMENT,
          payload: comments,
        });
      });
  };
}
