/* import * as React from "react";

import { AButton } from "./AButton";

export default class PersonCard extends React.Component {
  state = {
    info: { name: "", address: { detail: { line1: "", line2: "" }, zip: "" } },
    fromForm: {
      name: "",
      address: { detail: { line1: "l1", line2: "" }, zip: "" },
    },
  };
  line1UpdateForm = (evt: { target: { value: string } }) => {
    //this.state.fromForm.address.detail.line1 = evt.target.value;
    this.setState((prevState, props) => {
      return {
        ...prevState,
        props.state.fromForm.address: {
          ...this.state.info.address,
          line1: this.state.fromForm.address.detail.line1,
        },
      };
    });
    this.state = {
      info: { name: "", address: { detail: { line1: "", line2: "" }, zip: "" } },
      fromForm: {
        name: "",
        address: { detail: { line1: "l1", line2: "" }, zip: "" },
      },
    };
  };
  //t1Ref = React.useRef();
  line1Update = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        address: {
          ...this.state.info.address,
          line1: this.state.fromForm.address.detail.line1,
        },
      };
    });
  };

  line2Update = () => {
    /* this.setState((prevState) => {
      return { Status: "Stuck" };
    }); 
  };

  zipUpdate = () => {
    /*  this.setState((prevState) => {
      return { Status: "Stuck" };
    }); 
  };

  render() {
    return (
      <>
        <form>
          T1{" "}
          <input
            id="t1"
            key="t1"
            type="text"
            value={this.state.fromForm.address.detail.line1}
            onChange={(evt) => this.line1UpdateForm}
          ></input>
          <AButton ClickHandler={this.line1Update} text="Line 1" />
          <br />
          T2 <text key="t2"></text>
          <AButton ClickHandler={this.line2Update} text="Line 2" />
          <br />
          Zip <text key="zip"></text>
          <AButton ClickHandler={this.zipUpdate} text="Zip" />{" "}
        </form>
        <br />
        Name :{this.state.info.name}
        <br />
        L1{this.state.info.address.detail.line1}
        <br />
        L2 {this.state.info.address.detail.line2}
        <br />
        Zip {this.state.info.address.zip}
        <br />
      </>
    );
  }
}
 */
