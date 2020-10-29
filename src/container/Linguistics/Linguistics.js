import React, { Component } from 'react';
import English from '../English/English';
import French from '../French/French';
import German from '../German/German';
import {Route, NavLink, Switch} from 'react-router-dom';
import'./Linguistics.css';

class Linguistics extends Component{


    render(){


        return(

            <div>
            <header className="Linguistics">
                <nav>
                    <ul>
                            <li><NavLink to={{pathname:'/En'}}>English</NavLink></li>
                            <li><NavLink to={{pathname:'/Fr'}}>French</NavLink></li>                            
                            <li><NavLink to={{pathname:'/De'}}>German</NavLink></li>
                    </ul>
                </nav>

            </header>
            <Switch>
            <Route path="/En" exact component={English}/>            
            <Route path="/Fr" exact component={French}/>            
            <Route path="/De" exact component={German}/>
            
            </Switch>

        </div>
        );
    };
}

export default Linguistics;