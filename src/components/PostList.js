import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';
import { withStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  Typography
} from '@material-ui/core';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <Card key={post.id}>
          <CardHeader title={post.title} subheader={post.body}>
                <UserHeader userId={post.userId} />
                <Typography component="h2">{post.title}</Typography>
            {post.body}
        </CardHeader>
        </Card>
      );
    });
  }
  render() {
    return this.renderList();
  }
}
const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

});


const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(withStyles(styles)(PostList));
