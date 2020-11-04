import React from 'react';
import {Link} from 'react-router-dom';

const link = (props) => (
    <Link to={props.link}>{props.children}</Link>
);

export default link;
