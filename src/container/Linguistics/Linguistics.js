import React from 'react';
import English from '../English/English';
import French from '../French/French';
import German from '../German/German';
import {Route, Link, Switch, Redirect} from 'react-router-dom';
import'./Linguistics.css';

 function Linguistics(){

    const Lang = localStorage.getItem("i18nextLng");

    if(Lang === null){
       localStorage.setItem("i18nextLng", "en");
       Lang = localStorage.getItem("i18nextLng");
    }
          
  
        return(

            <div>
            <header className="Linguistics">
                <nav>
                    <ul>
                            <li><Link to='/En'>English</Link></li>
                            <li><Link to='/Fr'>French</Link></li>                            
                            <li><Link to='/De'>German</Link></li>
                    </ul>
                </nav>

            </header>
            <Switch>
            <Route path="/En" exact component={English}/>            
            <Route path="/Fr" exact component={French}/>            
            <Route path="/De" exact component={German}/>  
            <Redirect from="/" to={Lang}/>          
            </Switch>

        </div>
        );

}

export default Linguistics;