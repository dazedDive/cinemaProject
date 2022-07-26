import { Seance } from "../models/seance.model.js";
import { Film } from "../models/film.model.js";
import { Salle } from "../models/salle.model.js";

export class DataManager {
    folder = "data";
    files = [];

    constructor(files, folder = "data"){
        this.files = files;
        this.folder = folder;
    }

    initDataStorage = async () => {
        const dataStorage = {};
        for(const file of this.files){
            dataStorage[file + "Data"] = await this.readJsonFile(file);
        }
        localStorage.setItem("data", JSON.stringify(dataStorage));
        console.log("localStorage data initialized" , dataStorage);
    }

    readJsonFile = async (file) => {
        let items = [];
        await fetch(`./src/${this.folder}/${file}.json`)
            .then(resp => {
                return resp.text();
            })
            .then(text => {
                items = JSON.parse(text);
            });
        return items;
    }

    getAll = (table) => {
        const data = JSON.parse(localStorage.getItem('data'));
        return data[table + "Data"]?.map(row => {
            switch(table){
                case "seances":
                    return new Seance(row);
                case "salles":
                    return new Salle(row);
                case "films":
                    return new Film(row);
            }
        });
    }

    getOne = (table, id) => {
        const data = JSON.parse(localStorage.getItem('data'));
        const row = data[table + "Data"]?.find(item => item.id == id);
        if(!row){
            return undefined;
        }
        switch(table){
            case "seances":
                return new Seance(row);
            case "salles":
                return new Salle(row);
            case "films":
                return new Film(row);
        }
    }

    update(model){
        const table = model.constructor.name.toLowerCase(); // Je récupère le nom de la table correspondant à l'objet
        const data = JSON.parse(localStorage.getItem('data')); // Je récupère toutes les données
        const dataTable = data[table + "Data"]; // Je récupère la table dont j'ai besoin
        let row = dataTable?.find(item => item.id == model.id); // Je récupère la ligne qui m'intéresse (grace à l'id)
        for(const key in row){ // Je mets à jour la ligne
            row[key] = model[key]
        }
        localStorage.setItem("data", JSON.stringify(data)); // Je sauvegarde les données en localStorage
        console.log("data row updated", model);
    }

    softDelete(model){
       model.isDeleted = true;
       this.update(model);
    }
}