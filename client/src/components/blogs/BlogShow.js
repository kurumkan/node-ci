import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlog } from '../../actions';
const staticUrl = 'https://advanced-node-js-image-upload.s3.eu-central-1.amazonaws.com';

class BlogShow extends Component {
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params._id);
  }

  render() {
    if (!this.props.blog) {
      return '';
    }

    const { title, content, imageUrl } = this.props.blog;

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          {imageUrl && <img src={`${staticUrl}/${imageUrl}`} />}
        </p>
      </div>
    );
  }
}

function mapStateToProps({ blogs }, ownProps) {
  return { blog: blogs[ownProps.match.params._id] };
}

export default connect(mapStateToProps, { fetchBlog })(BlogShow);
