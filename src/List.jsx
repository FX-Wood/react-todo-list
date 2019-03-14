import React, { Component } from 'react';
import ListItem from './ListItem'
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDos: props.toDos,
            newItem: ''
        }
        this.clearList = this.clearList.bind(this)
        this.inputItemChange = this.inputItemChange.bind(this)
        this.addToList = this.addToList.bind(this)
    }

    clearList(e) {
        console.log('clearing list!')
        this.setState({
            toDos: []
        })
    }

    inputItemChange(e) {
        console.log('changing input item!')
        this.setState({newItem: e.target.value})
    }

    addToList(e) {
        console.log('adding item')
        this.setState((state, props) => {
            return {
                toDos: state.toDos.concat(Array.of(state.newItem)),
                newItem: ''
            }
        })
    }

    render() {
        console.log(this.state.toDos)
        const items = this.state.toDos.map((toDo, i) => <ListItem toDo={toDo} key={i}></ListItem>)
        return (
            <>
                <ul className="List">
                    {items}
                </ul>
                <input type="text" 
                    placeholder="Type a task here" 
                    onChange={this.inputItemChange}
                    value={this.state.newItem}
                />
                <button onClick={this.addToList}>Add it to the list!</button>
                <br/>
                <button onClick={this.clearList}>Finished the list</button>
            </>
        )
    }
}

export default List;