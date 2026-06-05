import { useTheme } from '../../hooks/useTheme';
import './Header.scss';

function Header() {
  const [theme, toggleTheme] = useTheme();

  return (
    <header>
      <div className="container">
        <div className="header-block">
          <div className="theme-toggle">
            <button
              className="theme-toggle__btn"
              id="themeSwitcher"
              onClick={toggleTheme}
            ></button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;