import './style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NAV_BAR_DISCOVER = 'discover';
const NAV_BAR_FAVORITE = 'favorite';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'active': NAV_BAR_DISCOVER,
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
                <a className='NavBar-item'>Favorite Dogs</a>
                <a href="#"
                    className={`NavBar-item NavBar-link ${this.isActive(NAV_BAR_DISCOVER) ? 'NavBar-link--active' : ''}`}
                    onClick={() => this.onItemClick(NAV_BAR_DISCOVER)}
                >
                    <FontAwesomeIcon icon="magnifying-glass" />
                </a>
                <a href="#"
                    className={`NavBar-item NavBar-link ${this.isActive(NAV_BAR_FAVORITE) ? 'NavBar-link--active' : ''}`}
                    onClick={() => this.onItemClick(NAV_BAR_FAVORITE)}
                >
                    <FontAwesomeIcon icon="heart" />
                </a>
            </div>
        );
    }
}

export default NavBar;
