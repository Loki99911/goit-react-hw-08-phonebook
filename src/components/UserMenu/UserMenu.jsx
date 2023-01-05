import { useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/operations"
import { useSelector } from 'react-redux';
import {
  UserMenuContainer,
  UserMenuText,
  UserMenuBtn,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.user.user.name);
  
  return (
    <UserMenuContainer>
      <UserMenuText>{userName}</UserMenuText>
      <UserMenuBtn
        type="button"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        Logout
      </UserMenuBtn>
    </UserMenuContainer>
  );
};
