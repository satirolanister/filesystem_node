const fs = require('fs');
const colors = require('colors');

let crearArchivo = (Base, limite) => {
    return new Promise((resolve, reject) => {
        
        if (!Number(Base) || !Number(limite)){
            if(!Number(Base)){
                reject(`El digito ${Base} no es valido `);
                return;
            }
            if(!Number(limite)){
                reject(`El limite ${limite} no es valido `);
                return;
            }
        }

        let data = '';

        for (let i= 1; i <= limite; i++){
            data += `${Base} * ${i} = ${Base * i}\n`;
        };


        fs.writeFile(`tablas/tabla del ${Base} hasta ${limite}.txt`, data , (err)=>{
            if (err) 
                reject (err);
            else
                resolve(`tabla del ${Base} hasta ${limite}.txt`);
        
        });
    }); 


};
let mostrarConsola = (base, limite) => {
    console.log(`=================`.red)
    console.log(`Tabla del ${base} hasta el ${limite}`.green);
    console.log(`=================`.red)

    for (let i= 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`);
    };
};

module.exports= {
    crearArchivo,
    mostrarConsola
};