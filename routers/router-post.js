const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Lista post`);
})

router.get('/:id', (req, res) => {
    res.send(`Ecco il post ${req.params.id}`);
})

router.post('/', (req, res) => {
    res.send(`Nuovo post creato`);
})

router.put('/:id', (req, res) => {
    res.send(`L'elemento ${req.params.id} è stato totalmente modificato`);
})

router.patch('/:id', (req, res) => {
    res.send(`L'elemento ${req.params.id} è stato parzialmente modificato`);
})

router.delete('/:id', (req, res) => {
    res.send(`L'elemento ${req.params.id} è stato eliminato`);
})

module.exports = router;