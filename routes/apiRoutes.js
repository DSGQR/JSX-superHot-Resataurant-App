module.exports = function(app){
    app.get('/', (req, res) => res.render('index'))
    app.get('/view', (req, res) => res.render('view'))
    app.get('/reserve', (req, res) => res.render('reserve'))

}
    