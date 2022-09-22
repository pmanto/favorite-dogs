import './style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TYPES = new Map([['mp4', 'video'], ['webm', 'video'], ['ogg', 'video']]);

class GridItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'isFavorite': localStorage.getItem(this.getFavoriteKey()) !== null
        };
    }

    isVideo = () => {
        if (this.props.url === null || this.props.url === '') {
            return false;
        }

        const url = this.props.url.split('.');
        const extension = url[url.length - 1];
        return TYPES.get(extension) === 'video';
    }

    addRemoveFavorite = () => {
        if (this.state.isFavorite) {
            localStorage.removeItem(this.getFavoriteKey());
        } else {
            localStorage.setItem(this.getFavoriteKey(), true);
        }

        this.setState({ isFavorite: !this.state.isFavorite });
    }

    getFavoriteKey = () => {
        return `favorite-${this.props.url}`;
    }

    render() {
        return (
            <div className='GridItem'>
                <div className='GridItem-container' onClick={this.addRemoveFavorite}>
                    {this.isVideo() &&
                        (<video className='GridItem-media' controls>
                            <source src={this.props.url}>
                            </source>
                        </video>)
                    }

                    {!this.isVideo() &&
                        (<img className='GridItem-media' src={this.props.url}></img>)
                    }

                    <FontAwesomeIcon className={`GridItem-icon ${this.state.isFavorite ? 'GridItem-icon--fav' : ''}`} icon="heart" />
                </div>
            </div>
        );
    }
}

export default GridItem;
