import { baseModel } from "./baseModel.model";
import { Datamanager } from "./helpers/dataManager.hemper.js"

export class Film extends baseModel{
    titre="";
    image="";
    synopsis=""

    constructor(props){
        super(props)
        this.assign(props)
    }

    getSeance =()=>{
        const newdatamgnr = new Datamanager
        const getSeance = data.getAll("seances").filter(seance=>seance.film_id==this.id)
        return getSeance
    }
}

