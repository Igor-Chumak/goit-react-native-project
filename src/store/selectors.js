// auth
export const selectUserUid = (state) => state.auth.uid;
export const selectUserEmail = (state) => state.auth.email;
export const selectUserDisplayName = (state) => state.auth.displayName;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserAvatarUrl = (state) => state.auth.avatarUrl;
// store
export const selectIsLoading = (state) => state.store.isLoading;
export const selectError = (state) => state.store.error;

// const uid = useSelector(selectUserUid);
// const email = useSelector(selectUserEmail);
// const displayName = useSelector(selectUserDisplayName);
// const avatarUrl = useSelector(selectUserAvatarUrl);
