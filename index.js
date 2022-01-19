const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

const quiz = [
    {
        _id: 1,
        quetion: 'Apple colour?',
        answers: ['blue','orange', 'white', 'red'],
        currectAnswer: 'red'
    },
    {
        _id: 2,
        quetion: 'Banana colour?',
        answers: ['blue','yellow', 'white', 'red'],
        currectAnswer: 'yellow'
    },
    {
        _id: 3,
        quetion: 'Grapes colour?',
        answers: ['blue','orange', 'black', 'red'],
        currectAnswer: 'black'
    },
    {
        _id: 4,
        quetion: 'Goa colour?',
        answers: ['green','orange', 'black', 'red'],
        currectAnswer: 'green'
    },
    {
        _id: 5,
        quetion: 'Pine apple colour?',
        answers: ['green','orange', 'yellow', 'red'],
        currectAnswer: 'yellow'
    },
];

app.get('/quetions/:id', (req, res) => {
    const id = Number(req.params.id);
    const quetion = quiz.filter(quiz => quiz._id === id);
    if(quetion.length > 0){
        res.status(200).json(quetion[0]);
    } else {
        res.status(404).json({ message: "Quetion not found by given ID" });
    }
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`API listening at port http://localhost:${PORT}`))