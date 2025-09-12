import dados from "./../models/dados.js";
const {barbies} = dados;

const getAllBarbies = (req, res)=> {
    res.status(200).json({
        total: resultado.legth,
        barbies: resultado
    })
}

export {getAllBarbies};





