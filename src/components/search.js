import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(_p){
        super(_p);
        this.state = {
            term: ''
        };
    }
    render(){
        return (
            <section className="search-bar">
                <input type="text"
                       id="search"
                       placeholder="search"
                       value={this.state.term}
                       onChange={event => this.setState({term: event.target.value})}/>
            </section>
        );
    }

    // onInputChange(_e){
    //     console.log(_e.target.value);
    // }
}
export default SearchBar;