import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

export default function Experience() {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 8
    // state.camera.position.z = Math.cos(angle) * 8
    // state.camera.lookAt(0, 0, 0)

    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh ref={cubeRef} rotation-y={Math.PI * 0.25} position-x={0} scale={1}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
}
