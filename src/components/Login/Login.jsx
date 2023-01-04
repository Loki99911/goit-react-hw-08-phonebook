import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/operations';
import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginLabel,
  LoginFild,
  LoginBtn,
} from './Login.styled';


const Login = () => {
    const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <LoginContainer>
      <LoginTitle>Страница логина</LoginTitle>

      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          Почта
          <LoginFild
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </LoginLabel>

        <LoginLabel>
          Пароль
          <LoginFild
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </LoginLabel>

        <LoginBtn type="submit">Войти</LoginBtn>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;