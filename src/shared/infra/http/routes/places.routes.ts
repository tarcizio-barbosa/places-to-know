import { Router } from "express";

import { CreatePlaceController } from "../../../../modules/places/useCases/createPlace/CreatePlaceController";
import { GetOnePlaceController } from "../../../../modules/places/useCases/getOnePlace/GetOnePlaceController";
import { GetPlacesController } from "../../../../modules/places/useCases/getPlaces/GetPlacesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const placesRoutes = Router();

const createPlaceController = new CreatePlaceController();
const getPlacesController = new GetPlacesController();
const getOnePlaceController = new GetOnePlaceController();

placesRoutes.post("/", ensureAuthenticated, createPlaceController.handle);
placesRoutes.get("/", ensureAuthenticated, getPlacesController.handle);
placesRoutes.get(
  "/:placeId",
  ensureAuthenticated,
  getOnePlaceController.handle
);

export { placesRoutes };
