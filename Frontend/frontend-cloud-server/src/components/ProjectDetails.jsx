// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import HomePageNavbar from './HomePageNavbar';
// import axios from 'axios';
// import URL from '../URL';
// import styles from './ProjectDetails.module.css';
// import DataTable from './DataTable.jsx';
// import DataGraph from './DataGraph.jsx';

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [writeAPI, setWriteAPI] = useState('');
//   const [projectData, setProjectData] = useState();
//   const [recommendedCrop, setRecommendedCrop] = useState(null);

//   const serverURL = URL();

//   useEffect(() => {
//     axios.get(`${serverURL}/data/${id}/sensor_keys`).then(res => setWriteAPI(`${serverURL}${res.data}`));
//     axios.get(`${serverURL}/project/sensors/${id}`).then(res => setProjectData(res.data));
//   }, [id, serverURL]);

//   const handlePredictCrop = () => {
//     // API call will be added later
//     setRecommendedCrop("Sample Crop");
//   };

//   return (
//     <div>
//       <HomePageNavbar />
//       <div>
//         Write API Key: <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{writeAPI}</pre>
//         <hr />
//       </div>

//       {projectData ? (
//         <div style={{textAlign: 'center'}}>
//           <h1>{projectData.title}</h1>
//           <p>Number of Sensors: {projectData.number_of_sensors}</p>

//           <div className={styles.predictContainer} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <button className={styles.predictButton} onClick={handlePredictCrop}>
//               Predict Crop
//             </button>
//             {recommendedCrop && (
//               <div className={styles.cropRecommendation}>
//                 <h2>{recommendedCrop}</h2>
//               </div>
//             )}
//           </div>

//           <div className={styles.tableGraph}>
//             {projectData.sensors.map((sensor) => (
//               <div className={styles.sensorContainer} key={sensor.id}>
//                 <h3>{sensor.name}</h3>
//                 <div className={styles.sensorContent}>
//                   <div className={styles.tableContainer}>
//                     <DataTable sensorID={sensor.id} />
//                   </div>
//                   <div className={styles.graphContainer}>
//                     <DataGraph sensorID={sensor.id} sensorName={sensor.name} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProjectDetails;
// ``

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomePageNavbar from "./HomePageNavbar";
import axios from "axios";
import URL from "../URL";
import styles from "./ProjectDetails.module.css";
import DataTable from "./DataTable.jsx";
import DataGraph from "./DataGraph.jsx";

const ProjectDetails = () => {
  const { id } = useParams();
  const [writeAPI, setWriteAPI] = useState("");
  const [projectData, setProjectData] = useState();
  const [recommendedCrop, setRecommendedCrop] = useState(null);
  const [loadingPrediction, setLoadingPrediction] = useState(false);
  const [error, setError] = useState(null);

  const serverURL = URL();

  useEffect(() => {
    axios
      .get(`${serverURL}/data/${id}/sensor_keys`)
      .then((res) => setWriteAPI(`${serverURL}${res.data}`))
      .catch((err) => console.error("Error fetching write API key:", err));

    axios
      .get(`${serverURL}/project/sensors/${id}`)
      .then((res) => setProjectData(res.data))
      .catch((err) => console.error("Error fetching project data:", err));
  }, [id, serverURL]);

  const handlePredictCrop = () => {
    setLoadingPrediction(true);
    setError(null);

    axios
      .get(`${serverURL}/predict_crop/${1}`)
      .then((res) => {
        setRecommendedCrop(res.data.predicted_crop);
      })
      .catch((err) => {
        console.error("Error predicting crop:", err);
        setError("Failed to fetch prediction.");
      })
      .finally(() => {
        setLoadingPrediction(false);
      });
  };

  return (
    <div>
      <HomePageNavbar />
      <div>
        Write API Key:{" "}
        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
          {writeAPI}
        </pre>
        <hr />
      </div>

      {projectData ? (
        <div style={{ textAlign: "center" }}>
          <h1>{projectData.title}</h1>
          <p>Number of Sensors: {projectData.number_of_sensors}</p>

          <div
            className={styles.predictContainer}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              className={styles.predictButton}
              onClick={handlePredictCrop}
              disabled={loadingPrediction}
            >
              {loadingPrediction ? "Predicting..." : "Predict Crop"}
            </button>

            {error && <p className={styles.error}>{error}</p>}

            {recommendedCrop && !error && (
              <div className={styles.cropRecommendation}>
                <h2>{recommendedCrop}</h2>
              </div>
            )}
          </div>

          <div className={styles.tableGraph}>
            {projectData.sensors.map((sensor) => (
              <div className={styles.sensorContainer} key={sensor.id}>
                <h3>{sensor.name}</h3>
                <div className={styles.sensorContent}>
                  <div className={styles.tableContainer} >
                    <DataTable sensorID={sensor.id}/>
                  </div>
                  <div className={styles.graphContainer} >
                    <DataGraph sensorID={sensor.id} sensorName={sensor.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProjectDetails;
