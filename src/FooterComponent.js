import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

class FooterComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-dark text-white py-3 px-5 ">
          <div className="row" style={{ alignItems: "center" }}>
            <div className=" text-start col-md-4 row my-1 gx-0">
              <h5 className="text-uppercase px-2">get in touch</h5>
              <div className="mt-3">
                <div className="row g-0 px-0 " style={{ alignItems: "center" }}>
                  <FontAwesomeIcon icon={faAt} className="col-1 p-0" />
                  <h6 className="col-11 text-start">
                    ahmedraafatal.sawi@gmail.com
                  </h6>
                </div>
                <div className="row g-0 px-0 " style={{ alignItems: "center" }}>
                  <FontAwesomeIcon icon={faIdBadge} className="col-1 p-0" />
                  <h6 className="col-11 text-start">+2-0100-7262-300</h6>
                </div>
              </div>
            </div>
            <div className=" text-center col-md-4 my-1 row gx-0">
              <button type="button" class="btn btn-outline-light w-50 mx-auto">
                <b>CONTACT ME</b>
              </button>
            </div>
            <div className=" text-end col-md-4 my-1 row gx-0 px-1">
              <div>
                <a href="https://www.linkedin.com/in/ahmedralsawi/" target="_blank">
                  <FontAwesomeIcon
                    className="mx-2  text-white"
                    style={{ height: "1.8em" }}
                    icon={faLinkedin}
                  />
                </a>
                <a href="https://github.com/AhmedRAlsawi" target="_blank">
                  <FontAwesomeIcon
                    className="mx-2  text-white"
                    style={{ height: "1.8em" }}
                    icon={faGithub}
                  />
                </a>
                <a href="https://www.facebook.com/A.R.Alsawi" target="_blank">
                  <FontAwesomeIcon
                    className="text-white"
                    style={{ height: "1.8em" }}
                    icon={faFacebook}
                  />
                </a>
              </div>
              <div className="mt-3">
                  <h5>Copyright &copy; 2022 iTi</h5>
                  <h5>React Demo</h5>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterComponent;
