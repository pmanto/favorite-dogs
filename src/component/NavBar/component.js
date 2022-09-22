import './style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const NAV_BAR_DISCOVER = 'discover';
const NAV_BAR_FAVORITE = 'favorites';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'active': window.location.pathname.includes(NAV_BAR_FAVORITE)
                ? NAV_BAR_FAVORITE
                : NAV_BAR_DISCOVER
        };
    }

    onItemClick(itemName) {
        this.setState({ active: itemName });
    }

    isActive(itemName) {
        return this.state.active === itemName;
    }

    render() {
        return (
            <div className='NavBar'>
                <a className='NavBar-link'>Favorite Dogs</a>
                <NavLink to="/"
                    className={`NavBar-link ${this.isActive(NAV_BAR_DISCOVER) ? 'NavBar-link--active' : ''}`}
                    onClick={() => this.onItemClick(NAV_BAR_DISCOVER)}
                >
                    <FontAwesomeIcon icon="magnifying-glass" />
                </NavLink>
                <NavLink to="/favorites"
                    className={`NavBar-link ${this.isActive(NAV_BAR_FAVORITE) ? 'NavBar-link--active' : ''}`}
                    onClick={() => this.onItemClick(NAV_BAR_FAVORITE)}
                >
                    <FontAwesomeIcon icon="heart" />
                </NavLink>
                {
                    this.state.active === NAV_BAR_DISCOVER &&
                    (<NavLink onClick={() => window.location.reload(false)} className='NavBar-link NavBar-refresh' to="/">
                        <FontAwesomeIcon icon="rotate-right" />
                    </NavLink>)
                }
            </div>
        );
    }
}

export default NavBar;
