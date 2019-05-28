export default (state = 'all', action) => {
  switch (action.type) {
    case 'SWITCH_FILTER':
      return action.filter;
    default:
      return state;
  }
}
