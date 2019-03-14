import React, { Component } from 'react';
import ListItem from './ListItem'
class List extends Component {
    render() {
        const items = this.props.toDos.map((toDo, i) => <ListItem toDo={toDo} key={i}></ListItem>)
        return (
            <ul className="List">
                {items}
            </ul>
        )
    }
}

export default List;