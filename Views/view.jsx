const React = require('react')

const View = () =>
    <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
                <title>Tables Page</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script src="https://code.jquery.com/jquery.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        </head>
        <body>
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center"><span class="fa fa-fire"></span> Hot Restaurant</h1>
                    <hr />
                    <h2 className="text-center">Current Reservations and Waiting List</h2>
                    <br />
                    <div className="text-center">
                        <a href="/reserve"><button className="btn btn-lg btn-danger" ><span className="fa fa-credit-card"></span> Make Reservation</button></a>
                        <a href="/"><button className="btn btn-lg btn-default" ><span class="fa fa-home"></span></button></a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                                <div className="card-header">
                                    <h4>Current Reservations</h4>
                                </div>
                                <div className="card-body">
                                    <ul id="tableList" className="list-group"></ul>
                                </div>
                        </div>

                        <div className="card mt-4">
                            <div className="card-header">
                                <h4>Waiting List</h4>
                            </div>
                            <div className="card-body">
                                <ul id="waitList" className="list-group"></ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="app.js"></script>
            <script type='text/javascript'></script>
        </body>
    </html>

module.exports = View