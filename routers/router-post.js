const express = require('express');
const router = express.Router();

// INDEX
router.get('/', (req, res) => {
    res.send(`Lista post`);
})

// SHOW
router.get('/:id', (req, res) => {
    res.send(`Ecco il post ${req.params.id}`);
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