import logoImage from "../assets/quiz-logo.png";

const Header = () => {
  return (
    <header>
      <img src={logoImage} alt="logo" />
      <h1>React Quiz</h1>
    </header>
  );
};

export default Header;
