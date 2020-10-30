import React, { useEffect} from 'react';
import { useTranslation} from 'react-i18next';

function English() {
const { t, i18n } = useTranslation();
useEffect(() => {
    i18n.changeLanguage('en');
},[i18n])

return (

            <h1>{t("title")}</h1>


);

}



export default English;