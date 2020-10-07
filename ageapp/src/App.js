import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchJobs } from "./store/actions";

import NameForm from "./components/NameForm";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./styles.css";

function App(props) {
  const { fetchJobs } = props;
  const [url, setUrl] = useState(
    "https://cors-anywhere.herokuapp.com/https://api.agify.io?name=Clay"
  );
  useEffect(() => {
    // this effect will only call an action creator, not make an API call
    fetchJobs(url);
  }, [fetchJobs, url]);

  return (
    <div className="App">
      <h1>Aged Names</h1>
      <NameForm setUrl={setUrl} />
      <p>{props.person.age}</p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    person: state.person
  };
};

export default connect(mapStateToProps, { fetchJobs })(App);
