const express = require(`express`);
const app = express();
const port = 3000;


const posts = require(`./posts.js`);

app.use(express.static(`public`));

app.get('/', (req, res) => {
    console.log(`Hello World!`);
    res.json(posts);
})

app.listen(port, () => {
    console.log(`banana`)
})