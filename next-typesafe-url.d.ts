
// This file is generated by next-typesafe-url
// Do not edit this file directly.

// @generated
// prettier-ignore
/* eslint-disable */

import { type RouteType as Route_0 } from "./src/app/routeType";
import { type RouteType as Route_1 } from "./src/app/tictactoe/routeType";
import { type RouteType as Route_2 } from "./src/app/[id]/routeType";
import type { InferRoute, StaticRoute } from "next-typesafe-url";

declare module "@@@next-typesafe-url" {
  interface DynamicRouter {
    "/": InferRoute<Route_0>;
    "/tictactoe": InferRoute<Route_1>;
    "/[id]": InferRoute<Route_2>;
  }

  interface StaticRouter {
    "/foo": StaticRoute;
  }
}
