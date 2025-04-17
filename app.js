const express = require(`express`);
const app = express();
const port = 3000;

const posts = require(`./posts.js`); // Importo l'array

const postsRouter = require(`./routers/router-post.js`) // Importazione router

app.use(express.static(`public`));

app.use('/posts', postsRouter); // Utilizzo postsRouter per impostare le rotte

// Rotta base
app.get('/', (req, res) => {
    res.json(posts); // Restituisco i post in formato JSON
})

app.listen(port, () => {
    console.log(`Il server è in ascolto`)
})