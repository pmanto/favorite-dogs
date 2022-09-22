import './style.css';
import React from 'react';
import GridItem from './GridItem';

class Grid extends React.Component {
    getGridItems = () => {
        let content = [];
        this.props.items.forEach((item, index) => {
            content.push(<GridItem key={`grid-${index}`} url={item} />);
        });

        return content;
    }

    render() {
        return (
            <div className='Grid'>
                {this.getGridItems()}
            </div>
        );
    }
}

export default Grid;
