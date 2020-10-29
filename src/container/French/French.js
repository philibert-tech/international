import React, { Component } from 'react';
//import Content from '../../component/Content/Content';

import {useTranslation} from 'react-i18next';

function MyComponent() {
const { t, i18n } = useTranslation();
i18n.changeLanguage('fr');

      
return <h1>{t('Welcome to React')}</h1>
}


class French extends Component{  

render(){

        return(
           <MyComponent/>
            
        );
    };
}

export default French;