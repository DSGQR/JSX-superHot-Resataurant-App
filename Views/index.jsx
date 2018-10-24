const React = require('react')
const Form = require('./components/form')


const Page = () =>
    <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <link rel="stylesheet" type='text/css' href="css/style.css" />
            <title>Resataurant App</title>
        </head>
        <body>
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='text-center'><span className='fa fa-fire' /> Hot Restaurant</h1>
                    <hr />
                    <h2 className='text-center'>We only have 5 tables! Book your seat before they all are gone!</h2>
                    <br />
                    <div className='text-center'>
                        <a href='/reservations'><button className='btn btn-lg btn-primary'><span className='fa fa-list-alt' /> View Reservations</button></a>
                        <a href='/reserve'><button className='btn btn-lg btn-danger'><span className='fa fa-credit-card' /> Make Reservation</button></a>
                    </div>
                </div>
            </div>

            
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <script src="../Public/js/app.js"></script>
        </body>
    </html>


module.exports = Page