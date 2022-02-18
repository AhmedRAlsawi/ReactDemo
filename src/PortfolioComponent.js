import React from "react";

class PortfolioComponent extends React.Component {
  constructor() {
    super();
  }
  portfolioElements = [
    "web design",
    "mobile design",
    "logo design",
    "web application development",
    "mobile application development",
    "pwa development",
  ];
  render() {
    return (
      <>
        <div className="container-md  p-5">
          <div>
            <h2
              className="text-uppercase mx-auto col-10 px-4 mb-5"
              style={{ textShadow: "0px 0px 2px black" }}
            >
              Portfolio
            </h2>
            <div
              className="row col-10 mx-auto justify-content-center  text-white"
              style={{ alignContent: "center" }}
            >
              {this.portfolioElements.map((ele) => (
                <div class="card text-center bg-dark bg-opacity-75 py-5 mx-4 my-4 col-lg-3">
                  <div
                    class="card-body py-0 px-0 row"
                    style={{ alignContent: "center" }}
                  >
                    <h5 class="card-title text-uppercase px-1">{ele}</h5>
                    <hr className="w-50 mx-auto"></hr>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}


export default PortfolioComponent;