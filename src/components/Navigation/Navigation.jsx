import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Container, Header, Link } from './Layout.styled';
// import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavigationContainer, Link } from './Navigation.styled';

export const Navigation = () => {
  const isLogin = useSelector(state => state.user.isLogin);
  return (
    <>
      <NavigationContainer>
        <div>
          <Link to="/" end>
            Home
          </Link>
          {isLogin && <Link to="/contacts">Contacts</Link>}
        </div>
        {!isLogin && (
          <div>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        )}
        {isLogin && <UserMenu />}
      </NavigationContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
