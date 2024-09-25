import { useContext, useEffect } from "react";
import { LanguageContext } from './LanguageContext'

const LanguageSwitcher = () => {
    const { language, swichLanguage } = useContext(LanguageContext)

    const handleChange = (event) => {
        swichLanguage(event.target.value)
    }

    useEffect(() => {
        document.documentElement.lang = language;
      }, [language]);

    return (
        <div className="language-switcher-container">
            <p>Текущий язык: {language}</p>
            <select className="language-select" name="language" value={language} onChange={handleChange}>
                <option value="en">Английский</option>
                <option value="ru">Русский</option>
                <option value="fr">Французский</option>
                <option value="de">Немецкий</option>
            </select>
        </div>
    )
}

export default LanguageSwitcher