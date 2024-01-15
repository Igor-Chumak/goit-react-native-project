// auth
export const selectUserUid = (state) => state.auth.uid;
export const selectUserEmail = (state) => state.auth.email;
export const selectUserDisplayName = (state) => state.auth.displayName;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserAvatarUrl = (state) => state.auth.avatarUrl;
// store
export const selectUserSelectedId = (state) => state.store.userSelectedId;
export const selectUsersList = (state) => state.store.usersList;
export const selectIsLoading = (state) => state.store.isLoading;
export const selectPosts = (state) => state.store.posts;
export const selectError = (state) => state.store.error;
