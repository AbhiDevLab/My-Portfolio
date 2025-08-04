import { useGLTF } from '@react-three/drei';
import { forwardRef, useRef, useImperativeHandle } from 'react';
import { useSpring, animated } from '@react-spring/three';

const Abhi = forwardRef((props, ref) => {
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/models/abhi.glb');

  // Spring for rotation
  const [{ rotation }, api] = useSpring(() => ({
    rotation: [0, Math.PI / 6, 0], // default angle (30°)
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  // Expose resetRotation() to parent
  useImperativeHandle(ref, () => ({
    resetRotation: () => {
      api.start({ rotation: [0, Math.PI / 6, 0] });
    },
  }));

  return (
    <animated.group
      ref={modelRef}
      {...props}
      dispose={null}
      rotation={rotation}>
      {/* Example: Add castShadow and receiveShadow for better visuals */}
      <group position={[-0.004, 0.925, 0.131]} scale={0.52} castShadow receiveShadow>
        <group position={[0, 0.027, -0.28]} rotation={[-0.263, 0, 0]} scale={0.259}>
          <group position={[0.001, -0.051, -0.002]} rotation={[1.572, 0, 0]} scale={1.06}>
            <mesh geometry={nodes.Cube011_1.geometry} material={materials.body} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_2.geometry} material={materials['black.002']} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_3.geometry} material={materials.screen} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_4.geometry} material={materials.dark} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_5.geometry} material={materials['glass.002']} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_6.geometry} material={materials.Material} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_7.geometry} material={materials['Material.004']} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_8.geometry} material={materials['glass.003']} castShadow receiveShadow />
            <mesh geometry={nodes.Cube011_9.geometry} material={materials['Apple-logo']} castShadow receiveShadow />
          </group>
          <mesh geometry={nodes.Text.geometry} material={materials['Material.001']} position={[0.01, 0.064, -0.002]} rotation={[1.571, 0, 0]} scale={[0.044, 0.045, 0.049]} castShadow receiveShadow />
        </group>
        <group position={[0, 0.017, -0.003]} rotation={[-0.016, 0, 0]} scale={0.274}>
          <mesh geometry={nodes.Cube012_1.geometry} material={materials.body} castShadow receiveShadow />
          <mesh geometry={nodes.Cube012_2.geometry} material={materials.Dark} castShadow receiveShadow />
          <mesh geometry={nodes.Cube012_3.geometry} material={materials['Material.005']} castShadow receiveShadow />
        </group>
        <mesh geometry={nodes.Cube002.geometry} material={materials.body} position={[0, 0.025, 0.149]} rotation={[0.001, 0, 0]} scale={0.121} castShadow receiveShadow />
        <group position={[0.006, 0.027, -0.093]} scale={0.259}>
          <mesh geometry={nodes.Cube004_1.geometry} material={materials.key} castShadow receiveShadow />
          <mesh geometry={nodes.Cube004_2.geometry} material={materials['key.002']} castShadow receiveShadow />
          <mesh geometry={nodes.Cube004_3.geometry} material={materials['Material.006']} castShadow receiveShadow />
        </group>
        <mesh geometry={nodes.Cube004.geometry} material={materials['black.003']} position={[-0.393, 0.019, -0.222]} rotation={[0.001, 0, 0]} scale={[0.006, 0.004, 0.008]} />
        <mesh geometry={nodes.Cube006.geometry} material={materials.black} position={[-0.392, 0.02, -0.227]} rotation={[0.001, 0, 0]} scale={[0.006, 0.003, 0.001]} />
        <mesh geometry={nodes.Cube007.geometry} material={materials.black} position={[-0.392, 0.018, -0.227]} rotation={[0.001, 0, 0]} scale={[0.006, 0.003, 0.001]} />
        <mesh geometry={nodes.Cube008.geometry} material={materials['black.003']} position={[-0.393, 0.019, -0.183]} rotation={[0.001, 0, 0]} scale={[0.006, 0.004, 0.008]} />
        <mesh geometry={nodes.Cube009.geometry} material={materials.black} position={[-0.392, 0.02, -0.188]} rotation={[0.001, 0, 0]} scale={[0.006, 0.003, 0.001]} />
        <mesh geometry={nodes.Cube010.geometry} material={materials.black} position={[-0.392, 0.018, -0.188]} rotation={[0.001, 0, 0]} scale={[0.006, 0.003, 0.001]} />
        <mesh geometry={nodes.Cube011.geometry} material={materials.key} position={[0.14, 0.027, -0.167]} scale={0.259} />
        <mesh geometry={nodes.Cube013.geometry} material={materials.body} position={[-0.4, 0.026, -0.213]} scale={[0.001, 0, 0.001]} />
        <group position={[0.321, 0.026, -0.213]} scale={[0.001, 0, 0.001]}>
          <mesh geometry={nodes.Cube015_1.geometry} material={materials.body} />
          <mesh geometry={nodes.Cube015_2.geometry} material={materials['black.001']} />
        </group>
      </group>
      <group position={[-0.639, 0.925, -0.062]} rotation={[0, 1.172, 0]} castShadow receiveShadow >
        <mesh geometry={nodes.Bolt.geometry} material={materials['Material.008']} position={[-0.025, 0.271, 0.032]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt001.geometry} material={materials['Material.008']} position={[-0.025, 0.227, 0.039]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt002.geometry} material={materials['Material.008']} position={[-0.025, 0.254, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt003.geometry} material={materials['Material.008']} position={[-0.025, 0.184, -0.005]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt004.geometry} material={materials['Material.008']} position={[-0.025, 0.184, -0.075]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt005.geometry} material={materials['Material.008']} position={[-0.025, 0.152, -0.035]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt006.geometry} material={materials['Material.008']} position={[-0.025, 0.117, -0.069]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt007.geometry} material={materials['Material.008']} position={[-0.025, 0.119, 0.037]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt008.geometry} material={materials['Material.008']} position={[-0.025, 0.066, -0.003]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Bolt009.geometry} material={materials['Material.008']} position={[-0.032, 0.098, 0.044]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} />
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.008']} position={[0, 0, -0.002]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Circle001.geometry} material={materials['Material.008']} position={[0, 0.006, -0.002]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Circle002.geometry} material={materials['Material.008']} position={[-0.001, 0.308, 0.14]} rotation={[-1.84, -1.54, 2.562]} />
        <mesh geometry={nodes.Circle003.geometry} material={materials['Material.009']} position={[0.001, 0.349, 0.013]} rotation={[-1.84, -1.54, 2.562]} />
        <mesh geometry={nodes.Cube005.geometry} material={materials['Material.008']} position={[0.012, 0.091, -0.036]} rotation={[0.122, -1.571, 0]} />
        <mesh geometry={nodes.Cube012.geometry} material={materials['Material.008']} position={[0.007, 0.219, -0.037]} rotation={[-1.386, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cube015.geometry} material={materials['Material.008']} position={[0.019, 0.146, -0.061]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cube016.geometry} material={materials['Material.008']} position={[-0.027, 0.128, 0.005]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cube017.geometry} material={materials['Material.008']} position={[-0.011, 0.171, -0.019]} rotation={[-1.386, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cube018.geometry} material={materials['Material.008']} position={[-0.005, 0.205, 0.017]} rotation={[-1.386, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cube019.geometry} material={materials['Material.008']} position={[-0.015, 0.257, 0.025]} rotation={[-3.138, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cube020.geometry} material={materials['Material.008']} position={[-0.02, 0.091, 0.024]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.008']} position={[0, 0.036, -0.002]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Cylinder006.geometry} material={materials['Material.008']} position={[0, 0.118, -0.068]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
        <mesh geometry={nodes.Cylinder011.geometry} material={materials['Material.008']} position={[0, 0.291, 0.032]} rotation={[0, -Math.PI / 2, 0]} />
        <mesh geometry={nodes.Sphere.geometry} material={materials['Material.007']} position={[0, 0.333, 0.064]} rotation={[-1.84, -1.54, 2.562]} />
      </group>
      <group position={[0.29, 0.925, 0.159]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Vert001.geometry} material={materials['IMac-Body']} rotation={[Math.PI, 0, Math.PI]} castShadow receiveShadow />
      </group>
      <group position={[0.425, 0.925, 0.179]} rotation={[0, -0.611, 0]}>
        <group position={[0.011, 0.002, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} castShadow receiveShadow>
          <mesh geometry={nodes.Maillage001.geometry} material={materials.LATTEART} castShadow receiveShadow />
          <mesh geometry={nodes.Maillage001_1.geometry} material={materials.ceramic} castShadow receiveShadow />
        </group>
        <mesh geometry={nodes.plate.geometry} material={materials.ceramic} position={[0, 0.03, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
        <mesh geometry={nodes.spoon_1.geometry} material={materials.SPOON} position={[0.005, 0.006, 0.041]} rotation={[Math.PI / 2, 0, 0]} scale={0.01} />
      </group>
      <group position={[0.334, 0.925, -0.127]} rotation={[Math.PI, 0, Math.PI]} scale={0.105} castShadow receiveShadow>
        <mesh geometry={nodes.Cube021.geometry} material={materials.Holder_Metal} position={[0, 0.162, 0]} scale={0.4} castShadow receiveShadow />
        <mesh geometry={nodes.Cube022.geometry} material={materials.Holder_Plastic} position={[0, 0.567, 0]} scale={0.4} castShadow receiveShadow />
        <mesh geometry={nodes.Cylinder001.geometry} material={materials.Holder_Pen} position={[0.183, 0.156, -0.259]} rotation={[-0.127, 0, -0.136]} scale={0.4} castShadow receiveShadow />
      </group>
      <group position={[-0.372, 0.925, 0.148]} rotation={[Math.PI, 0, Math.PI]} scale={0.112}>
        <mesh geometry={nodes.bottom_cover.geometry} material={materials['black cover.001']} position={[-0.224, 0.035, 0]} rotation={[0, 0, -0.029]} scale={8.942} castShadow receiveShadow />
        <mesh geometry={nodes.lock_ring.geometry} material={materials['glossy metal']} position={[-0.625, 0.094, -0.842]} rotation={[Math.PI / 2, -0.029, 0]} scale={-0.094} castShadow receiveShadow />
        <group position={[-0.25, 0.081, 0]} rotation={[0, 0, -0.029]} scale={8.942}>
          <mesh geometry={nodes.Plane002.geometry} material={materials['top and bottom side']} castShadow receiveShadow />
          <mesh geometry={nodes.Plane002_1.geometry} material={materials['papper stack texture']} castShadow receiveShadow />
        </group>
        <group position={[-0.184, 0.124, -0.008]} rotation={[0, 0, -0.029]} scale={8.942}  >
          <mesh geometry={nodes.Plane.geometry} material={materials['black cover']} castShadow receiveShadow />
          <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.010']} castShadow receiveShadow />
        </group>
      </group>
      <mesh geometry={nodes.Succulent_plant.geometry} material={materials.porcelain} position={[0.516, 0.925, -0.13]} rotation={[Math.PI, 0, Math.PI]} castShadow receiveShadow>
        <mesh geometry={nodes.ground_real.geometry} material={materials['Mud and grass']} position={[0, 0.025, 0]} scale={0.053} castShadow receiveShadow />
        <mesh geometry={nodes.succulent_plant.geometry} material={materials['succulent material']} position={[0, 0.076, 0]} castShadow receiveShadow />
      </mesh>
      <group position={[0, 0, 0.6]} >
        <mesh geometry={nodes.Cube006_1.geometry} material={materials.Chair} />
        <mesh geometry={nodes.Cube006_2.geometry} material={materials.Mat} castShadow receiveShadow />
      </group>
      <mesh geometry={nodes.Drawers.geometry} material={materials.desk} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials.desk} castShadow receiveShadow />
      <mesh geometry={nodes.Cube_2.geometry} material={materials.Mat} castShadow receiveShadow />
    
    </animated.group >
  );  
});

useGLTF.preload('/models/abhi.glb')

export default Abhi;