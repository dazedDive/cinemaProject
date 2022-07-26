import { BaseModel } from "./baseModel.model.js"
import { DataManager } from "./helpers/dataManager.helper";

export class Salle extends BaseModel{

    nbPlacesMax = 0;
    theme = "";
 
    constructor(props){
        super(props);
        this.assign(props);
    }

    getSeances(){
        const dataManager = new DataManager();
        return dataManager.getAll("seances").filter(seances => this.id == seances.salle_id);
    }
}