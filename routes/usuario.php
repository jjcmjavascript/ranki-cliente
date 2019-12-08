<?php

// RUTAS SIN PERMISOS
Route::namespace('Usuario')->name('usuario')->group(function(){

  Route::post('iniciar','UsuarioController@login')->name('.login');
  Route::post('crear','UsuarioController@crear')->name('.crear');

});

// RUTAS CON PERMISOS
Route::middleware(['auth','verifyToken'])->group(function() {

	// PERFIL DE USUARIO
	Route::namespace('Usuario')->prefix('perfil')->name('usuario')->group(function() {
		Route::get('/','UsuarioController@vue')->name('.perfil');
	    Route::post('/','UsuarioController@perfil')->name('.perfil');

	    Route::post('guardar','UsuarioController@guardar')->name('.guardar');
	    Route::post('clave','UsuarioController@editar_clave')->name('.editar_clave');

	    Route::get('logout', 'UsuarioController@logout')->name('.salir');
	});
        // favoritos
    Route::namespace('Usuario')->prefix('favoritos')->name('usuario')->group(function() {
        Route::get('/','UsuarioController@vue')->name('.favoritos');
        Route::post('/','UsuarioController@favoritos')->name('.favoritos');

    });

});
