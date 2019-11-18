
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
    <!-- ================== END BASE CSS STYLE ================== -->
</head>
<body class="pace-top">
    <!-- begin #page-loader -->
    <div id="page-loader" class="fade show"><span class="spinner"></span></div>
    <!-- end #page-loader -->
    
    <!-- begin #page-container -->
    <div id="page-container" class="fade">
        <!-- begin register -->
        <div class="register register-with-news-feed">
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
                <!-- begin register-header -->
                <h1 class="register-header">
                    Registrarse
                    <small>Crear tu cuenta gratis</small>
                </h1>
                <!-- end register-header -->
                <!-- begin register-content -->
                <div class="register-content">
                    <form action="{{ route('sistema.usuarios.guardar') }}" method="POST" class="margin-bottom-0">
                        <label class="control-label">Nombre <span class="text-danger">*</span></label>
                        <div class="row row-space-10">
                            <div class="col-md-6 m-b-15">
                                <input type="text" class="form-control" name="nombre" placeholder="Primer nombre" required />
                            </div>
                            <div class="col-md-6 m-b-15">
                                <input type="text" class="form-control" name="apellidos" placeholder="Apellidos" required />
                            </div>
                        </div>
                        <label class="control-label">Email <span class="text-danger">*</span></label>
                        <div class="row m-b-15">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="email" placeholder="Email address" required />
                            </div>
                        </div>
                        <label class="control-label">Teléfono movil <span class="text-danger">*</span></label>
                        <div class="row m-b-15">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="telefono_movil" placeholder="Ingrese su número de teléfono movil" required />
                            </div>
                        </div> 
                         <label class="control-label">Teléfono fijo </label>
                        <div class="row m-b-15">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="telefono_fijo" placeholder="Ingrese su número de teléfono fijo" required />
                            </div>
                        </div>
                         <label class="control-label">Dirección </label>
                        <div class="row m-b-15">
                            <div class="col-md-12">
                                <input type="text" class="form-control" name="direccion" placeholder="Ingrese su dirección" required />
                            </div>
                        </div>
                        <label class="control-label">Clave <span class="text-danger">*</span></label>
                        <div class="row m-b-15">
                            <div class="col-md-12">
                                <input type="password" class="form-control" name="password" placeholder="Contraseña" required />
                            </div>
                        </div>
                        <label class="control-label">Confirmar Clave <span class="text-danger">*</span></label>
                        <div class="row m-b-15">
                            <div class="col-md-12">
                                <input type="password" class="form-control" name="password_confirmed" placeholder="Confirmar contraseña" required />
                            </div>
                        </div>
                        <div class="checkbox checkbox-css m-b-30">
                            <div class="checkbox checkbox-css m-b-30">
                                <input type="checkbox" id="agreement_checkbox" value="">
                                <label for="agreement_checkbox">
                                Al marcar esta casilla aceptarás los <a href="javascript:;">Terminos</a> y afirmarás que has leido nuestras <a href="javascript:;">Politicas</a>, incluyendo los usos de las <a href="javascript:;">Cookie</a>.
                                </label>
                            </div>
                        </div>
                        <div class="register-buttons">
                            <button type="submit" class="btn btn-primary btn-block btn-lg">Registrarse</button>
                        </div>
                        <div class="m-t-30 m-b-30 p-b-30">
                            ¿Ya eres miembro? Has click <a href="{{ route('login') }}">aqui</a> para acceder.
                        </div>
                        <hr />
                        <p class="text-center mb-0">
                            &copy; Propiedad de JMSPA - Todos los derechos reservados 2019
                        </p>
                    </form>
                </div>
                <!-- end register-content -->
            </div>
            <!-- end right-content -->
        </div>
        <!-- end register -->
    </div>
    <!-- end page container -->
    
    <!-- ================== BEGIN BASE JS ================== -->
    <script src="{{ asset('js/custom_theme.min.js') }}"></script>
    <script src="{{ asset('js/default.min.js') }}"></script>
    <!-- ================== END BASE JS ================== -->
</body>
</html>
