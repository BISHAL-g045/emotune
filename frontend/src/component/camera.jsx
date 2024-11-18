import React, { useRef, useEffect } from "react";

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Access the webcam
    const getCameraStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        // Set the stream as the video source
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam:", error);
      }
    };

    getCameraStream();

    return () => {
      // Cleanup function to stop the camera when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay style={{ width: "100%", height: "auto" }} />
    </div>
  );
};

export default Camera;
