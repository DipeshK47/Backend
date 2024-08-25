import express from "express";

const app = express();

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('Server is ready');  
// });

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: 'This is a joke content'
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'This is another joke content'
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'Yet another joke content'
        },
        {
            id: 4,
            title: 'Joke 4',
            content: 'Funny joke content'
        },
        {
            id: 5,
            title: 'Joke 5',
            content: 'Last joke content'
        },
    ];
    res.send(jokes); 
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});