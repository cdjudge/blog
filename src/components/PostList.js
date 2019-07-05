import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    let alt = false;
    return this.props.posts.map(post => {
      alt = !alt;
      return (
        <div className="container" key={post.id}>
          <div className={'card ' + (alt ? 'alt1' : 'alt2')}>
            <div className="card-body">
              <h5 className="card-title">
                <UserHeader userId={post.userId} />
              </h5>
              <h4 className="card-title">{post.title}</h4>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return this.renderList();
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
