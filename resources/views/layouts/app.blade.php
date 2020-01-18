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
    <link type="text/css" rel="stylesheet" href="{{asset('css/app.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/reset.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/plugins.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/style.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/color.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/custom.css')}}">
    <link rel="stylesheet" href="https://unpkg.com/leaflet-control-geocoder/dist/Control.Geocoder.css" />
    <script src="https://use.fontawesome.com/09c81a14e0.js"></script>

</head>

<body>
  <!--loader-->
  <div class="loader-wrap">
      <div class="pin">
          <div class="pulse"></div>
      </div>
  </div>

    <div id="main">
            @include('partials.header')
            @yield('content')
    </div>

    @yield('script')
    <!-- ================== END PAGE LEVEL JS ================== -->

    <!-- Scripts -->
    <!--script src="https://cdnjs.cloudflare.com/ajax/libs/fuse.js/3.0.4/fuse.min.js"></script-->
    <script type="text/javascript" src="{{asset('recursos/js/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('recursos/js/plugins.js')}}"></script>
    <script type="text/javascript" src="{{asset('recursos/js/scripts.js')}}"></script>
    <script type="text/javascript" src="{{asset('recursos/js/custom.js')}}"></script>
    <script type="text/javascript" src="{{asset('recursos/js/bootstrap.min.js')}}"></script>

</body>
</html>
