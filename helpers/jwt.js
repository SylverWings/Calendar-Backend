const jwt = require('jsonwebtoken');


const generateJWT = (id, name) =>{

    return new Promise((resolve, reject)=>{

        const payload = {id, name};

        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '2h'}, (err, token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve(token);
        })
    })
}

module.exports = generateJWT