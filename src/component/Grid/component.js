import './style.css';
import React from 'react';
import GridItem from './GridItem';

class Grid extends React.Component {
    getGridItems(){
        let content = [];
        for(let i = 0; i < this.props.count; i++){
            content.push(<GridItem key={`grid-${i}`}/>);
        }

        return content;
    }
    
    render() {
        return (
            <div className="Grid">
                {this.getGridItems()}
            </div>
        );
    }
}

export default Grid;
