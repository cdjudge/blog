import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    console.log(`UserHeader.componentDidMount(${this.props.userId})`);
    fetchUser(this.props.userId);
  }
  render() {
    const user = this.props.users.find(user => user.userId === this.props.userId);
    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
