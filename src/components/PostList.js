import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';
import { Card, CardHeader, Typography, CardContent, Avatar } from '@material-ui/core';
import Receipt from '@material-ui/icons/Receipt';
class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <Card key={post.id}>
          <CardHeader
            title={post.title}
            subheader={<UserHeader userId={post.userId}/>}
            avatar={
              <Avatar aria-label="Recipe">
                <Receipt />
              </Avatar>
            }
          >
            <Typography component="h2">{post.title}</Typography>
          </CardHeader>
          <CardContent>{post.body}</CardContent>
        </Card>
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
