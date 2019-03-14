import React, { Component } from 'react';
import ListItem from './ListItem'
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDos: props.toDos
        }
        this.clearList = this.clearList.bind(this)
    }
    clearList(e) {
        console.log('clearing list!')
        this.setState({
            toDos: []
        })
    }

    addToList(e) {
        this.state.toDos.push('This is a new item')
    }

    render() {
        const items = this.state.toDos.map((toDo, i) => <ListItem toDo={toDo} key={i}></ListItem>)
        return (
            <>
                <ul className="List">
                    {items}
                </ul>
                <button onClick={this.clearList}>Clear List</button>
            </>
        )
    }
}

export default List;