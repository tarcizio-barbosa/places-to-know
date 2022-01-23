import { Router } from "express";

import { CreatePlaceController } from "../../../../modules/places/useCases/createPlace/CreatePlaceController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const placesRoutes = Router();

const createPlaceController = new CreatePlaceController();

placesRoutes.post("/", ensureAuthenticated, createPlaceController.handle);

export { placesRoutes };
