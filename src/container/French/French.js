import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function French() {

    //this function translate the website into french
    const { t, i18n } = useTranslation();

    //useEffect is used to load the language selected before rendering the component
    useEffect(() => {
        i18n.changeLanguage('fr');
    }, [i18n])

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <h1>{t("title")}</h1>
            <p>{t("description.part1")}</p>
            <p>{t("description.part2")}</p>
        </div>
    );
}
export default French;