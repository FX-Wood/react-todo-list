import React, { Component } from 'react';
import ListItem from './ListItem'
class List extends Component {
    render() {
        return (
            <ul className="List">
                <ListItem />
                <ListItem />
                <ListItem />
            </ul>
        )
    }
}

export default List;