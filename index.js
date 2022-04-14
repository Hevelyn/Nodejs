const express = require('express');
const app = express();
const port = 3000;

//rendering the home route with what is in the file home.ejs
app.set('view engine', 'ejs');

app.get('/home', (req, res) => {
    res.render('../views/home');
});

app.get('/', (req, res) => {
//bringing a json on the route
    res.json({
        profile: [
            { id: 1, name: 'Hevelyn', age: 24, profession: "developer"},
            { id: 2, name: 'Melissa', age: 21, profession: "gerente de projetos"},
            { id: 3, name: 'Cristina', age: 44, profession: "Adm"},
        ]
    })
});

//Passing parameters in the route
app.get('/form/:name/:lastname/:age', (req, res) => {
    let name = req.params.name;
    let lastname = req.params.lastname;
    let age = req.params.age;
    res.send(`<h1> Meu nome é ${name} ${lastname} e tenho ${age} anos</h1>`)
})


app.get('/query', (req, res) => {
    let name = req.query['name'];
    if(name){
        res.send(`<h1> ${name} </h1>`);
    }else {
        res.send(`<h1> Poxa, nenhum nome foi encontrado.. </h1>`);
    }
});


app.listen(port, () => {
    console.log(`Olá, você está usando a porta ${port}!`)
});