import React from "react";
import "./Launchpad.css";
import LaucheTage from "../LaucheTage/LaucheTage";

const Launchpad = ({ data }) => {
  return (
    <div className="launchpad-card-main">
      <div className="launchpad-card">
        <div className="launchpad-img">
          <img className="launchpad_image" src={data.images.large[0]} />
        </div>
        <div className="launchpad-content">
          <div className="launchpad-details">
            <div className="status-text" id="launchpad-status-text">
              <small className="text">
                {data.status === "retired" ? (
                  <span style={{ color: "red" }}>Retired</span>
                ) : data.status === "active" ? (
                  <span style={{ color: "green" }}>Active</span>
                ) : (
                  <span style={{ color: "blue" }}>Under Construction</span>
                )}
              </small>
            </div>
          </div>
          <h2 className="launchpad-title">{data.name}</h2>
          <p className="description">{data.details}</p>
          <div className="launches">
            <div className="launche-items">
              {data.launches.slice(0, 3).map((id) => (
                <>
                  <LaucheTage id={id} />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launchpad;
