import { useSelector } from "react-redux";
import {
  selectUserAvatarUrl,
  selectUserDisplayName,
  selectUserEmail,
  selectUserUid,
  selectIsLoggedIn,
} from "../store/selectors";

export const userAuth = () => {
  const uid = useSelector(selectUserUid);
  const email = useSelector(selectUserEmail);
  const displayName = useSelector(selectUserDisplayName);
  const avatarUrl = useSelector(selectUserAvatarUrl);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return {
    uid,
    email,
    displayName,
    isLoggedIn,
    avatarUrl,
  };
};
