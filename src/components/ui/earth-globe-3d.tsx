"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/* ══════════════════════════════════════════════════
   REALISTIC WIREFRAME EARTH
   Looks like Earth — subtle ocean fill, visible
   continent shapes, connection arcs, pulsing dots
   ══════════════════════════════════════════════════ */

const ROTATE_SPEED = 0.1;

/* Lat/Lon → XYZ on unit sphere */
function ll(lat: number, lon: number, r = 1.0): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(Math.sin(phi) * Math.cos(theta)) * r,
    Math.cos(phi) * r,
    Math.sin(phi) * Math.sin(theta) * r
  );
}

/* ── Base Sphere with subtle ocean gradient ── */
function OceanSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * ROTATE_SPEED; });

  const mat = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal; varying vec3 vPos;
      void main(){
        vNormal = normalize(normalMatrix * normal);
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
      }`,
    fragmentShader: `
      varying vec3 vNormal; varying vec3 vPos;
      void main(){
        vec3 light = normalize(vec3(1.0, 0.6, 0.8));
        float diff = max(dot(vNormal, light), 0.0);
        // Deep blue ocean with lighting
        vec3 deep = vec3(0.04, 0.18, 0.42);
        vec3 mid  = vec3(0.06, 0.28, 0.55);
        vec3 col = mix(deep, mid, diff * 0.6 + 0.4);
        // Subtle rim
        float rim = 1.0 - max(dot(vNormal, vec3(0,0,1)), 0.0);
        col += vec3(0.1, 0.35, 0.7) * pow(rim, 3.0) * 0.3;
        gl_FragColor = vec4(col, 0.35);
      }`,
    transparent: true, depthWrite: false,
  }), []);

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.99, 64, 64]} />
      <primitive object={mat} attach="material" />
    </mesh>
  );
}

/* ── Grid lines (subtle) ── */
function GlobeGrid() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * ROTATE_SPEED; });

  const lats = useMemo(() => {
    const g: THREE.BufferGeometry[] = [];
    for (const lat of [-60, -30, 0, 30, 60]) {
      const phi = (90 - lat) * Math.PI / 180;
      const r = Math.sin(phi), y = Math.cos(phi);
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= 96; j++) {
        const t = (j / 96) * Math.PI * 2;
        pts.push(new THREE.Vector3(r * Math.cos(t), y, r * Math.sin(t)));
      }
      g.push(new THREE.BufferGeometry().setFromPoints(pts));
    }
    return g;
  }, []);

  const lons = useMemo(() => {
    const g: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 12; i++) {
      const t = (i / 12) * Math.PI * 2;
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= 96; j++) {
        const phi = (j / 96) * Math.PI;
        pts.push(new THREE.Vector3(Math.sin(phi) * Math.cos(t), Math.cos(phi), Math.sin(phi) * Math.sin(t)));
      }
      g.push(new THREE.BufferGeometry().setFromPoints(pts));
    }
    return g;
  }, []);

  return (
    <group ref={ref}>
      {lats.map((g, i) => <line key={`la${i}`}><primitive object={g} attach="geometry" /><lineBasicMaterial color="#5eaad6" transparent opacity={0.12} /></line>)}
      {lons.map((g, i) => <line key={`lo${i}`}><primitive object={g} attach="geometry" /><lineBasicMaterial color="#5eaad6" transparent opacity={0.09} /></line>)}
    </group>
  );
}

/* ── Continent shapes (filled polygons on sphere surface) ── */
function ContinentFills() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * ROTATE_SPEED; });

  /* Continent outline data — each is a lat/lon polygon */
  const continents = useMemo(() => {
    const c: [number, number][][] = [];

    // North America
    c.push([
      [50,-130],[55,-125],[60,-140],[65,-165],[70,-160],[72,-155],[70,-130],
      [60,-110],[55,-105],[50,-95],[48,-88],[45,-82],[42,-78],[38,-75],[35,-76],
      [30,-82],[25,-80],[25,-90],[20,-97],[18,-95],[15,-88],[20,-87],[22,-98],
      [25,-100],[28,-105],[32,-115],[34,-118],[38,-122],[42,-124],[48,-124],[50,-130]
    ]);
    // South America
    c.push([
      [10,-75],[5,-77],[0,-80],[-5,-81],[-10,-78],[-15,-75],[-18,-70],[-22,-65],
      [-25,-60],[-28,-55],[-32,-52],[-35,-55],[-38,-58],[-42,-62],[-46,-67],
      [-50,-72],[-54,-70],[-52,-68],[-48,-65],[-42,-60],[-35,-55],[-28,-48],
      [-22,-42],[-15,-40],[-10,-38],[-5,-35],[0,-50],[5,-60],[8,-62],[10,-68],[10,-75]
    ]);
    // Europe
    c.push([
      [36,-8],[38,-5],[42,-3],[44,0],[46,3],[48,5],[50,5],[52,8],[54,10],
      [56,12],[58,14],[60,18],[62,22],[64,26],[65,28],[68,30],[70,28],
      [68,25],[62,18],[58,12],[55,8],[52,5],[48,2],[46,-1],[43,-5],
      [40,-6],[38,-8],[36,-8]
    ]);
    // Africa
    c.push([
      [35,-5],[32,0],[30,10],[32,32],[28,33],[22,36],[15,42],[12,44],
      [8,48],[2,42],[-2,40],[-5,38],[-10,35],[-15,32],[-20,30],[-25,28],
      [-30,28],[-33,26],[-35,20],[-34,18],[-30,16],[-25,15],[-18,12],
      [-12,14],[-5,10],[0,8],[5,2],[10,-5],[15,-16],[20,-16],[25,-14],
      [30,-10],[35,-5]
    ]);
    // Asia
    c.push([
      [70,30],[72,50],[70,70],[68,90],[70,110],[68,130],[65,140],[60,142],
      [55,135],[50,130],[45,132],[40,128],[35,120],[30,110],[25,100],
      [22,90],[20,80],[18,78],[10,76],[8,78],[15,80],[22,72],[28,65],
      [30,52],[32,45],[35,38],[38,36],[42,40],[45,42],[50,45],[55,50],
      [60,55],[65,45],[68,35],[70,30]
    ]);
    // India subcontinent
    c.push([
      [28,68],[25,68],[22,72],[20,73],[15,74],[10,76],[8,78],[10,80],
      [13,80],[18,83],[22,88],[25,90],[28,88],[30,82],[30,75],[28,68]
    ]);
    // Australia
    c.push([
      [-15,130],[-12,135],[-14,140],[-18,145],[-22,150],[-28,153],
      [-33,152],[-35,148],[-38,145],[-37,140],[-35,137],[-32,133],
      [-28,128],[-24,125],[-20,118],[-16,122],[-14,126],[-15,130]
    ]);
    // Greenland
    c.push([
      [60,-45],[63,-50],[68,-53],[72,-55],[76,-60],[78,-65],[80,-55],
      [82,-40],[80,-25],[76,-18],[72,-22],[68,-30],[64,-38],[60,-45]
    ]);
    // UK/Ireland
    c.push([
      [50,-6],[51,-3],[52,0],[53,1],[55,0],[57,-2],[58,-5],[57,-7],
      [55,-6],[53,-5],[51,-5],[50,-6]
    ]);
    // Japan
    c.push([
      [31,131],[33,132],[35,135],[37,137],[39,140],[41,141],[43,145],
      [42,143],[40,140],[38,139],[36,136],[34,133],[32,131],[31,131]
    ]);
    return c;
  }, []);

  /* Build filled meshes from continent polygons */
  const meshes = useMemo(() => {
    return continents.map((polygon) => {
      const pts3d = polygon.map(([lat, lon]) => ll(lat, lon, 1.002));
      // Triangulate using fan from centroid
      const centroid = new THREE.Vector3();
      pts3d.forEach(p => centroid.add(p));
      centroid.divideScalar(pts3d.length).normalize().multiplyScalar(1.002);

      const verts: number[] = [];
      for (let i = 0; i < pts3d.length; i++) {
        const next = pts3d[(i + 1) % pts3d.length];
        verts.push(centroid.x, centroid.y, centroid.z);
        verts.push(pts3d[i].x, pts3d[i].y, pts3d[i].z);
        verts.push(next.x, next.y, next.z);
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
      geo.computeVertexNormals();
      return geo;
    });
  }, [continents]);

  /* Build outline geometries */
  const outlines = useMemo(() => {
    return continents.map((polygon) => {
      const pts = polygon.map(([lat, lon]) => ll(lat, lon, 1.004));
      pts.push(pts[0].clone()); // close loop
      return new THREE.BufferGeometry().setFromPoints(pts);
    });
  }, [continents]);

  return (
    <group ref={ref}>
      {/* Filled continent shapes */}
      {meshes.map((geo, i) => (
        <mesh key={`fill${i}`}>
          <primitive object={geo} attach="geometry" />
          <meshBasicMaterial color="#1a8a5c" transparent opacity={0.18} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      ))}
      {/* Continent outlines (brighter) */}
      {outlines.map((geo, i) => (
        <line key={`out${i}`}>
          <primitive object={geo} attach="geometry" />
          <lineBasicMaterial color="#2dd4a8" transparent opacity={0.35} />
        </line>
      ))}
    </group>
  );
}

/* ── Connection arcs between major cities ── */
function ConnectionArcs() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => { if (ref.current) ref.current.rotation.y += d * ROTATE_SPEED; });

  const arcs = useMemo(() => {
    const routes = [
      [[40,-74],[51,0]],     // NYC → London
      [[51,0],[19,73]],      // London → Mumbai
      [[19,73],[35,139]],    // Mumbai → Tokyo
      [[35,139],[-33,151]],  // Tokyo → Sydney
      [[40,-74],[25,55]],    // NYC → Dubai
      [[1,104],[51,0]],      // Singapore → London
      [[19,73],[25,55]],     // Mumbai → Dubai
      [[55,-3],[45,-75]],    // Edinburgh → Toronto
      [[-23,-43],[36,-5]],   // São Paulo → Gibraltar
      [[48,2],[35,139]],     // Paris → Tokyo
    ];
    return routes.map(([from, to]) => {
      const s = ll(from[0], from[1]), e = ll(to[0], to[1]);
      const m = new THREE.Vector3().addVectors(s, e).multiplyScalar(0.5).normalize().multiplyScalar(1.3);
      return new THREE.BufferGeometry().setFromPoints(
        new THREE.QuadraticBezierCurve3(s, m, e).getPoints(48)
      );
    });
  }, []);

  return (
    <group ref={ref}>
      {arcs.map((g, i) => (
        <line key={`arc${i}`}>
          <primitive object={g} attach="geometry" />
          <lineBasicMaterial color={i % 3 === 0 ? "#00A6D6" : i % 3 === 1 ? "#13C4B5" : "#4a9fd4"} transparent opacity={0.28} />
        </line>
      ))}
    </group>
  );
}

/* ── Pulsing city dots ── */
function CityDots() {
  const ref = useRef<THREE.Group>(null);
  const dots = useRef<THREE.Mesh[]>([]);
  useFrame((st, d) => {
    if (ref.current) ref.current.rotation.y += d * ROTATE_SPEED;
    dots.current.forEach((m, i) => {
      if (m) m.scale.setScalar(0.7 + Math.sin(st.clock.elapsedTime * 2.5 + i * 1.1) * 0.5);
    });
  });

  const cities: [number, number][] = [
    [40,-74],[51,0],[19,73],[35,139],[-33,151],[25,55],[1,104],[55,-3],[45,-75],[48,2],[-23,-43],[36,-5]
  ];

  return (
    <group ref={ref}>
      {cities.map((c, i) => {
        const p = ll(c[0], c[1], 1.01);
        return (
          <mesh key={i} position={[p.x, p.y, p.z]} ref={(el) => { if (el) dots.current[i] = el; }}>
            <sphereGeometry args={[0.02, 12, 12]} />
            <meshBasicMaterial color="#00d4ff" transparent opacity={0.9} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Atmospheric rim glow ── */
function AtmosphereRim() {
  const mat = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: `varying vec3 vN; void main(){ vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vN; void main(){
      float rim = 1.0 - dot(vN, vec3(0,0,1));
      float i = smoothstep(0.4, 1.0, rim);
      gl_FragColor = vec4(0.15, 0.55, 1.0, i * 0.35);
    }`,
    blending: THREE.AdditiveBlending, side: THREE.BackSide,
    transparent: true, depthWrite: false,
  }), []);
  return <mesh><sphereGeometry args={[1.12, 48, 48]} /><primitive object={mat} attach="material" /></mesh>;
}

/* ── Outer soft halo ── */
function OuterHalo() {
  const mat = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: `varying vec3 vN; void main(){ vN=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vN; void main(){
      float rim = 1.0 - dot(vN, vec3(0,0,1));
      float i = smoothstep(0.6, 1.0, rim);
      gl_FragColor = vec4(0.04, 0.3, 0.65, i * 0.12);
    }`,
    blending: THREE.AdditiveBlending, side: THREE.BackSide,
    transparent: true, depthWrite: false,
  }), []);
  return <mesh><sphereGeometry args={[1.25, 48, 48]} /><primitive object={mat} attach="material" /></mesh>;
}

/* ══════════════════════════════════════════════════
   EXPORTED COMPONENT
   ══════════════════════════════════════════════════ */

export function EarthGlobe3D({ className = "", size = 300 }: { className?: string; size?: number }) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <Canvas
        camera={{ position: [0, 0.15, 2.4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <OceanSphere />
          <GlobeGrid />
          <ContinentFills />
          <ConnectionArcs />
          <CityDots />
          <AtmosphereRim />
          <OuterHalo />
        </Suspense>
      </Canvas>
    </div>
  );
}
