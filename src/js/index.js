import { App } from "./App.js";
import { DataManager } from "../helpers/dataManager.helper.js"

const app = new App();
app.start();

const dataMngr = new DataManager(["film", "salle", "seance"]);
dataMngr.initDataStorage();


let test = dataMngr.getOne('salle', 3);

console.log(test);

dataMngr.softDelete(test);

console.log(test);

dataMngr.hardDelete(test);

console.log(dataMngr.getAll('salle'));