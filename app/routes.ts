import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/welcome-route.tsx"),
  route("login", "./routes/login-route.tsx"),
] satisfies RouteConfig;
