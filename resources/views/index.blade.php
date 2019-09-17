
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel & React Auth Kit</title>

    <!-- Scripts -->
    <script src="/js/app.js" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet">

    <script>
        var BaseUrl = '{{ url('/') }}';

        function show_loader(hide = false) {
            if (hide) {
                $("#loader").removeClass("visible").addClass("invisible");
                $("#modal-overlay").removeClass("visible").addClass('invisible');
                return;
            }//..... end if() .....//

            if ($("#loader").hasClass("invisible")) {
                $("#loader").removeClass("invisible").addClass("visible");
                $("#modal-overlay").removeClass("invisible").addClass('visible');
            } else {
                $("#loader").removeClass("visible").addClass("invisible");
                $("#modal-overlay").removeClass("visible").addClass('invisible');
            }//..... end of if-else() .....//
        }//.... end of show_loader() .....//
    </script>
</head>
<body>
    <div id="loader" class="invisible"></div>
    <div id="modal-overlay" class="invisible"></div>
    <div id="app"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
