// import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { Home } from './Home/Home';
import { Contacts } from './Contacts/Contacts';
import { Register } from './Register/Register';
import { Login } from './Login/Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../redux/operations';

// const Home = lazy(() => import('./Home/Home'));
// const Register = lazy(() => import('./Register'));
// const Login = lazy(() => import('./Login'));
// const Contacts = lazy(() => import('./Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
};