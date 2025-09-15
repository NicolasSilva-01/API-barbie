import dados from "./../models/dados.js";
const {barbies} = dados;

const getAllBarbies = (req, res)=> {


    res.status(200).json({
        total: resultado.legth,
        barbies: resultado
    })
}

const updateBarbie = (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, profisao, anoLançamento } = req.body;

    const idParaEditar = id;

    if(isNaN(idParaEditar)){
        return res.status(400).json({
            success: false,
            message: "o id deve ser um número válido!!!"
        })
    }

    const barbieExiste = barbies.find(barbie => barbie.id === idParaEditar);

    if(!barbieExiste) {
       return res.status(404).json({
        success: false,
        message:  'Barbie com Id: ${id} não existe.'
       })
    }

    const barbiesAtualizadas = barbies.map(barbie =>
        barbie.id === idParaEditar ? {
            ...barbie,
            ...(nome && { nome }),
            ...(profissao && { profissao }),
            ...(anoLançamento && { anoLançamento: parseInt(anoLançamento)})
        } : barbie)

     barbies.splice(0, barbies.length, ...barbiesAtualizadas);

     const barbieNova = barbies.find(barbie => barbie.id === idParaEditar);

    res.status(200).json({
        success: true,
        message: 'Dados da Barbie ID ${idParaEditar} atualizados com sucesso!',
        barbie: barbieNova
    })

}

export {getAllBarbies, getBarbiesById, createBarbie, deleteBarbie, updateBarbie};





