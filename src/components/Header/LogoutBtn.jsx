import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div
      className="
      text-center
    cursor-pointer
    text-white
    bg-red-500
    px-5
    py-1.5
    rounded
    hover:bg-white
    hover:text-black
    transition-colors
    rounded-full
  "
      onClick={logoutHandler}
    >
      Logout
    </div>
  );
};

export default LogoutBtn;
