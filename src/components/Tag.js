import React from "react";
import { connect } from "react-redux";

function Tags(props) {
  const tags = props.Tags;
  // console.log(tags, "dbf");
  return (
    <div className="tag_section">
      {tags &&
        tags.map((tag) => {
          return <button className="button is-small">{tag}</button>;
        })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Tags: state.tags,
  };
};

export default connect(mapStateToProps)(Tags);
