import React from 'react';

import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Dashboard">Dashboard</NavLink>
            <NavLink to="/NewArticles">NewArticles</NavLink>
        </div>
    );
}

export default Navigation;