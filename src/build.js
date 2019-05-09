const config = require("./config");
const ora = require('ora');

class Build{

    constructor(){
        this._site = {};
    }

    async _loadPlugins(){

        const spinner = ora('Loading pluggins').start();
 

        spinner.succeed("pluggins loaded");
    }

    async _loadPages(){

    }

    async _loadPosts(){

    }

    async _loadData(){
        const spinner = ora('Loading collections').start();
 

        spinner.succeed("collections loaded");
    }

    async _buildStaticAssets(){
        const spinner = ora('Building static assets').start();
 

        spinner.succeed("Static assets built");
    }

    async _renderPages(){
        const spinner = ora('Creating pages').start();
 

        spinner.succeed("pages created");
    }

    async _renderPosts(){
        const spinner = ora('Creating posts').start();
 

        spinner.succeed("posts created");
    }

    async build(){
        const spinner = ora('Building project').start();
        await this._loadPlugins();
        await this._loadPages();
        await this._loadPosts();
        await this._buildStaticAssets();
        await this._loadData();
        await this._renderPages();
        await this._renderPosts();
        spinner.succeed("project built");
    }

}

module.exports = new Build();