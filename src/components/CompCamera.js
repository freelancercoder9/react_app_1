import React, { useState } from "react";

function CompCamera() {
  const [playing, setPlaying] = useState(false);
  const CAM_HEIGHT = "500";
  const CAM_WIDTH = "500";

  const start_V = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("viedo_stream")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stop_V = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("viedo_stream")[0];
    video.srcObject.getTracks()[0].stop();
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className=" app_container">
        <video className="viedo_stream" height={CAM_HEIGHT} width={CAM_WIDTH} muted autoPlay></video>
      </div>
      <div className="app_input">{playing ? <button onClick={stop_V}> STOP IT</button> : <button onClick={start_V}>START IT</button>}</div>
    </div>
  );
}

export default CompCamera;
