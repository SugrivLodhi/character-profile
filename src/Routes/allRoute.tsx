import { lazy } from "react";

const MainComponent = lazy(() => import("../MainComponent"));
const CharacterDetailsPage = lazy(
  () => import("../components/CharacterDetailsPage")
);
export const allRoute = [
  { path: "/", component: MainComponent },
  { path: "/character/:id", component: CharacterDetailsPage },
];
