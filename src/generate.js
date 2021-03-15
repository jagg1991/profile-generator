const generateHTML = (answers) =>
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
        integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
        crossorigin="anonymous"></script>

    <link rel="stylesheet" href="style.css" />

    <title>Your Team!</title>
</head>

<body>
    <div class="jumbotron navbar-fixed-top text-center shadow">
        <header class="display-1 my-2 pb-3">Your Team!</header>
    </div>


    <div class='container'>
        <div class='row m-3'>
            ${answers.manCards}
        </div>
        <div class='row m-3'>
            ${answers.engCards}
        </div>
        <div class='row m-3'>
            ${answers.intCards}
        </div>
    </div>
</body>
</html>`


module.exports = generateHTML;