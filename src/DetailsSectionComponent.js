import React from "react";
import "./DetailsSectionComponent.css";
// import bootstrap from 'bootstrap'

class DetailsSectionComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    // const url = "../../public/profil.jpg";
    // const back="background-image";
    // const background = {
    // back: url,
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundColor:"black"
    // };

    return (
      <>
        <section className="container-fluid" id="details">
          <div
            className="col-7 row justify-content-center"
            style={{ height: "475px", alignContent: "center" }}
          >
            <h1 className="text-light text-center mb-2">Ahmed Alsawi</h1>
            <h3 className="text-light text-center mb-4">Web Developer</h3>
            <button type="button" className="col-3 btn btn-outline-light mt-4">
              CONTACT ME
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default DetailsSectionComponent;
