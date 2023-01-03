import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Container, Header, Link } from './Layout.styled';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  return (
    <>
      <header>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
        <UserMenu />
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
