import React, { Component } from "react";
import { Dropdown, Grid } from "semantic-ui-react";

export default class DropdownSelect extends Component {
  state = {};

  handleChange = (e, { value }) => {
    this.setState({ value });
    this.props.onChnage(value);
  };

  render() {
    const { value } = this.state;
    const { options } = this.props;
    return (
      <Grid columns={1}>
        <Grid.Column>
          <Dropdown
            onChange={this.handleChange}
            options={options}
            placeholder="Choose an option"
            selection
            value={value}
            active
            fluid
          />
        </Grid.Column>
      </Grid>
    );
  }
}
