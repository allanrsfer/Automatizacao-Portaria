const { Router } = require("express");
const RegisterController = require("../controllers/RegisterController");

const userRoutes = Router();

const registerController = new RegisterController();

userRoutes.post("/", registerController.create);
userRoutes.get("/:document", registerController.show);
userRoutes.put("/:document", registerController.update);
userRoutes.delete("/:document", registerController.delete);

module.exports = userRoutes;