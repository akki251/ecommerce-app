const alert = (state = { success: false, message: 'default', error: false }, action) => {
  switch (action.type) {
    case 'SUCCESS': {
      return { success: true, message: action.payload };
    }
    case 'ERROR': {
      return { error: true, message: action.payload };
    }
    default:
      return state;
  }
};

export default alert;
