import express from 'express';
const app = express();

const items = [
    { name: "do this", isOpen: true},
    { name: "do that", isOpen: true },
    { name: "clean shit", isOpen: true},
    { name: "close the toilet seat", isOpen: true}
];

app.get('/', function (req, res) {
    res.render('../src/index.js')
});

app.get('/items', function (req, res) {
    res.send(items);
});

app.listen(3000, function () {
    console.log('server started on 3000')
});