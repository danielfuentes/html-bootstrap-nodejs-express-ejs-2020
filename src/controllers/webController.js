const path = require('path');
const fs = require('fs');

let platos  = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../models/platos.json')));

const webController = {
    index: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/web/index.html'));
        res.render(path.resolve(__dirname, '..','views','web','index'), {platos: platos});
    },
    nosotros: function(req,res){
        //res.sendFile(path.resolve(__dirname, '../views/web/nosotros.html'));
        res.render(path.resolve(__dirname, '../views/web/nosotros'));
    }

}
module.exports = webController;