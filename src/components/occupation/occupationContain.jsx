import React, { Component } from "react";
import Footer from "../layout/footer";
import { Tableau } from "tableau-api";
import HugeSelect from "../common/hugeSelect";

var workbook;
var activeSheet;

class OccupationContain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerDiv: <div id="viz1554445704733" />,
      selectRegion: "",
      activeSheet: {},
      workbook: {},
      viz: {}
    };
  }

  componentDidMount() {
    this.initViz();
  }

  regionOptions = [
    { key: 1, text: "Ballarat", value: "ballarat" },
    { key: 2, text: "Barwon", value: "barwon" }
  ];

  getVizObject() {
    var divElement = document.getElementById("viz1554445704733");
    var vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "100%";
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
    var scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

  addValuesToFilter = selectRegion => {
    activeSheet.applyFilterAsync(
      "Employment Region",
      selectRegion,
      this.container.tableau.FilterUpdateType.REPLACE
    );
  };

  initViz() {
    var containerDiv = document.getElementById("tableauPlaceholder");
    //console.log(containerDiv);
    const vizUrl =
      "https://public.tableau.com/views/Function_1_15544457062700/Dashboard1?:embed=y&:display_count=yes&publish=yes";

    var options = {
      //width: "1050px",
      //height: "700px",
      hideTabs: true,
      hideToolbar: false,
      onFirstInteraction: function() {
        console.log("it worked");
        workbook = this.viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
      }
    };

    this.viz = new window.tableau.Viz(this.container, vizUrl, options);
  }

  handleSelectChange = value => {
    console.log(value);
    if (value) {
      this.setState({ selectRegion: value });
    }
    this.addValuesToFilter(value);
  };

  render() {
    return (
      <section id="occupation-section">
        <div className="occupation-inner" />
        <div className="container">
          <div className="d-flex flex-column justify-content-center">
            <div className="text-center mb-5">
              {" "}
              <h1>Explore the most popular Occupations in Vic</h1>
              <p className="text-left">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis odit asperiores repellendus nemo id cum nihil, est
                tempore incidunt corporis error laudantium nobis suscipit
                aspernatur mollitia blanditiis explicabo aut officiis!
              </p>
              <div className="d-flex flex-column justify-content-center ">
                <label color="cyan">Choose a Region</label>

                <HugeSelect
                  options={this.regionOptions}
                  placeholder="choose a region"
                  onChange={this.handleSelectChange}
                />
              </div>
            </div>

            <div ref={c => (this.container = c)} />
          </div>
        </div>

        <div id="fixed-bottom-block" />

        <Footer />
      </section>
    );
  }
}

export default OccupationContain;
