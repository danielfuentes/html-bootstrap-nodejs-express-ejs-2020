const path = require('path');
const usuariosController = {
    login: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/usuarios/login.html'));
    },
    registro: function(req,res){
        res.sendFile(path.resolve(__dirname, '../views/usuarios/registro.html'));
    }

}
module.exports = usuariosController;