import React from "react";

class SkillsComponent extends React.Component {
  constructor() {
    super();
  }

  focus = [
    "UI/UX Design",
    "Responsive Design",
    "Web Design",
    "Mobile App Design",
  ];
  technogolies = [
    "html",
    "css",
    "javascript",
    "react",
    "photoshop",
    "adobe XD",
    "node.js",
  ];

  technogoliesValues = ["95%", "90%", "85%", "90%", "75%", "60%", "75%"];

  render() {
    return (
      <>
        <section className=" container-md bg-dark mt-4 text-white">
          <div className="row p-5 justify-content-center">
            <h2
              className="text-center mb-5"
              style={{ textShadow: "0px 0px 2px white" }}
            >
              Skills
            </h2>
            <p className="mb-5 fw-bold text-light text-break col-10"
            style={{textAlign:"justify",textJustify:"inter-character"}}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              unde, cumque fugit veniam nesciunt officia animi id modi,
              praesentium molestiae blanditiis quibusdam nam reprehenderit
              deleniti doloremque nulla, maiores minus.Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Omnis unde, cumque fugit veniam
              nesciunt officia animi id modi, praesentium molestiae blanditiis
              
            </p>
            <div className="row justify-content-center">
              <div className="col-lg text-center row gx-0" style={{alignContent:"center"}}>
                <h4 className="border-bottom pb-4 col-6 mx-auto">My Focus</h4>
                <ul
                  style={{ listStyle: "none", margin: "0px", padding: "0px" }}
                  className="pt-4 px-5 mx-auto col-11"
                >
                  {this.focus.map((interest) => (
                    <li className="mx-5 px-4 text-start">
                      <h4>{interest}</h4>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col">
                <div className="row">
                  <ul
                    className=" col-3 text-center text-uppercase text-dark"
                    style={{ listStyle: "none", margin: "0px", padding: "0px" }}
                  >
                    {this.technogolies.map((tech) => (
                      <li className="bg-white text-center mb-4 p-1">
                        <h5>{tech}</h5>
                      </li>
                    ))}
                  </ul>
                  <div className="col-9 gx-0">
                    {this.technogoliesValues.map((val) => (
                      <div
                        class="progress bg-white gx-0 mb-4"
                        style={{ height: "40px", borderRadius: "0px" }}
                      >
                        <div
                          class="progress-bar bg-secondary mx-0 "
                          style={{ width: val }}
                        >
                          <b>{val}</b>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SkillsComponent;
