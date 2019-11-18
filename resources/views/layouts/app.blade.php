<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="app-url" content="{{ env('APP_URL') }}">

    <title>{{ config('app.name', 'M2') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <!--link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"-->

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/custom_theme.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet">

    <!-- ================== BEGIN BASE CSS STYLE ================== -->
   
    
    <!-- ================== END BASE CSS STYLE ================== -->
    
    <!-- ================== BEGIN PAGE LEVEL STYLE ================== -->
    <link href="{{ asset('css/jquery-jvectormap.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/jquery.gritter.css') }}" rel="stylesheet" />
    <!-- ================== END PAGE LEVEL STYLE ================== -->
</head>

<body>
    <div id="app">
        <div id="page-container" class="fade page-header-fixed has-scroll"> <!--page-sidebar-fixed page-header-fixed"-->
            @include('partials.header')
            @include('partials.sidebar')
        
        <!--nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    {{ config('app.name', 'Laravel') }}
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav-->

            <main id="content" class="content">
                @yield('content')
            </main>
        </div>
    </div>

    
    @include('partials.footer')
    @yield('script')
    <!-- ================== BEGIN BASE JS ================== -->
    <script src="{{ asset('js/custom_theme.min.js') }}"></script>
    <script src="{{ asset('js/default.min.js') }}"></script>
    <!-- ================== END BASE JS ================== -->
    
    <!-- ================== BEGIN PAGE LEVEL JS ================== -->
    <script src="{{ asset('js/d3.min.js') }}"></script>
    <script src="{{ asset('js/jquery.gritter.js') }}"></script>
    <script src="{{ asset('js/jquery.flot.js') }}"></script>
    <script src="{{ asset('js/jquery.flot.time.js') }}"></script>
    <script src="{{ asset('js/jquery.flot.resize.js') }}"></script>
    <script src="{{ asset('js/jquery.flot.pie.js') }}"></script>
    <script src="{{ asset('js/jquery.sparkline.min.js') }}"></script>
    <script src="{{ asset('js/jquery-jvectormap.min.js') }}"></script>
    <script src="{{ asset('js/jquery-jvectormap-world-mill.js') }}"></script>
    <!-- script src="{{ asset('js/bootstrap-datepicker.js') }}"></script -->
    <script src="{{ asset('js/dashboard.js') }}"></script>
    <!-- ================== END PAGE LEVEL JS ================== -->

</body>
</html>
