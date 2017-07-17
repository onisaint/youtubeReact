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
                       onChange={event => this.onInputChange(event.target.value)}/>
            </section>
        );
    }

    onInputChange(value){
        this.setState({term:value});
        this.props.onSearch(value);
    }
}
export default SearchBar;