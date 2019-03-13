import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return <li className="ListItem">{this.props.toDo}</li>
    }
}

export default ListItem;