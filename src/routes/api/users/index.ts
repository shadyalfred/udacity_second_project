import express, { NextFunction, Request, Response } from "express";
import createRoute from "./create";
import showRoute from "./show";
import loginRoute from "./login";
import { hasValidToken } from "../../../middlewares";
import { UserStore } from "../../../database/models/User";

const router = express.Router();

router.get("/", hasValidToken, async (_req: Request, res: Response) => {
  return res.json(await UserStore.index());
});

router.use(createRoute);
router.use(loginRoute);
router.use(showRoute);

export default router;
