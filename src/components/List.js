
import React, { Component } from 'react';

class List extends Component {
    constructor() {
        super();

        this.state = { input: "", chores: [] }

        this.handleChange = event => (
            this.setState({ input: event.target.value })

        )
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    render() {
        const { input, chores } = this.state;

        return (
            <div>
                <h1 className="title"> To do list </h1>
                <form onSubmit={this.handleSubmit}>
                    <button className="addChore"> Add chore </button>
                    <input className="inputBar" type="text" placeholder="insert your chore" value={input} onChange={this.handleChange} />
                </form>
                <ul className="ul--main">
                    {chores.map((value, index) => (
                        <li className="dinamic--li" key={index}>
                            {value}{" "}
                            <button className="deleteEach" onClick={() => this.handleDeleteEach(index)}>
                                {" "}
                               ✖{" "}
                            </button>
                        </li>
                    ))}
                </ul>

                <button className ="deleteButton" onClick={() => this.handleDeleteAll()}>Delete all</button>
            </div>
        );

    }

    handleDeleteAll() {
        this.setState({ input:"", chores: [] })
    }

    handleDeleteEach(index) {
        this.setState(state => state.chores.splice(index, 1));
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => {
            return {
                input: "",
                chores: state.chores.concat([state.input])
            };
        });
    }
}

export default List;


