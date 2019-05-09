const _ = require('lodash');

const file = require("./file");
const dataloader = require("./dataloader");

class Config{

    constructor(){
        /**
         * @private
         */
        this._config = {
            port: 3000,
            livereload: false
        };
    }

    async load(config) {
        var local_config = {};
        if(file.exists(config.input + "/torchjs.config.yml")){
            local_config = await dataloader.load(config.input + "/torchjs.config.yml");
        }else if(file.exists(config.input + "/torchjs.config.json")){
            local_config = await dataloader.load(config.input + "/torchjs.config.json");
        }

        this._config = Object.assign(this._config, config, local_config);

        this.set("output", "_build");

    }

    set(key, value) {
        _.set(this._config, key, value);
        return this.get(key);
    }
    
    get(key) {
        console.log(key);
        if(key != undefined){
            return _.get(this._config, key, null);
        }else{
            return this._config;
        }
    }

    isSet(key) {
        return _.has(this._config, key);
    }

}

module.exports = new Config();