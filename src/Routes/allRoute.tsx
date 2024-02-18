import { lazy } from "react";
import LocationPage from "../components/page/LocationPage";
import EpisodePage from "../components/page/EpisodePage";

const MainComponent = lazy(() => import("../components/page/CharacterPage"));
const CharacterDetailsPage = lazy(
  () => import("../components/page/CharacterDetailsPage")
);
export const allRoute = [
  { id: 1, path: "/", component: MainComponent },
  { id: 2, path: "/character/:id", component: CharacterDetailsPage },
  { id: 3, path: "/location", component: LocationPage },
  { id: 4, path: "/location/:id", component: CharacterDetailsPage },
  { id: 5, path: "/episode", component: EpisodePage },
  { id: 6, path: "/episode/:id", component: CharacterDetailsPage },
];
