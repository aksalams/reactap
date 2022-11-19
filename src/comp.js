import React from "react";


class Info extends React.Component {

    constructor(props) { 
        super(props);
        this.state = {
            count:0,
        }
    }
  render() {
    const title = this.props.title;
    const showTitle = true;
    return (
      <div>
        <h1> {showTitle ? title : ""} </h1>
        <h2> Manage your stuff </h2>
      </div>
    );
  }
}

export default Info