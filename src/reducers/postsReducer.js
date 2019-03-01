import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/redux';

export default (state = [], sction) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};
