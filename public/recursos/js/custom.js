const registro = {
  open : (e)=>{
    e.preventDefault();
    $('.modal , .reg-overlay').fadeIn(300);
    $("html, body").addClass("hid-body");
  },
  close: (e)=>{
    e.preventDefault();
    $('.modal , .reg-overlay').fadeOut(200);
    $("html, body").removeClass("hid-body");
  }

}

const buscar = {
  open : (e)=>{
    $(e.target).text('Cerrar');
    $(".header-search").addClass("vis-head-search").removeClass("vis-search")
    e.target.removeAttribute('onclick');
    e.target.setAttribute('onclick','buscar.close(event)')
  },
  close: (e)=>{
    e.target.removeAttribute('onclick');
    e.target.setAttribute('onclick','buscar.open(event)')
    $(e.target).text('Buscar');
    $(".header-search").addClass("vis-search").removeClass("vis-head-search")
  }

}
