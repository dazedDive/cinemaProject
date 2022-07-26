import { BaseModel } from "./baseModel.model.js"
import { DataManager } from "./helpers/dataManager.helper";

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
        // return dataManager.getAll("films").filter(film => film_id == this.id);
    }
}