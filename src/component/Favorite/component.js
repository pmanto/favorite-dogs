import React from 'react';
import Grid from '../Grid';

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'items': this.getItems()
        };
    }

    getItems() {
        let items = [];
        for(let i = 0; i < localStorage.length; i++){
            if(localStorage.key(i).indexOf('favorite-') === 0){
                items.push(localStorage.key(i).replace('favorite-', ''));
            }
        }

        return items;
    }

    showContent() {
        return this.state.items.length > 0;
    }

    render() {
        return (
            <div className="Discover">
                {this.showContent() &&
                    (<Grid items={this.state.items}></Grid>)
                }
            </div>
        );
    }
}

export default Favorite;
