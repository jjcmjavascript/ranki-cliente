<!-- section-->
<section class="flat-header color-bg adm-header">
    <div class="wave-bg wave-bg2"></div>
    <div class="container">
        <div class="dasboard-wrap fl-wrap">
            <div class="dasboard-breadcrumbs breadcrumbs">
              <a href="{{route('inicio')}}">INICIO</a>
              <span>{{ str_replace('/','',strtoupper(request()->getRequestUri())) }}</span></div>
            <!--dasboard-sidebar-->
            @if( request()->is('perfil') )
            <div class="dasboard-sidebar" >
                <div class="dasboard-sidebar-content fl-wrap">
                    <div class="dasboard-avatar">
                      @if(count(Auth::user()->_avatar) >0 )
                      <img id="imagen_lateral" src="/storage/{{Auth::user()->_avatar[count(Auth::user()->_avatar)-1]->ruta}}" >
                      @elseif(Auth::user()->avatar)
                      <img id="imagen_lateral" src="{{Auth::user()->avatar}}" >
                      @else
                      <img id="imagen_lateral" src="https://pgimgmt.com/wp-content/uploads/2018/05/generic-user.jpg" >
                      @endif
                    </div>
                    <div class="dasboard-sidebar-item fl-wrap">
                        <h3>
                            <span>Bievenid@ </span>
                          {{Auth::user()->nombre}}
                        </h3>
                    </div>
                    <a href="{{route('usuario.salir')}}" class="log-out-btn color-bg">Salir <i class="far fa-sign-out"></i></a>
                </div>
            </div>
            @endif
            <!--dasboard-sidebar end-->
            <!-- dasboard-menu-->
            <div class="dasboard-menu">
                <div class="dasboard-menu-btn color3-bg">Dashboard Menu <i class="fal fa-bars"></i></div>
                <ul class="dasboard-menu-wrap">
                    <li>
                        <a href="{{route('usuario.perfil')}}" class="{{request()->is('perfil') ? 'user-profile-act' : '' }}" >
                            <i class="far fa-user"></i>Perfil</a>
                    </li>
                    <li>
                        <a href="{{route('usuario.favoritos')}}" class="{{request()->is('favoritos') ? 'user-profile-act' : ''}}">
                            <i class="far fa-th-list"></i> Favoritos  </a>
                    </li>
                    <li>
                        <a href="{{route('usuario.publicaciones')}}" class="{{request()->is('publicaciones') ? 'user-profile-act' : ''}}">
                            <i class="far fa-th-list"></i> Publicaciones  </a>
                    </li>

                </ul>
            </div>
            <!--dasboard-menu end-->
            <!--Tariff Plan menu-->
            <div   class="tfp-btn"><span>Planes: </span> <strong>Activos</strong></div>
            <div class="tfp-det">
                <p>You Are on <a href="#">Extended</a> . Use link bellow to view details or upgrade. </p>
                <a href="#" class="tfp-det-btn color2-bg">Details</a>
            </div>
            <!--Tariff Plan menu end-->
        </div>
    </div>
</section>


<!-- section end-->
<!-- section-->
