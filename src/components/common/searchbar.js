import React, { Component } from "react";
import Styles from "../common/common.css";

const developerKey = "rgG39BTxQ7xdQQpHdZw6tw";
let API_URL = "/api/";
let pageNumber = 1;

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { filterText: "" };
    }
    getBooksList() {
        return fetch(
            API_URL + "search/index.xml?key=" + developerKey + "&q=" + this.state.filterText + "&page=" + pageNumber, {
                mode: "no-cors"
            }
        )
            .then(response => {
                if (response.ok) {
                    console.log("response")
                    return response.json();
                } else {
                    // handle error
                }
            })
            .then(responseJson => {
                console.log(responseJson)
                //this.setState({ moviesList: responseJson.results });
                //return responseJson;
            })
            .catch(error => {
                console.error("error");
            });

    }

    onFilterTextChange(evt) {
        this.setState({
            filterText: evt.target.value
        }, () => {
            this.getBooksList()
        })
    }

    render() {
        return (
            <div>
                <input
                    className={Styles.SearchBarInput}
                    type="text"
                    placeholder="Search..."
                    value={this.state.filterText}
                    onChange={this.onFilterTextChange.bind(this)}
                />
            </div>
        );
    }
}
