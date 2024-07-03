import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

const MyVideo = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "61a94c26a48147f4b61c2cd32be384f0",
    channel: "demo",
    token: null,
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "80vw", height: "80vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default MyVideo;
