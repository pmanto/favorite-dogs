import './style.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class GridItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'mediaUrl': null,
            'isFavorite': false
        };
    }

    componentDidMount() {
        this.getMedia();
    }

    getMedia() {
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        mediaUrl: result.url
                    });

                    this.setState({
                        isFavorite: localStorage.getItem(this.getFavoriteKey()) !== null
                    })
                });
    }

    isVideo() {
        if (this.state.mediaUrl === null || this.state.mediaUrl === '') {
            return false;
        }

        const url = this.state.mediaUrl.split('.');
        const extension = url[url.length - 1];
        return extension === 'mp4';
    }

    addRemoveFavorite() {
        if (this.state.isFavorite) {
            localStorage.removeItem(this.getFavoriteKey());
        } else {
            localStorage.setItem(this.getFavoriteKey(), true);
        }

        this.setState({ isFavorite: !this.state.isFavorite });
    }

    getFavoriteKey() {
        return `favorite-${this.state.mediaUrl}`;
    }

    render() {
        return (
            <div className='GridItem'>
                <div className='GridItem-container' onClick={() => this.addRemoveFavorite()}>
                    {this.isVideo() &&
                        (<video className='GridItem-media' controls>
                            <source src={this.state.mediaUrl}>
                            </source>
                        </video>)
                    }

                    {!this.isVideo() &&
                        (<img className='GridItem-media' src={this.state.mediaUrl}></img>)
                    }

                    <FontAwesomeIcon className={`GridItem-icon ${this.state.isFavorite ? 'GridItem-icon--fav' : ''}`} icon="heart" />
                </div>
            </div>
        );
    }
}

export default GridItem;
