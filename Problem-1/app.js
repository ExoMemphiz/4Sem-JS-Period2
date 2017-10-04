var express = require('express');
var app = express();

app.listen(300, function() {
    console.log("Server started, listening on: " + 3000);
})

app.use('/api/calculator/:operation/:n1/:n2', function(req, res, next) {
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2),
    }
    req.calc = calculatorRequest;
    next();
})

app.get('/api/calculator/*', function(req, res) {
    var calc = req.calc;
    var result = '';
    switch (calc.operation.toLowerCase()) {
        case 'add':
            result = calc.n1 + calc.n2;
            break;
        case 'sub':
            result = calc.n1 - calc.n2;
            break;
        case 'subtract':
            result = calc.n1 - calc.n2;
            break;
        default:
            res.send('Unknown operation');
            return;
    }
    res.send('Result: ' + result);
})

app.listen(3000);

