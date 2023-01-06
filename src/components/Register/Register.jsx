import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../redux/operations';
import {
  RegisterContainer,
  RegisterTitle,
  RegisterForm,
  RegisterLabel,
  RegisterFild,
  RegisterBtn,
} from './Register.styled';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(signupUser({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <RegisterContainer>
      <RegisterTitle>
Registration page</RegisterTitle>

      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Name
          <RegisterFild type="text" name="name" value={name} onChange={handleChange} />
        </RegisterLabel>

        <RegisterLabel>
          Email
          <RegisterFild
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </RegisterLabel>

        <RegisterLabel>
          Password
          <RegisterFild
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </RegisterLabel>

        <RegisterBtn type="submit">Registrate</RegisterBtn>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;