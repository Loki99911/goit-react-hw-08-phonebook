import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Container, Header, Link } from './Layout.styled';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLogin = useSelector(state => state.user.isLogin);
  return (
    <>
      <header>
        <NavLink to="/" end>
          Home
        </NavLink>
        {isLogin && <NavLink to="/contacts">Contacts</NavLink>}
        {!isLogin && (
          <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
          </>
        )}
        {isLogin && <UserMenu />}
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
