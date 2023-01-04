import { useDispatch } from 'react-redux';
import { logoutUser } from "../../redux/operations"
import {
  UserMenuContainer,
  UserMenuText,
  UserMenuBtn,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <UserMenuContainer>
      <UserMenuText>mango@mail.com</UserMenuText>
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
