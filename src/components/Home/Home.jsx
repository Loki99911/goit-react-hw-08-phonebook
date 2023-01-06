import { useSelector } from 'react-redux';
import {
  HomeContainer,
  HomeTitle,
  HomeContainerLogin,
  Link,
} from './Home.styled';
import { SlActionRedo} from 'react-icons/sl';
import { BsEmojiFrown, BsEmojiWink } from 'react-icons/bs';
const Home = () => {
  const isLogin = useSelector(state => state.user.isLogin);
  return (
    <HomeContainer>
      <HomeTitle>Welcome to Your phone book!!! </HomeTitle>
      {isLogin ? (
        <HomeContainerLogin>
          <p>
            Ok, you entered.
            <BsEmojiWink />
          </p>
          <p>Let's get to work:</p>
          <Link to="/contacts">
            <SlActionRedo />
            Contacts
          </Link>
        </HomeContainerLogin>
      ) : (
        <HomeContainerLogin>
          <p>
            You don`t register yet...
            <BsEmojiFrown />
          </p>
          <p>Let's get log in or register:</p>
          <Link to="/register">
            <SlActionRedo />
            Register
          </Link>
          <Link to="/login">
            <SlActionRedo />
            Login
          </Link>
        </HomeContainerLogin>
      )}
    </HomeContainer>
  );
};

export default Home;
