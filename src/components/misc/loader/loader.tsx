import React from "react";

export class Loader extends React.Component {
    render() {
      return <div className={`pill ${ this.props.isTopLevel ? 'top_level' : 'down_level'}`}></div>;
    }
  }