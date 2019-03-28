import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faAngry } from '@fortawesome/free-regular-svg-icons';
import {
  List,
  ListItemText,
  ListItem,
  Typography
} from '@material-ui/core';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <ListItem key={post.id}>
          <ListItemText
            primary={
              <React.Fragment>
                  <FontAwesomeIcon icon={faAngry} size="2x" />
                <UserHeader userId={post.userId} />
                <Typography component="h2">{post.title}</Typography>
              </React.Fragment>
            }
            secondary={post.body}
          />
        </ListItem>
      );
    });
  }
  render() {
    return <List>{this.renderList()}</List>;
  }
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
