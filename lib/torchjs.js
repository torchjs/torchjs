const dl = require("../src/dataloader");
const builder = require("../src/build");

class Torchjs {
    constructor() {
        this.config = require("../src/config");
    }
    
    /**
     * build
     */
    async build(build_path) {
        
        if(this.config.isSet("input")){
            builder.build();
        }else{
            console.error("Input not set ERROR");
        }


    }
    
    /**
     * setConfig
     */
    /*async setConfig(input_config) {
        await this.config.load(input_config);
        console.log("port", this.config.get("port"));
    }*/
    
    /**
     * generatee
     */
    generate() {
        console.warn("METHOD generate IS NOT YET IMPLEMENTED");
    }
    
    /**
     * publish
     */
    publish() {
        console.warn("METHOD publish IS NOT YET IMPLEMENTED");
    }
    
    /**
     * TODOD: Figure out a better name
     */
    newFromTheme() {
        console.warn("METHOD newFromTheme IS NOT YET IMPLEMENTED");
    }
}
module.exports = new Torchjs();
