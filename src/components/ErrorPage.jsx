import React from "react";
import eImg from "../assets/location.svg";

const ErrorPage = () => {
  return (
    <>
      <img
        className="d-block mx-auto my-5"
        src={eImg}
        alt="error-img"
        height={200}
      />
      <p className="fs-5 text-danger text-center text-capitalize pt-3">
        location not found
      </p>

      <button
        className="btn btn-dark mx-auto d-block"
        onClick={() => window.location.reload()}
      >
        back
      </button>
    </>
  );
};

export default ErrorPage;
