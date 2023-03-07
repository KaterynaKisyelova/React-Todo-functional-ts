import Router from "express";
import { create, get, remove, update } from "../controllers/TodoController.js";

const router = new Router();

router.get("/", get);
router.post("/", create);
router.put("/", update);
router.delete("/", remove);

export default router;
