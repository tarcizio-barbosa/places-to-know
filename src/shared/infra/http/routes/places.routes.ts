import { Router } from "express";

import { CreatePlaceController } from "../../../../modules/places/useCases/createPlace/CreatePlaceController";
import { GetPlacesController } from "../../../../modules/places/useCases/getPlaces/GetPlacesController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const placesRoutes = Router();

const createPlaceController = new CreatePlaceController();
const getPlacesController = new GetPlacesController();

placesRoutes.post("/", ensureAuthenticated, createPlaceController.handle);
placesRoutes.get("/", ensureAuthenticated, getPlacesController.handle);

export { placesRoutes };
