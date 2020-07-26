import React from "react";
import { connect } from "react-redux";

function Article(props) {
  const articles = props.articles;
  console.log(articles);

  return (
    <div className="feed">
      {articles &&
        articles.map((article) => {
          return (
            <div className="article-div">
              <div className="name-count">
                <div className="name-div">
                  <img
                    src={article.author.image}
                    alt={article.author.username}
                  />
                  <div className="name-date">
                    <h3>{article.author.username}</h3>
                    <p>{new Date(article.updatedAt).toDateString()}</p>
                  </div>
                </div>
                <div className="favorite-count">
                  <i className="fas fa-heart"></i>
                  <span>{article.favoritesCount}</span>
                </div>
              </div>
              <div className="article-details">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
                <div className="article-bottom">
                  <p className="read-more">Read more...</p>
                  <div className="taglist">
                    {article.tagList.map((tag) => {
                      return <span>{tag}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

export default connect(mapStateToProps)(Article);
