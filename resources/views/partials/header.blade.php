<!-- header-->
<header class="main-header"><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- header-top-->
    <div class="header-top fl-wrap">
        <div class="container">
            <div class="logo-holder">
                <a href="{{route('inicio')}}"><img src="{{asset('images/logos/logo.png')}}" alt=""></a>
                  <span >
                    <!-- <i class="fa fa-search"></i> -->
                    <!-- <label class="buscar" onclick="buscar.open(event)">
                      Buscar
                    </label> -->
                  </span>
            </div>
            <!-- MENU PRINCIPAL miniaturo-->
            @guest
              <div class="show-reg-form modal-open"><i class="fa fa-sign-in"></i>Iniciar</div>
            @endguest

            <!-- MENU GRANDE  -->
            <div class="nav-holder main-menu"style='{{ !Auth::check() ? "right: 2%" : '' }}'>
                <nav>
                    <ul>
                      @guest
                      <li class="iniciar_sm_li">
                        <a onclick="registro.open(event)">
                          <div class="iniciar_sm">
                            Iniciar
                          </div>
                        </a>
                      </li>
                      <hr class="iniciar_sm_li">
                      @endguest
                      @auth
                      <li class="iniciar_sm_li">
                        <a href="{{route('usuario.salir')}}">
                          <div class="iniciar_sm">
                            Salir
                          </div>
                        </a>
                      </li>
                      <li class="iniciar_sm_li">
                        <a disabled="disabled">
                          <div class="">
                            BIENVENIDO : {{strtoupper(Auth::user()->nombre )}}
                            <hr>
                          </div>
                        </a>
                      </li>
                      @endauth
                        <li>
                            <a href="{{route('inicio')}}" class="act-link">Principal</a>
                        </li>
                        <li>
                            <a href="#">Ofertas</a>
                        </li>
                        <li class="user-option">
                            <a href="#"> Usuario <i class="fas fa-caret-down"></i></a>
                            <ul>
                                <li><a href="{{route('usuario.perfil')}}"> Editar Perfil</a></li>
                                <li><a href="{{route('usuario.favoritos')}}"> Favoritos</a></li>
                                <li><a href="{{route('usuario.publicaciones')}}"> Mis Publicaciones</a></li>
                                @auth
                                    @if(isset(Auth::user()->rut))
                                    <li><a href="{{route('propiedad.crear')}}"> Publicar</a></li>
                                    @else
                                    <li><a href="#" title="Registre rut para publicar"> Publicar</a></li>
                                    @endif
                                @endauth
                                <li><a href="#"> Contratar plan</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="nav-button-wrap color-bg">
                <div class="nav-button">
                    <span></span><span></span><span></span>
                </div>
            </div>


            @auth
            <div class="header-user-menu">
              <div class="header-user-name">
                <span>
                  @if(count(Auth::user()->_avatar) >0 )
                   <img id="imagen_header" src="/storage/{{Auth::user()->_avatar[count(Auth::user()->_avatar)-1]->ruta}}" >
                  @elseif(Auth::user()->avatar)
                   <img id="imagen_header" src="{{Auth::user()->avatar}}" >
                  @else
                  <img id="imagen_header" src="https://pgimgmt.com/wp-content/uploads/2018/05/generic-user.jpg" >
                  @endif
                </span>
                {{strtoupper(Auth::user()->nombre)}}
              </div>
              <ul>
                <li><a href="{{route('usuario.perfil')}}"> Editar Perfil</a></li>
                <li><a href="{{route('usuario.favoritos')}}"> Favoritos</a></li>
                <li><a href="{{route('usuario.publicaciones')}}"> Mis Publicaciones</a></li>
                @if(isset(Auth::user()->rut))
                    <li>
                        <a href="{{route('propiedad.crear')}}"> Publicar</a>
                    </li>
                @endif
                <li><a href="#"> Contratar plan</a></li>
                <li><a href="{{route('usuario.salir')}}">Salir</a></li>
              </ul>
              <div>
                  @if(isset(Auth::user()->rut))
                  <a class="add_propiedad btn-info" href="{{route('propiedad.crear')}}">
                      Publicar  <i class="fa fa-plus"></i>
                  </a>
                  @else
                  <a class="add_propiedad btn-info" href="#" title="Registre rut para publicar">
                      Publicar  <i class="fa fa-plus"></i>
                  </a>
                  @endif
            @endauth
        </div>


    <div class="header-search vis-search">
        <div class="container">
            <div class="row">
                <!-- header-search-input-item -->
                <div class="col-sm-4">
                    <div class="header-search-input-item fl-wrap location autocomplete-container">
                        <label>Destination or Hotel Name</label>
                        <span class="header-search-input-item-icon"><i class="fal fa-map-marker-alt"></i></span>
                        <input type="text" placeholder="Location" class="autocomplete-input" id="autocompleteid" value=""/>
                        <a href="#"><i class="fal fa-dot-circle"></i></a>
                    </div>
                </div>
                <!-- header-search-input-item end -->
                <!-- header-search-input-item -->
                <div class="col-sm-3">
                    <div class="header-search-input-item fl-wrap date-parent">
                        <label>Date In-Out </label>
                        <span class="header-search-input-item-icon"><i class="fal fa-calendar-check"></i></span>
                        <input type="text" placeholder="When" name="header-search"   value=""/>
                    </div>
                </div>
                <!-- header-search-input-item end -->
                <!-- header-search-input-item -->
                <div class="col-sm-3">
                    <div class="header-search-input-item fl-wrap">
                        <div class="quantity-item">
                            <label>Rooms</label>
                            <div class="quantity">
                                <input type="number" min="1" max="3" step="1" value="1">
                            </div>
                        </div>
                        <div class="quantity-item">
                            <label>Adults</label>
                            <div class="quantity">
                                <input type="number" min="1" max="3" step="1" value="1">
                            </div>
                        </div>
                        <div class="quantity-item">
                            <label>Children</label>
                            <div class="quantity">
                                <input type="number" min="0" max="3" step="1" value="0">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- header-search-input-item end -->
                <!-- header-search-input-item -->
                <div class="col-sm-2">
                    <div class="header-search-input-item fl-wrap">
                        <button class="header-search-button" onclick="window.location.href='listing.html'">Search <i class="far fa-search"></i></button>
                    </div>
                </div>
                <!-- header-search-input-item end -->
            </div>
        </div>
        <!-- <div class="close-header-search"><i class="fal fa-angle-double-up"></i></div> -->
    </div>

</header>
<!--  header end -->
