<template>
	<div>
		<!-- begin page-header -->
			<h1 class="page-header">Dashboard <small>inicio de la aplicación</small></h1>
			<!-- end page-header -->
			<!-- begin row -->
			<div class="row">
				<!-- begin col-3 -->
				<div class="col-xl-3 col-md-6">
					<div class="widget widget-stats bg-teal">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">VISITANTES HOY</div>
							<div class="stats-number">842,900</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 70.1%;"></div>
							</div>
							<div class="stats-desc">Mejor que semana pasada (70.1%)</div>
						</div>
					</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-xl-3 col-md-6">
					<div class="widget widget-stats bg-blue">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-dollar-sign fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">USUARIOS ACTIVOS</div>
							<div class="stats-number">180,200</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 40.5%;"></div>
							</div>
							<div class="stats-desc">Mejor que semana pasada (40.5%)</div>
						</div>
					</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-xl-3 col-md-6">
					<div class="widget widget-stats bg-indigo">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-archive fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">NUEVAS PUBLICACIONES</div>
							<div class="stats-number">38,900</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 76.3%;"></div>
							</div>
							<div class="stats-desc">Mejor que semana pasada (76.3%)</div>
						</div>
					</div>
				</div>
				<!-- end col-3 -->
				<!-- begin col-3 -->
				<div class="col-xl-3 col-md-6">
					<div class="widget widget-stats bg-dark">
						<div class="stats-icon stats-icon-lg"><i class="fa fa-comment-alt fa-fw"></i></div>
						<div class="stats-content">
							<div class="stats-title">NUEVOS COMENTARIOS</div>
							<div class="stats-number">3,988</div>
							<div class="stats-progress progress">
								<div class="progress-bar" style="width: 54.9%;"></div>
							</div>
							<div class="stats-desc">Mejor que semana pasada (54.9%)</div>
						</div>
					</div>
				</div>
				<!-- end col-3 -->
			</div>
			<!-- end row -->
			<!-- begin row -->
			<div class="row">
				<!-- begin col-6 -->
				<div class="col-xl-6">
					<!-- begin card -->
					<div class="card border-0 bg-dark text-white mb-3 overflow-hidden">
						<!-- begin card-body -->
						<div class="card-body">
							<!-- begin row -->
							<div class="row">
								<!-- begin col-7 -->
								<div class="col-xl-7 col-lg-8">
									<!-- begin title -->
									<div class="mb-3 text-grey">
										<b>TOTAL RECAUDADO</b>
										<span class="ml-2">
											<i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Total sales" data-placement="top" data-content="Net sales (gross sales minus discounts and returns) plus taxes and shipping. Includes orders from all sales channels."></i>
										</span>
									</div>
									<!-- end title -->
									<!-- begin total-sales -->
									<div class="d-flex mb-1">
										<h2 class="mb-0">$<span data-animation="number" data-value="64559.25">64559.25$</span></h2>
										<div class="ml-auto mt-n1 mb-n1"><div id="total-sales-sparkline"></div></div>
									</div>
									<!-- end total-sales -->
									<!-- begin percentage -->
									<div class="mb-3 text-grey">
										<i class="fa fa-caret-up"></i> <span data-animation="number" data-value="33.21">8.27</span>% comparado con la semana pasada
									</div>
									<!-- end percentage -->
									<hr class="bg-white-transparent-2" />
									<!-- begin row -->
									<div class="row text-truncate">
										<!-- begin col-6 -->
										<div class="col-6">
											<div class="f-s-12 text-grey">Ordenes totales</div>
											<div class="f-s-18 m-b-5 f-w-600 p-b-1" data-animation="number" data-value="1568">1568</div>
											<div class="progress progress-xs rounded-lg bg-dark-darker m-b-5">
												<div class="progress-bar progress-bar-striped rounded-right bg-teal" data-animation="width" data-value="55%" style="width: 55%"></div>
											</div>
										</div>
										<!-- end col-6 -->
										<!-- begin col-6 -->
										<div class="col-6">
											<div class="f-s-12 text-grey">Coste promedio</div>
											<div class="f-s-18 m-b-5 f-w-600 p-b-1">$<span data-animation="number" data-value="41.20">41.20</span></div>
											<div class="progress progress-xs rounded-lg bg-dark-darker m-b-5">
												<div class="progress-bar progress-bar-striped rounded-right" data-animation="width" data-value="55%" style="width: 55%"></div>
											</div>
										</div>
										<!-- end col-6 -->
									</div>
									<!-- end row -->
								</div>
								<!-- end col-7 -->
								<!-- begin col-5 -->
								<div class="col-xl-5 col-lg-4 align-items-center d-flex justify-content-center">
									<img :src="$root.base_url + '/images/img-1.svg'" height="150px" class="d-none d-lg-block" />
								</div>
								<!-- end col-5 -->
							</div>
							<!-- end row -->
						</div>
						<!-- end card-body -->
					</div>
					<!-- end card -->
				</div>
				<!-- end col-6 -->
				<!-- begin col-6 -->
				<div class="col-xl-6">
					<!-- begin row -->
					<div class="row">
						<!-- begin col-6 -->
						<div class="col-sm-6">
							<!-- begin card -->
							<div class="card border-0 bg-dark text-white text-truncate mb-3">
								<!-- begin card-body -->
								<div class="card-body">
									<!-- begin title -->
									<div class="mb-3 text-grey">
										<b class="mb-3">RANGO DE CONVERSION</b> 
										<span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Conversion Rate" data-placement="top" data-content="Percentage of sessions that resulted in orders from total number of sessions." data-original-title="" title=""></i></span>
									</div>
									<!-- end title -->
									<!-- begin conversion-rate -->
									<div class="d-flex align-items-center mb-1">
										<h2 class="text-white mb-0"><span data-animation="number" data-value="2.19">2.19</span>%</h2>
										<div class="ml-auto">
											<div id="conversion-rate-sparkline"></div>
										</div>
									</div>
									<!-- end conversion-rate -->
									<!-- begin percentage -->
									<div class="mb-4 text-grey">
										<i class="fa fa-caret-down"></i> <span data-animation="number" data-value="0.50">0.50</span>% más que semana pasada
									</div>
									<!-- end percentage -->
									<!-- begin info-row -->
									<div class="d-flex mb-2">
										<div class="d-flex align-items-center">
											<i class="fa fa-circle text-red f-s-8 mr-2"></i>
											Planes aquiridos 
										</div>
										<div class="d-flex align-items-center ml-auto">
											<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="262">262</span>%</div>
											<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="3.79">3.79</span>%</div>
										</div>
									</div>
									<!-- end info-row -->
									<!-- begin info-row -->
									<div class="d-flex mb-2">
										<div class="d-flex align-items-center">
											<i class="fa fa-circle text-warning f-s-8 mr-2"></i>
											Bienes vendidos
										</div>
										<div class="d-flex align-items-center ml-auto">
											<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="11">11</span>%</div>
											<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="3.85">3.85</span>%</div>
										</div>
									</div>
									<!-- end info-row -->
									<!-- begin info-row -->
									<div class="d-flex">
										<div class="d-flex align-items-center">
											<i class="fa fa-circle text-lime f-s-8 mr-2"></i>
											Bienes arrendados
										</div>
										<div class="d-flex align-items-center ml-auto">
											<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="57">57</span>%</div>
											<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="2.19">2.19</span>%</div>
										</div>
									</div>
									<!-- end info-row -->
								</div>
								<!-- end card-body -->
							</div>
							<!-- end card -->
						</div>
						<!-- end col-6 -->
						<!-- begin col-6 -->
						<div class="col-sm-6">
							<!-- begin card -->
							<div class="card border-0 bg-dark text-white text-truncate mb-3">
								<!-- begin card-body -->
								<div class="card-body">
									<!-- begin title -->
									<div class="mb-3 text-grey">
										<b class="mb-3">SESIONES DE USUARIO</b> 
										<span class="ml-2"><i class="fa fa-info-circle" data-toggle="popover" data-trigger="hover" data-title="Store Sessions" data-placement="top" data-content="Number of sessions on your online store. A session is a period of continuous activity from a visitor." data-original-title="" title=""></i></span>
									</div>
									<!-- end title -->
									<!-- begin store-session -->
									<div class="d-flex align-items-center mb-1">
										<h2 class="text-white mb-0"><span data-animation="number" data-value="70719">70719</span></h2>
										<div class="ml-auto">
											<div id="store-session-sparkline"></div>
										</div>
									</div>
									<!-- end store-session -->
									<!-- begin percentage -->
									<div class="mb-4 text-grey">
										<i class="fa fa-caret-up"></i> <span data-animation="number" data-value="9.5">9.5</span>% más que semana pasada
									</div>
									<!-- end percentage -->
									<!-- begin info-row -->
									<div class="d-flex mb-2">
										<div class="d-flex align-items-center">
											<i class="fa fa-circle text-teal f-s-8 mr-2"></i>
											Moviles
										</div>
										<div class="d-flex align-items-center ml-auto">
											<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="25.7">25.7</span>%</div>
											<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="53210">53210</span></div>
										</div>
									</div>
									<!-- end info-row -->
									<!-- begin info-row -->
									<div class="d-flex mb-2">
										<div class="d-flex align-items-center">
											<i class="fa fa-circle text-blue f-s-8 mr-2"></i>
											Escritorio
										</div>
										<div class="d-flex align-items-center ml-auto">
											<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="16.0">16.0</span>%</div>
											<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="11959">11959</span></div>
										</div>
									</div>
									<!-- end info-row -->
									<!-- begin info-row -->
									<div class="d-flex">
										<div class="d-flex align-items-center">
											<i class="fa fa-circle text-aqua f-s-8 mr-2"></i>
											Tabletas
										</div>
										<div class="d-flex align-items-center ml-auto">
											<div class="text-grey f-s-11"><i class="fa fa-caret-up"></i> <span data-animation="number" data-value="7.9">7.9</span>%</div>
											<div class="width-50 text-right pl-2 f-w-600"><span data-animation="number" data-value="5545">5545</span></div>
										</div>
									</div>
									<!-- end info-row -->
								</div>
								<!-- end card-body -->
							</div>
							<!-- end card -->
						</div>
						<!-- end col-6 -->
					</div>
					<!-- end row -->
				</div>
				<!-- end col-6 -->
			</div>
			<!-- end row -->
	</div>
</template>