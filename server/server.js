const express = require('express');

var app = express();

// Create Express Server
app.get( '/', ( req, res ) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    })
});

app.get('/users', (req, res) => {

    res.status(200).send({
        name: 'Moritz',
        age: 20
    },{
        name: 'Felix',
        age: 17
    },
    {
        name: 'Kevin',
            age: 20
    });
})

app.listen(3000);

module.exports.app = app;
