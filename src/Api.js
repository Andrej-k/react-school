import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";

class App extends Component {
  state = {
    comicStrips: []
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url = "http://stapi.co/api/v1/rest/comicStrip/search";

    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          comicStrips: result.comicStrips.slice(0, 4)
        });
      });
  }

  removeComicStrip = index => {
    let { comicStrips } = this.state;

    this.setState({
      comicStrips: comicStrips.filter((comicStrip, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = comicStrip => {
    this.setState({ comicStrips: [...this.state.comicStrips, comicStrip] });
  };

  render() {
    const { comicStrips } = this.state;

    return (
      <div className="container">
        <Table
          comicStripData={comicStrips}
          removeComicStrip={this.removeComicStrip}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
