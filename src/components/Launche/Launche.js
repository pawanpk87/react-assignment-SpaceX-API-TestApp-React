import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import space from "../../services/space";
import "./Launche.css";

const Launche = () => {
  const { id } = useParams();
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    space
      .getLaunchDetails(id)
      .then((response) => {
        setLaunchData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {launchData && (
        <div className="main-content">
          <div className="title">
            <span>{launchData.name}</span>
          </div>

          <div className="date">
            <span>{new Date(launchData.date_utc).toLocaleDateString()}</span>
          </div>

          <div className="description">{launchData.details}</div>
          <div className="reused">
            Reused:{" "}
            {launchData.cores && launchData.cores[0].reused === true
              ? "True"
              : "False"}
          </div>
        </div>
      )}
    </>
  );
};

export default Launche;
