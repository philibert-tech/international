import React, { useEffect } from 'react';
import {useTranslation} from 'react-i18next';

function French() {
const { t, i18n } = useTranslation();
useEffect(() => {
    i18n.changeLanguage('fr');
},[i18n])
      
return (

            <h1>{t("title")}</h1>


);
}



export default French;