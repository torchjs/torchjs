const path = require("path");
const fs = require("fs-extra");

class File{

    constructor(){}

    async read(file_path){
        return fs.readFileSync(file_path, "utf8");
    }

    async readDir(dir_path){
        return fs.readdirSync(dir_path);
    }

    async readDirRecursivly(dir_path){
        return fs.readdirSync(dir_path);
    }

    async write(file_path, content){
        fs.ensureDirSync(path.dirname(file_path));
        fs.writeFileSync(file_path, content, "utf8");
    }

    async exists(file_path){
        return fs.existsSync(file_path);
    }

}

module.exports = new File();