<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
        <!--=============== basic  ===============-->
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <meta name="robots" content="index, follow"/>
            <meta name="keywords" content=""/>
            <meta name="description" content=""/>
            <title>{{ config('app.name', 'M2') }}</title>
        <!--=============== css  ===============-->
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-url" content="{{ env('APP_URL') }}">

    <link type="text/css" rel="stylesheet" href="template/css/reset.css">
    <link type="text/css" rel="stylesheet" href="template/css/plugins.css">
    <link type="text/css" rel="stylesheet" href="template/css/style.css">
    <link type="text/css" rel="stylesheet" href="template/css/color.css">
    
</head>

<body>
    <div id="app">
            @include('partials.header')
            @yield('content')
    </div>

    
    @yield('script')
    <script type="text/javascript" src="template/js/jquery.min.js"></script>
    <script type="text/javascript" src="template/js/plugins.js"></script>
    <script type="text/javascript" src="template/js/scripts.js"></script>
    <!-- ================== END PAGE LEVEL JS ================== -->
</body>
</html>
