<div class="col-md-3">
    <div class="fixed-bar fl-wrap">
      <div class="user-profile-menu-wrap fl-wrap">
        <!-- user-profile-menu-->
        <div class="user-profile-menu">
          <h3>Principal </h3>
          <ul>
            <li>
              <a href="{{route('cliente.inicio')}}" 
                class="{{request()->is('dashboard') ? 'user-profile-act' : '' }}">
                <i class="fa fa-gears"></i>Principal
              </a>
            </li>
            <li>
              <a href="{{route('cliente.perfil')}}"
                class="{{request()->is('dashboard/perfil') ? 'user-profile-act' : '' }}">
              
                <i class="fa fa-user-o"></i> Editar Perfil
              </a>
            </li>
            <!-- <li>
              <a href="dashboard/mensaje">
                <i class="fa fa-envelope-o"></i> Mensajes
                <span>3</span>
              </a>
            </li> -->

          </ul>
        </div>
        <!-- user-profile-menu end-->
        <!-- user-profile-menu-->
        <div class="user-profile-menu">
          <h3>Listings</h3>
          <ul>
            <li>
              <a href="dashboard-listing-table.html">
                <i class="fa fa-th-list"></i> My listigs
              </a>
            </li>
            <li>
              <a href="dashboard-bookings.html">
                <i class="fa fa-calendar-check-o"></i> Bookings
                <span>2</span>
              </a>
            </li>
            <li>
              <a href="dashboard-review.html">
                <i class="fa fa-comments-o"></i> Reviews
              </a>
            </li>
            <li>
              <a href="dashboard-add-listing.html">
                <i class="fa fa-plus-square-o"></i> Add New
              </a>
            </li>
          </ul>
        </div>
        <!-- user-profile-menu end-->
        <a href="#" class="log-out-btn">Log Out</a>
      </div>
    </div>
  </div>