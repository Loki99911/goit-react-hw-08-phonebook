import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/operations';
import { Navigation } from './Navigation/Navigation';
import { PrivateRoute, PublicRoute } from './PPRouts';
import { AppContainer } from './App.styled';

const Home = lazy(() => import('./Home/Home'));
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppContainer>
  );
};
