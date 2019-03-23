import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt} from '@fortawesome/free-solid-svg-icons'

library.add(faUserAlt)


class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <FontAwesomeIcon icon={faUserAlt}  size="2x"/>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
