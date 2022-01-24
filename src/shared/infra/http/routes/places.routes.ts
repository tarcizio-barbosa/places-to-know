import { Router } from "express";

import { CreatePlaceController } from "../../../../modules/places/useCases/createPlace/CreatePlaceController";
import { GetOnePlaceController } from "../../../../modules/places/useCases/getOnePlace/GetOnePlaceController";
import { GetPlacesController } from "../../../../modules/places/useCases/getPlaces/GetPlacesController";
import { UpdateOnePlaceController } from "../../../../modules/places/useCases/updateOnePlace/UpdateOnePlaceController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const placesRoutes = Router();

const createPlaceController = new CreatePlaceController();
const getPlacesController = new GetPlacesController();
const getOnePlaceController = new GetOnePlaceController();
const updateOnePlaceController = new UpdateOnePlaceController();

placesRoutes.post("/", ensureAuthenticated, createPlaceController.handle);
placesRoutes.get("/", ensureAuthenticated, getPlacesController.handle);
placesRoutes.get(
  "/:placeId",
  ensureAuthenticated,
  getOnePlaceController.handle
);
placesRoutes.put(
  "/:placeId",
  ensureAuthenticated,
  updateOnePlaceController.handle
);

export { placesRoutes };
