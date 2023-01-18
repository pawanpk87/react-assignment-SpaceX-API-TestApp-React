import React, { useEffect, useState } from "react";
import space from "../../services/space";
import "./LaucheTage.css";
import { Link } from "react-router-dom";

const LaucheTage = ({ id }) => {
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    space
      .getLaunchDetails(id)
      .then((response) => {
        setLaunchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Link to={`/launches/${id}`}>
      <div className="lauche-tage">
        <span>{launchData && launchData.name}</span>
      </div>
    </Link>
  );
};

export default LaucheTage;
