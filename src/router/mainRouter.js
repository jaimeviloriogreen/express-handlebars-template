import { Router } from "express";
import { home, contact, services, error404 } from "../controller/mainController.js";

const route = Router();

route.get("/", home);

route.get("/contact", contact);

route.get("/services", services);

route.get("*", error404);

export default route;