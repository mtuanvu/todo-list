import './App.css';
import { useTheme } from './theme/ThemeProvider';
import './i18n/i18n'; // import config i18n
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "vi" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <p>{t("currentTheme")}: {theme}</p>

      <button onClick={toggleTheme}>
        {t("switchTheme", { theme: theme === "light" ? "Dark" : "Light" })}
      </button>

      <br /><br />

      <button onClick={toggleLanguage}>
        {t("button.click")}
      </button>
    </div>
  );
}

export default App;
