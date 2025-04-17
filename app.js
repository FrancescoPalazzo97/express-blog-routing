const express = require(`express`);
const app = express();
const port = 3000;

const posts = require(`./posts.js`);

const postsRouter = require(`./routers/router-post.js`)

app.use(express.static(`public`));

app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.json(posts);
})

app.listen(port, () => {
    console.log(`Il server è in ascolto`)
})