import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "../src/components/common/searchbar";
import Styles from "./app.css";

const Index = () => {
  return (
    <div className={Styles.App}>
      <header className={Styles.ItemHeader}>
        {"Find books by title, author, or ISBN"}
      </header>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
