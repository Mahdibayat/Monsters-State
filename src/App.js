import React from 'react';
import './App.scss';
import { SearchBar } from "./components/SearchBar/search-bar-component";
import { MonsterArea } from "./components/MonsterArea/monster-area-component";
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            data: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
            .then(response => response.data)
            .then(data => this.setState({ data : data}))
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }


    render() {
        const { input, data } = this.state;
        const filterInput = data.filter(monster =>
                monster.name.toLowerCase().includes(input.toLowerCase())
        )
        return (
            <div className='bod'>
                <h1 className='welcome'>welcome to monsters state</h1>
                <SearchBar
                    input={this.state.input}
                    handleChange={this.handleChange}
                />
                <MonsterArea data={filterInput} />
            </div>
        );
    }
}

export default App;
