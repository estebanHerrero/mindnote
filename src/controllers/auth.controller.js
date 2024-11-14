import jwt from 'jsonwebtoken';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();


export default class AuthController{
    login = async (req, res) => {
        passport.authenticate('local', {session: false}, (err, usuario, info) => {
            if (err || !usuario) {
                return res.status(400).json({
                    estado: "falla",
                    mensaje: "Solicitud incorrecta."
                })
            }

            req.login(usuario, { session: false }, (err) => {
                if(err){
                    res.send(err);
                }

                const token = jwt.sign(usuario, process.env.JWT_SECRET, { expiresIn: '5m'});
                return res.status(200).send(
                    {estado: 'OK' , token: token}
                );
            })
        })(req, res);
    }
}