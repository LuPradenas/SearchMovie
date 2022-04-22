import React from "react";

import { ButtonBack } from "../components/ButtonBack";
import ImageScarecrow from "../assets/image/Scarecrow.png";

const NotFound = () => {
  return (
    <>
      <div className=" mb-3">
        <div className="row g-0">
          <h2 className="text-center p-4 font-weight-bold display-1">
            404 - page not found
          </h2>
          <div className="col-md-4">
            <img
              src={ImageScarecrow}
              alt="page-404"
              className="d-block m-auto"
              style={{ width: "540px" }}
            />
          </div>
          <div className="col-md-6 ">
            <div className="card-body p-5 ">
              <h2 className="text-left p-2 ">I have bad news for you</h2>
              <p className="text-left p-2 ">
                The page you are looking for might be removed or is temporarily
                unavailable
              </p>
              <ButtonBack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotFound;
