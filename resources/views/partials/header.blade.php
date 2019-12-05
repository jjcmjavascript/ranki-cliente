<!-- header-->
<header class="main-header">
    <!-- header-top-->
    <div class="header-top fl-wrap">
        <div class="container">
            <div class="logo-holder">
                <a href="index.html"><img src="{{asset('images/logos/logo.png')}}" alt=""></a>
                  <span >
                    <i class="fa fa-search"></i>
                    <label class="buscar" onclick="buscar.open(event)">
                      Buscar
                    </label>
                  </span>
            </div>


            <!-- MENU PRINCIPAL miniaturo-->

            <div class="show-reg-form modal-open"><i class="fa fa-sign-in"></i>Iniciar</div>
            <!-- <div class="header-user-menu">
                <div class="header-user-name">
                    <span><img src="images/avatar/1.jpg" alt=""></span>
                    My account
                </div>
                <ul>
                    <li><a href="dashboard-myprofile.html"> Edit profile</a></li>
                    <li><a href="dashboard-add-listing.html"> Add Listing</a></li>
                    <li><a href="dashboard-bookings.html">  Bookings  </a></li>
                    <li><a href="dashboard-review.html"> Reviews </a></li>
                    <li><a href="#">Log Out</a></li>
                </ul>
            <div>   -->
            <!-- MENU GRANDE  -->
            <div class="nav-holder main-menu">
                <nav>
                    <ul>
                      <li>
                        <a onclick="registro.open(event)">
                          <div class="iniciar_sm">
                            Iniciar<i class="fa fa-sign-in" aria-hidden="true"></i>
                          </div>
                          <!-- <div class="inciar_sm">
                            <i class="fa fa-sign-in fa-2x"></i>
                          </div> -->
                        </a>
                      </li>
                      <hr>
                        <li>
                            <a href="#" class="act-link">Home <i class="fas fa-caret-down"></i></a>
                            <!--second level -->
                            <ul>
                                <li><a href="index.html">Parallax Image</a></li>
                                <li><a href="index2.html">Slider</a></li>
                                <li><a href="index3.html">Video</a></li>
                                <li><a href="index4.html">Slideshow</a></li>
                            </ul>
                            <!--second level end-->
                        </li>
                        <li>
                            <a href="blog.html">News</a>
                        </li>

                        <!-- <li>
                          <a href="#" onclick="registro.open(event)">
                            <span class="iniciar-sm"><i class="fa fa-sign-in"></i>Iniciar</span>
                          </a>
                        </li> -->
                    </ul>
                </nav>
            </div>

            <div class="nav-button-wrap color-bg">
                <div class="nav-button">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
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
        <div class="close-header-search"><i class="fal fa-angle-double-up"></i></div>
    </div>

</header>
<!--  header end -->
