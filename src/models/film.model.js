import { BaseModel } from "./baseModel.model.js";
import { DataManager } from "../helpers/dataManager.helper.js";

export class Film extends BaseModel{
    titre="";
    image="";
    synopsis=""

    constructor(props){
        super(props)
        this.assign(props)
    }

    getSeance =()=>{
        const newdatamgnr = new DataManager()
        const getSeance = newdatamgnr.getAll("seances").filter(seance=>seance.film_id==this.id)
        return getSeance
    }
}

