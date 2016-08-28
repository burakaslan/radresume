const defaultState = {
  font: '',
}
function reducer (state = defaultState, { type, payload }) {
  switch (type) {
    case 'CHANGE_FONT':
      if (state.font === '') {
        return {
          ...state,
          font: 'Lato',
        }
      }
      return {
        ...state,
        font: '',
      }
    default:
      return state;
  }
}

export default reducer;
