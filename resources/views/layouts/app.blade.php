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
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> -->
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/reset.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/plugins.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/style.css')}}">
    <link type="text/css" rel="stylesheet" href="{{asset('recursos/css/color.css')}}">
    <style >

    @media screen and (max-width: 772px) {
      /* boton de inicio registro */
      .show-reg-form {
        display: none;
      }

      .main-menu{
        top: 0px;
        padding: 15px 0px;
        height: 100vh;
        width: 80%;
        background: rgba(255, 255, 255, 0.8);
        color  : black;
      }

    }
    .show-reg-form {
        top: 9px;
        font-size: 13px;
        font-weight: bolder;
    }
    /* JM spa logo */
    .logo-holder {
      float: left;
      position: absolute;
      top: 2px;
      height: 80px;
    }
    /* contenedor principal del header */
    .main-header {
      height: 80px;
    }
    /* contenedor segundario */
    .header-top {
        height: 80px;
    }
    /* menu principal en grande */
    .nav-holder {
        float: none !important;
        position: relative !important;
        left: auto;
        right: 30px;
        top: 17px;
    }
    .header-user-menu,.show-reg-form {
        margin-right: 10px;
    }
    #wrapper {
      padding-top: 60px;
    }
    .show-search-button {
      border:none;
    }
    .show-search-button::before {
      content: none;
    }
    .nav-button-wrap {
      float: right;
      top: 20px;
      right: 10px;
    }

    .fa.fa-search {
      color:
      #4DB7FE;
    }
    .buscar {
      color:  white;
      font-size: 0.9rem;
      margin-left: 13px;
      cursor: pointer;
    }
    .buscar:hover {
      text-shadow: 0px 0px 2px #4DB7FE; 
    }

    </style>
    <!-- <link type="text/css" rel="stylesheet" href="{{asset('css/custom.css')}}"> -->


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
            <!-- @include('partials.footer') -->
    </div>

    @yield('script')

    <!-- ================== END PAGE LEVEL JS ================== -->
    <script type="text/javascript" src="{{asset('recursos/js/jquery.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('recursos/js/plugins.js')}}"></script>
    <script type="text/javascript" src="{{asset('recursos/js/scripts.js')}}"></script>
</body>
</html>
