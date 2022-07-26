import { BaseModel } from "./baseModel.model.js"
import { DataManager } from "../helpers/dataManager.helper.js";

export class Seance extends BaseModel {

    id = -1;
    nbPlacesdispo = 0;
    date = "";
    horaires = 0;
    salle_id = 0;
    film_id = 0;

    constructor(props){
        super(props);
        this.assign(props);
    }

    getFilm(){
        const dataManager = new DataManager();
        return dataManager.getOne("films", this.film_id);
    }

    getSalle(){
        const dataManager = new DataManager();
        return dataManager.getOne("salles", this.salle_id);
    }
}