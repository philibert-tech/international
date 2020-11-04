import React, { useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import logo from '../../assets/images/germany.png';

function German() {

    //this function translate the website into german
    const { t , i18n } = useTranslation();

    //useEffect is used to load the language selected before rendering the component
    useEffect(() => {
        i18n.changeLanguage('de');
    },[i18n])

    return(
        <div style={{width:"80%", margin:"auto"}}>
            <h1>{t("title")}</h1>
            <p>{t("description.part1")}</p>
            <img src={logo} style={{width:"400px"}} alt="This is the German logo"/> 
            <p>{t("description.part2")}</p>
        </div>
    ); 
}
export default German;