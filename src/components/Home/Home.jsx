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
      <HomeTitle>Welcome to phone book!!! </HomeTitle>
      {isLogin ? (
        <HomeContainerLogin>
          <p>
            Ok, you entered.
            <BsEmojiWink />
          </p>
          <p>Let's get to work:</p>
          <Link to="/contacts">
            <SlActionRedo size={24} />
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
            <SlActionRedo size={24} />
            Register
          </Link>
          <Link to="/login">
            <SlActionRedo size={24} />
            Login
          </Link>
        </HomeContainerLogin>
      )}
    </HomeContainer>
  );
};

export default Home;
