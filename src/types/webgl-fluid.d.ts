declare module "webgl-fluid" {
  interface WebGLFluidConfig {
    SIM_RESOLUTION?: number;
    DYE_RESOLUTION?: number;
    DENSITY_DISSIPATION?: number;
    VELOCITY_DISSIPATION?: number;
    PRESSURE?: number;
    CURL?: number;
    SPLAT_RADIUS?: number;
    SPLAT_FORCE?: number;
    SHADING?: boolean;
    COLORFUL?: boolean;
    BLOOM?: boolean;
    BLOOM_ITERATIONS?: number;
    BLOOM_INTENSITY?: number;
    SUNRAYS?: boolean;
    SUNRAYS_WEIGHT?: number;
    TRANSPARENT?: boolean;
  }

  export default function WebGLFluid(
    canvas: HTMLCanvasElement,
    config?: WebGLFluidConfig,
  ): void;
}
