	<!-- begin #sidebar -->
		<div id="sidebar" class="sidebar">
			<!-- begin sidebar scrollbar -->
			<div data-scrollbar="true" data-height="100%">
				<!-- begin sidebar user -->
				<ul class="nav">
					<li class="nav-profile">
						<a href="javascript:;" data-toggle="nav-profile">
							<div class="cover with-shadow"></div>
							<div class="image">
								@if(Auth::user()->avatar)
									<img src="{{ Auth::user()->avatar }}" alt="" />
								@else
									<img src="../images/users/002.jpg" alt="" />
								@endif
							</div>
							<div class="info">
								<b class="caret pull-right"></b>
								{{ Auth::user()->nombre .' '. Auth::user()->apellidos }}
								<small>Administrador</small>
							</div>
						</a>
					</li>
					<li>
						<ul class="nav nav-profile">
							<li><a href="javascript:;"><i class="fa fa-cog"></i> Configuración</a></li>
							<li><a href="javascript:;"><i class="fa fa-pencil-alt"></i> Recomendaciones</a></li>
							<li><a href="javascript:;"><i class="fa fa-question-circle"></i> Ayuda</a></li>
						</ul>
					</li>
				</ul>
				<!-- end sidebar user -->
				<!-- begin sidebar nav -->
				<ul class="nav">
					<li class="nav-header">Navegación</li>
					<li class="active">
						<a href="{{ route('home') }}">
							<i class="fa fa-th-large"></i> 
							<span>Dashboard</span> 
						</a>
					</li>
					<li>
						<a href="{{ route('sistema.usuarios') }}">
							<i class="fa fa-user"></i> 
							<span>Usuarios</span> 
						</a>
					</li>
					<li>
						<a href="{{ route('sistema.perfiles') }}">
							<i class="fa fa-address-book"></i> 
							<span>Perfiles</span> 
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<i class="fa fa-star"></i> 
							<span>Preferencias</span>
						</a>	
					</li>
					<li class="has-sub">
						<a href="javascript:;">
							<b class="caret"></b>
							<i class="fa fa-gem"></i>
							<span>Tablas básicas</span> 
						</a>
						<ul class="sub-menu">
							<li><a href="ui_general.html">Regiones <i class="fa fa-paper-plane text-theme"></i></a></li>
							<li><a href="ui_typography.html">Providencias</a></li>
							<li><a href="ui_tabs_accordions.html">Comunas</a></li>
						</ul>
					</li>
					<!-- begin sidebar minify button -->
					<li><a href="javascript:;" class="sidebar-minify-btn" data-click="sidebar-minify"><i class="fa fa-angle-double-left"></i></a></li>
					<!-- end sidebar minify button -->
				</ul>
				<!-- end sidebar nav -->
			</div>
			<!-- end sidebar scrollbar -->
		</div>
		<div class="sidebar-bg"></div>
		<!-- end #sidebar -->