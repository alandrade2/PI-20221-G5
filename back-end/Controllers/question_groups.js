// Importa o model correspondente

const QuestionGroup = require('../Model/QuestionGroup')();


const controller = {} // Objeto vazio



// Funcão que devolve uma listagem de entradas de glossários já inseridas
controller.retrieve = async (req, res) => {
    try {
        const result = await QuestionGroup.find();
        // HTTP 200: ok é tudo implicito aqui 
        res.send(result);       
    } catch (error) {
        console.error(error)
        // HTTP 500: Internal server Error        
        res.status(500).send(error);
    }
}

// Função que retorna uma unica entrada do glossário com base no id fornecido
controller.retrieveOne = async (req, res) => {
    try {
        const id = req.params.id
        const result = await QuestionGroup.findById(id);
        // Se tivermos um resultado, retornamos com status HTTP 200
        if(result) res.send(result)
        // Senão, retornamos com status HTTP 404: not found               
        else res.status(404).end()

    } catch (error) {
        console.error(error)
        // HTTP 500: Internal server Error        
        res.status(500).send(error);
    }
}

// Função que será chamada para criar uma nova entrada do glossário
controller.create = async(req, res) => {
    try {
        await QuestionGroup.create(req.body);
        // HTTP 201: Created
        res.status(201).send();
    } catch (error) {
        console.error(error)
        // HTTP 500: Internal server Error        
        res.status(500).send(error);
    }

}

// Função chamada para alteração de dados
controller.update = async (req, res) => {

    try {
        const id = req.body._id;
        const result = await QuestionGroup.findByIdAndUpdate(id, req.body);
        if(result) res.status(204).end()

    } catch (error) {
        console.error(error)
        // HTTP 500: Internal server Error        
        res.status(500).send(error);        
    }
}

// Função chamada para deletar de dados
controller.delete = async (req, res) => {

    try {
        const id = req.body._id;
        const result = await QuestionGroup.findByIdAndDelete(id);
        if(result) res.status(204).end()
        else res.status(404).end()

    } catch (error) {
        console.error(error)
        // HTTP 500: Internal server Error        
        res.status(500).send(error);        
    }
}



module.exports = controller;
