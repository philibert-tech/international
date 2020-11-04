import React from 'react';
import { NavLink } from 'react-router-dom';

const link = (props) => (
    <NavLink to={props.link}>{props.children}</NavLink>
);

export default link;
