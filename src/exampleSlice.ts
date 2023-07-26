const initialState = {
  details: {},
  isConnected: false,
  isInternetReachable: null,
};

const reducer = (state = initialState, action: any) => {
  const {type, data} = action;
  switch (type) {
    case 'saasasa': {
      return {
        ...state,
        ...data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
