import React, {useEffect} from 'react';
import {Route,  Redirect} from 'react-router-dom';
import English from '../English/English';
import French from '../French/French';
import German from '../German/German';
import Link from '../../component/Links/Links';
import './Linguistics.css';

 function Linguistics(){

    //get the last selected language from localstorage
    let Lang = localStorage.getItem("i18nextLng")

    /*useEffect is used to to set the selected language 
    before the components are rendered and redirect the 
    user to the corresponding page*/
    useEffect(() => {
        if(Lang === null){
            localStorage.setItem("i18nextLng", "en");
            Lang = localStorage.getItem("i18nextLng");
        }

    },[Lang])
            
    return(
        <div>
            <header className="Linguistics">
                <nav>
                    <ul>
                        <li><Link link='/En' >English</Link></li>
                        <li><Link link='/Fr' >French</Link></li>                            
                        <li><Link link='/De' >German</Link></li>
                    </ul>
                </nav>
            </header>
            <Route path="/En" exact component={English}/>            
            <Route path="/Fr" exact component={French}/>            
            <Route path="/De" exact component={German}/>  
            <Redirect from="/" to={Lang}/>         
        </div>
    );

}

export default Linguistics;