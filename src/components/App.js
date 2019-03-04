import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "../components/ImageList";

export class App extends Component {
  state = { images: [] };

  handleResponse = results => {
    this.setState(results);
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });

    this.handleResponse({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
