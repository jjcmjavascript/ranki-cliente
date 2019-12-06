@extends('layouts.app')

@section('content')

<div id="wrapper">
		<!-- content-->
		<div class="content">
			@include('partials.lateral')
			<!-- section-->

			<section class="middle-padding" id="custom-app">
				<router-view> </router-view>
			</section>
			<!-- section end-->
				<div class="limit-box fl-wrap"></div>
		</div>
		<!-- content end-->

@endsection

@section('script')
  <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
@endsection
