import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }
  render() {

    const user = this.props.users.find(user => user.id === this.props.userId);
    if (!user) {
      return null;
    }
    return (
        <span><FontAwesomeIcon icon={faUser}/><span className="userName">{user.name}</span></span>
    );
  }
}
const mapStateToProps = state => {
  return { users: state.users };
};
export default connect(
  mapStateToProps,
  { fetchUser }
)(UserHeader);
