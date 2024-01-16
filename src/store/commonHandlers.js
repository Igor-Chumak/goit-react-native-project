const pending = (state) => {
  state.isLoading = true;
  state.error = "";
};

const rejected = (state, action) => {
  console.log("Handler rejected :>> ", action);
  state.isLoading = false;
  state.error = action.payload;
};

const fulfilled = (state) => {
  state.isLoading = false;
};

export const commonHandle = { pending, rejected, fulfilled };
