"use client";

import { useEffect, useRef } from "react";

export function FlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    import("webgl-fluid").then((module) => {
      const WebGLFluid = module.default;

      WebGLFluid(canvas, {
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 0.97,
        VELOCITY_DISSIPATION: 0.98,
        PRESSURE: 0.8,
        CURL: 20,
        SPLAT_RADIUS: 0.25,
        SPLAT_FORCE: 4000,
        SHADING: true,
        COLORFUL: true,
        BLOOM: true,
        BLOOM_ITERATIONS: 8,
        BLOOM_INTENSITY: 0.6,
        SUNRAYS: false,
        TRANSPARENT: false,
      });
    });
  }, []);

  // Forward mouse events to canvas from anywhere on the page
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let lastEventTime = 0;

    const handleGlobalMouse = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastEventTime < 16) return;
      lastEventTime = now;
      if (e.target === canvas) return;

      canvas.dispatchEvent(
        new MouseEvent(e.type, {
          bubbles: false,
          cancelable: false,
          clientX: e.clientX,
          clientY: e.clientY,
          movementX: e.movementX,
          movementY: e.movementY,
        }),
      );
    };

    const handleTouchMove = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastEventTime < 16) return;
      lastEventTime = now;
      const touch = e.touches[0];
      if (!touch) return;

      canvas.dispatchEvent(
        new MouseEvent("mousemove", {
          bubbles: false,
          cancelable: false,
          clientX: touch.clientX,
          clientY: touch.clientY,
        }),
      );
    };

    document.addEventListener("mousemove", handleGlobalMouse);
    document.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouse);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed"
      style={{
        top: "-20%",
        left: "-10%",
        width: "120vw",
        height: "140vh",
        opacity: 0.7,
        zIndex: 0,
      }}
    />
  );
}
