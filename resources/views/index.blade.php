
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    <!-- Scripts -->
    <script src="/js/app.js" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="http://lrak.local/css/app.css" rel="stylesheet">
    <style>
        #loader {
            border: 16px solid #f3f3f3;
            border-radius: 50%;
            border-top: 16px solid blue;
            border-right: 16px solid green;
            border-bottom: 16px solid red;
            width: 120px;
            height: 120px;
            -webkit-animation: spin 2s linear infinite;
            animation: spin 2s linear infinite;
            position: absolute;
            z-index: 999;
            top: 30%;
            left: 44%;
        }

        #modal-overlay {
            background: gray;
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 99;
            opacity: 0.5;
        }

        .visible{
            display: block;
        }

        .invisible{
            display: none;
        }

        @-webkit-keyframes spin {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
    <script>
        var BaseUrl = '{{ url('/') }}';

        function show_loader(hide = false) {
            if (hide) {
                $("#loader").removeClass("visible").addClass("invisible");
                $("#modal-overlay").removeClass("visible").addClass('invisible');
                return;
            }//..... end if() .....//

            if($("#loader").hasClass("invisible")){
                $("#loader").removeClass("invisible").addClass("visible");
                $("#modal-overlay").removeClass("invisible").addClass('visible');
            }else{
                $("#loader").removeClass("visible").addClass("invisible");
                $("#modal-overlay").removeClass("visible").addClass('invisible');
            }
        }
    </script>
</head>
<body>
    <div id="loader" class="invisible"></div>
    <div id="modal-overlay" class="invisible"></div>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
