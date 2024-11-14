import Usuarios from '../database/usuarios.js';

export default class UsuariosService {
    
    constructor(){
        this.usuarios = new Usuarios();
    }

    buscar = (correoElectronico, contrasena) => {
        return this.usuarios.buscar(correoElectronico, contrasena);
    }

    buscarPorId = (idUsuario) => {
        return this.usuarios.buscarPorId(idUsuario);
    }
}