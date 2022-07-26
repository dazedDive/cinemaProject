import { App } from "./App.js";
import { DataManager } from "../helpers/dataManager.helper.js"

const app = new App();
app.start();

const dataMngr = new DataManager(["film", "salle", "seance"]);
dataMngr.initDataStorage();