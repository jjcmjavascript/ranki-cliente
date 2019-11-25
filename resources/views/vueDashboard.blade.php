
@extends('layouts.app')

@section('content')
	<div id="wrapper">
    <!--content -->
    <div class="content">
      <!--section -->
      <section id="sec1">
        <!-- container -->
        <div class="container">
          <!-- profile-edit-wrap -->
          <div class="profile-edit-wrap">
            <!-- <div class="profile-edit-page-header">
                                    <h2></h2>
                                    <div class="breadcrumbs"><a href="#">Home</a><span>Dasboard</span></div>
            </div>-->
            <div class="row">
		      		@include('partials.lateral')
			      	<div id="custom-app">
					        <router-view></router-view>
				      </div>
            </div>
          </div>
          <!--profile-edit-wrap end -->
        </div>
        <!--container end -->
      </section>
      <!-- section end -->
      <div class="limit-box fl-wrap"></div>
      <!--section -->
      <section class="gradient-bg">
        <div class="cirle-bg">
          <div class="bg" data-bg="images/bg/circle.png"></div>
        </div>
        <div class="container">
          <div class="join-wrap fl-wrap">
            <div class="row">
              <div class="col-md-8">
                <h3>Do You Have Questions ?</h3>
                <p>Lorem ipsum dolor sit amet, harum dolor nec in, usu molestiae at no.</p>
              </div>
              <div class="col-md-4">
                <a href="contacts.html" class="join-wrap-btn">
                  Get In Touch
                  <i class="fa fa-envelope-o"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section end -->
    </div>
  </div>
@endsection

@section('script')
  <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
@endsection