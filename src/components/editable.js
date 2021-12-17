import React, { Component } from "react";
class Editable extends Component {
    constructor() {
      super();
      this.state = {
        textAreaValue: ""
      };
      this.handleChange = this.handleChange.bind(this);
      this.textareaRef = React.createRef();
    }

  
    handleChange(event) {
      this.setState({ textAreaValue: event.target.value });
    }
    bold() {
        console.log("test");
    }
    /*
    saveasfile() {
        var blob = new Blob([textAreaValue], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, "helloworld.txt");
    }
    */
    render() {
          
      return (
        <div>
          <textarea
            value={this.state.textAreaValue}
            onChange={this.handleChange}
            ref={this.textareaRef}
          />
        </div>
      );
    }
  }

  
  export default Editable;
