import React, { useEffect, useState } from "react";
import space from "../../services/space";
import Launchpad from "../../components/Launchpad/Launchpad";

function Launchpads() {
  const [launchpads, setLaunchpads] = useState(null);

  useEffect(() => {
    space
      .getAllLaunchpads()
      .then((response) => {
        setLaunchpads(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          height: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <h1>Launchpads</h1>
        </div>
      </div>
      {launchpads && launchpads.map((data) => <Launchpad data={data} />)}
    </div>
  );
}

export default Launchpads;
