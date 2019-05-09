const path = require("path");

const yaml = require('js-yaml');
const file = require("./file");   

class DataLoader{


    constructor(){
        this._dataloaders = {
            json: async function (file_path) {
                return require(file_path);
            },
            yml: async function (file_path) {
                return yaml.safeLoad(file.read(file_path));
            }
        };
    }

    setDataLoader(ext, func){
        this._dataloaders[ext] = func;
    }

    async load(file_path){
        console.log("file_path", file_path);
        if(this._dataloaders.hasOwnProperty(path.extname(file_path).replace(".", ""))){
            var val = await this._dataloaders[path.extname(file_path).replace(".", "")](file_path); 
            console.log("val", val)
            return val;
        }else{
            return file.read(file_path);
        }
    }

}

module.exports = new DataLoader();