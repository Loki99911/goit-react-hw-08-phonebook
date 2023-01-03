import { useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/operations"

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>mango@mail.com</p>
      <button type="button" onClick={() => { dispatch(logoutUser()) }}>
        Logout
      </button>
    </div>
  );
};
