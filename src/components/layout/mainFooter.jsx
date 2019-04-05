import React, { Component } from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment
} from "semantic-ui-react";

const MainFooter = () => {
  return (
    <Segment
      color="black"
      style={{ margin: "5em 0em 0em", padding: "3em 0em" }}
      vertical
    >
      <Container textAlign="center">
        <Grid columns={3} divided stackable>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as="h4" content="Group 1" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Group 2" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted as="h4" content="Group 3" />
              <List link inverted>
                <List.Item as="a">Link One</List.Item>
                <List.Item as="a">Link Two</List.Item>
                <List.Item as="a">Link Three</List.Item>
                <List.Item as="a">Link Four</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted section />
        <Image
          src={require(`../../img/teamlogo_white.png`)}
          centered
          size="tiny"
        />
        <List horizontal inverted divided link size="small">
          <List.Item>
            Copyright &copy; {new Date().getFullYear()} Hijacks Team
          </List.Item>
        </List>
      </Container>
    </Segment>
  );
};

export default MainFooter;
