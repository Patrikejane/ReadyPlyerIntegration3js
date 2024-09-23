import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useState } from "react";



function App() {
  const [model, setModel] = useState("anura"); // Manage current model state

  const handleNextModel = () => {
    setModel((prevModel) => (prevModel === "anura" ? "another" : "anura"));
  };

  const handlePreviousModel = () => {
    setModel((prevModel) => (prevModel === "anura" ? "another" : "anura"));
  };

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Arrow buttons */}
      <button
        onClick={handlePreviousModel}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          zIndex: 1,
          fontSize: "2rem",
        }}
      >
        {"<"}
      </button>

      <Canvas shadows camera={{ position: [0, 7, 7], fov: 45 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience model={model} />
      </Canvas>

      <button
        onClick={handleNextModel}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          zIndex: 1,
          fontSize: "2rem",
        }}
      >
        {">"}
      </button>
    </div>
  );
}

export default App;
