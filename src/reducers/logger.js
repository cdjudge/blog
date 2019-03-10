export default (state = {}, action) => {
  if (action.type.indexOf('@@') === -1) console.log(action);
  return state;
};
