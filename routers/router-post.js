const express = require('express');
const router = express.Router();

const posts = require(`../posts`);

// INDEX
router.get('/', (req, res) => {
    res.json(posts); // Restituisco i post in formato JSON
})

// SHOW
router.get('/:id', (req, res) => {
    let id = req.params.id;
    id >= 0 && id <= posts.length ?
        res.json(posts[req.params.id - 1]) // Se il valore di req.params.id è compreso tra 0 e posts.length allora restituisco il singolo elemento
        : // Altrimenti
        res.send(`Il valore inserito non è valido`) // Restituisco un messaggio di errore
})

// STORE
router.post('/', (req, res) => {
    res.send(`Nuovo post creato`);
})

// UPDATE
router.put('/:id', (req, res) => {
    res.send(`L'elemento ${req.params.id} è stato totalmente modificato`);
})

// MODIFY
router.patch('/:id', (req, res) => {
    res.send(`L'elemento ${req.params.id} è stato parzialmente modificato`);
})

// DESTROY
router.delete('/:id', (req, res) => {
    res.send(`L'elemento ${req.params.id} è stato eliminato`);
})

// ESPORTAZIONE ROUTER
module.exports = router;