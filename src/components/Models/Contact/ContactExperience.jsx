import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import Abhi from "./Abhi";

const ContactExperience = () => {
    const controlsRef = useRef();
    const abhiRef = useRef();
    const lastInteractionRef = useRef(Date.now());
    const inactivityTimeout = 3000; // 3 seconds

    useEffect(() => {
        const controls = controlsRef.current;

        const updateLastInteraction = () => {
            lastInteractionRef.current = Date.now();
        };

        const handleInactivity = () => {
            const now = Date.now();
            const elapsed = now - lastInteractionRef.current;
            if (elapsed > inactivityTimeout) {
                abhiRef.current?.resetRotation(); // Smoothly rotate back
            }
        };

        // Listen to user interaction (mouse, touch)
        controls?.addEventListener("start", updateLastInteraction);
        controls?.addEventListener("change", updateLastInteraction);
        controls?.addEventListener("end", updateLastInteraction);

        const interval = setInterval(handleInactivity, 1000); // check every second

        return () => {
            clearInterval(interval);
            controls?.removeEventListener("start", updateLastInteraction);
            controls?.removeEventListener("change", updateLastInteraction);
            controls?.removeEventListener("end", updateLastInteraction);
        };
    }, []);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Canvas camera={{ position: [0, 2, 5], fov: 50 }} shadows>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow receiveShadow />

                <group scale={2} position={[0, -1, 0]}>
                    <Abhi ref={abhiRef} />
                </group>

                <OrbitControls ref={controlsRef} enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default ContactExperience;