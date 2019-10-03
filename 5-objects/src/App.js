import React from "react";
import { Container, Grid } from "@material-ui/core";
import "./App.css";

import Kitties from "./cats.json";

export class App extends React.Component {
  render() {
    return (
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <h1>My Kitties</h1>
          </Grid>
          {/*
            // TODO
            // Map through Kitties JSON object and display the image
            // Use the JSX below to present the data 
              <Grid item xs={4}>
                <div
                  className="kitty"
                  style={{ backgroundImage: `url("${kitty.url}")` }}
                ></div>
              </Grid>
          */}
        </Grid>
      </Container>
    );
  }
}

export default App;
