const React = require('react')

const Reserve = () =>

<html lang="en">

<head>
    <meta charSet="UTF-8"/>
    <title>Reservation Page</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <script src="https://code.jquery.com/jquery.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

</head>

<body>

    <div className="container">
        <div className="jumbotron">
            <h1 className="text-center">
                <span className="fa fa-fire"></span> Hot Restaurant</h1>
            <hr/>
            <h2 className="text-center">Make your reservation</h2>
            <br/>
            <div className="text-center">
                <a href="/tables">
                    <button className="btn btn-lg btn-primary">
                        <span className="fa fa-list-alt"></span> View Tables</button>
                </a>
                <a href="/">
                    <button className="btn btn-lg btn-default">
                        <span className="fa fa-home"></span>
                    </button>
                </a>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header">
                        Table Reservation
                    </div>
                    <div className="card-body">
                        <form role="form">
                            <div className="form-group">
                                <label for="reserve-name">Name</label>
                                <input type="text" className="form-control" id="reserve-name">
                            </div>
                            <div className="form-group">
                                <label for="reserve-phone">Phone Number</label>
                                <input type="text" className="form-control" id="reserve-phone">
                            </div>
                            <div className="form-group">
                                <label for="reserve-email">Email</label>
                                <input type="text" className="form-control" id="reserve-email">
                            </div>
                            <button type="submit" className="btn btn-primary submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>

</body>
</html>