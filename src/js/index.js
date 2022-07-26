import { DataManager } from "../helpers/dataManager.helper";
import { App } from "./App";

const app = new App();
app.start();

const dataMngr = new DataManager(["films", "salles", "seances"]);
dataMngr.initDataStorage();
console.log();

