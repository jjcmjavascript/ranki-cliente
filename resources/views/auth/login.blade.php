<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Metro cuadrado | Login</title>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport" />
    <meta content="" name="description" />
    <meta content="JSMPA" name="author" />
    
    <!-- ================== BEGIN BASE CSS STYLE ================== -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <link href="{{ asset('css/custom_theme.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/bootstrap-social.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/custom.css') }}" rel="stylesheet" />
    <!-- ================== END BASE CSS STYLE ================== -->
</head>
<body class="pace-top">
    <!-- begin #page-loader -->
    <div id="page-loader" class="fade show"><span class="spinner"></span></div>
    <!-- end #page-loader -->
    
    <!-- begin #page-container -->
    <div id="page-container" class="fade">
        <!-- begin login -->
        <div class="login login-with-news-feed">
            <!-- begin news-feed -->
            <div class="news-feed">
                <div class="news-image" style="background-image: url(../images/000580636W.jpg)"></div>
                <div class="news-caption">
                    <h4 class="caption-title"><b>Metro</b> Cuadrado</h4>
                    <p>Modo desarrollo</p>
                </div>
            </div>
            <!-- end news-feed -->
            <!-- begin right-content -->
            <div class="right-content">
                <!-- begin login-header -->
                <div class="login-header">
                    <div class="brand">
                        <span class="logo"></span> <b>Metro</b> Cuadrado
                        <small>menú de inicio de sesión</small>
                    </div>
                    <div class="icon">
                        <i class="fa fa-sign-in-alt"></i>
                    </div>
                </div>
                <!-- end login-header -->
                <!-- begin login-content -->
                <div class="login-content">
                    <form method="POST" action="{{ route('login') }}" class="margin-bottom-0">
                        @csrf

                        <div class="form-group m-b-10">
                            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror form-control-lg" name="email" value="{{ old('email') }}" placeholder="Correo electrónico" required autocomplete="email" autofocus>

                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>
                        <div class="form-group m-b-10">
                            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror form-control-lg" name="password" placeholder="Contraseña" required autocomplete="current-password">

                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                        </div>
                        <div class="checkbox checkbox-css m-b-15">
                            <input type="checkbox" id="remember_me_checkbox" value="" />
                            <label for="remember_me_checkbox">
                            Recuerdame
                            </label>
                        </div>
                        <div class="login-buttons">
                            <button type="submit" class="btn btn-success btn-block btn-lg">Iniciar sesión</button>
                        </div>
                        @if (Route::has('password.request'))
                            <p class="text-center">
                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('¿Olvido su contraseña?') }}
                                </a>
                            </p>
                        @endif
                        <hr>
                        <div class="mb-2">
                        <a href="javascript:;" class="btn btn-social btn-facebook m-r-5" style="width: 100%">
                            <i class="fab fa-facebook-f"></i> Iniciar sesión con Facebook
                            </a>
                        </div>
                        <div class="mb-2">
                            <a href="javascript:;" class="btn btn-social btn-google m-r-5" style="width: 100%">
                                <i class="fab fa-google"></i> Iniciar sesión con Google
                            </a>
                        </div>

                        <hr>

                        <div class="m-t-15 m-b-10 text-inverse text-center">
                            Todavia no estas registrado? Has click <a href="{{ route('register') }}">aqui</a> para hacerlo.
                        </div>
                        <hr />
                        <p class="text-center text-grey-darker mb-0">
                            &copy; Propiedad de JMSPA - Todos los derechos reservados 2019
                        </p>
                    </form>
                </div>
                <!-- end login-content -->
            </div>
            <!-- end right-container -->
        </div>
        <!-- end login -->
    </div>
    <!-- end page container -->
    
    <!-- ================== BEGIN BASE JS ================== -->
    <script src="{{ asset('js/custom_theme.min.js') }}"></script>
    <script src="{{ asset('js/default.min.js') }}"></script>
    <!-- ================== END BASE JS ================== -->
</body>
</html>
