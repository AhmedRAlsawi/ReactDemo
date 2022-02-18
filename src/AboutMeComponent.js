import React from "react";

class AboutMeComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <section className="container" style={{ height: "225px" }}>
          <div className="row">
            <div
              className="col-5 row text-center"
              style={{ height: "225px", alignContent: "center" }}
            >
              <h2
                className="text-dark"
                style={{ textShadow: "0px 0px 2px black" }}
              >
                ABOUT ME
              </h2>
            </div>
            <div className="col-7 p-5">
              <p
                className="text-justify fw-bold"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
                unde, cumque fugit veniam nesciunt officia animi id modi,
                praesentium molestiae blanditiis quibusdam nam reprehenderit
                deleniti doloremque nulla, maiores minus. Ad.
              </p>
              <button type="button" className="col-4 btn btn-outline-dark">
                DOWNLOAD RESUME
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutMeComponent;
