import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(_p){
        super(_p);
        this.state = {
            term: 'Helllo'
        };
    }
    render(){
        return (
            <section>
                <label htmlFor="search">Search</label>
                <input type="text"
                       id="search"
                       value={this.state.term}
                       onChange={event => this.setState({term: event.target.value})}/>
                <h1>{this.state.term}</h1>
            </section>
        );
    }

    // onInputChange(_e){
    //     console.log(_e.target.value);
    // }
}
export default SearchBar;