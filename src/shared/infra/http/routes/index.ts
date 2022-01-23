import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { placesRoutes } from "./places.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/sessions", authenticateRoutes);
router.use("/places", placesRoutes);

export { router };
