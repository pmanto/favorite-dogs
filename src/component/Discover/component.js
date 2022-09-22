import React from 'react';
import Grid from '../Grid';

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'items': []
        };
    }

    componentDidMount() {
        this.addItem();
    }

    addItem() {
        if (this.state.items.length === this.props.count) {
            return;
        }

        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(
                (result) => {
                    //double check since in dev mod is being called twice
                    if (this.state.items.length < this.props.count) {
                        this.state.items.push(result.url);
                        this.setState({ items: this.state.items });
                        this.addItem();
                    }
                });
    }

    showContent() {
        return this.state.items.length > 0 && this.props.count === this.state.items.length;
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

export default Discover;
