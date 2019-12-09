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
    // Publicaciones
    Route::namespace('Usuario')->prefix('publicaciones')->name('usuario')->group(function() {
        Route::get('/','UsuarioController@vue')->name('.publicaciones');
        Route::post('/','UsuarioController@favoritos')->name('.publicaciones');

    });
});

Route::middleware(['auth','verifyToken'])->group(function() {
	// Propiedad
	Route::namespace('Propiedad')->prefix('propiedad')->name('propiedad')->group(function() {
		Route::get('crear','PropiedadController@vue')->name('.crear');
	    Route::post('crear','PropiedadController@crear')->name('.crear');
        Route::post('guardar','PropiedadController@crear')->name('.crear');



	});

});
