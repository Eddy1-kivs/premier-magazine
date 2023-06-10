<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <style>
        body {
            margin: 0;
            padding: 0;
        }

        @page {
            margin: 0px;
        }

        html {
            margin: 0px
        }

        body {
            margin: 0px;
        }

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    </style>
</head>

<body>
    @foreach (json_decode($edition->pages) as $page)
        <img src="data:image/svg+xml;base64,<?php echo base64_encode(file_get_contents(public_path('/storage/' . $page))); ?>" alt="">
    @endforeach
</body>

</html>
