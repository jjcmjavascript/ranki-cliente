<?php

// RUTAS SIN PERMISOS
Route::namespace('Usuario')->name('usuario')->group(function(){

  Route::post('iniciar','UsuarioController@login')->name('.login');
  Route::post('crear','UsuarisucoController@crear')->name('.crear');

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

    // FAVORITOS
    Route::namespace('Usuario')->prefix('favoritos')->name('usuario')->group(function() {
        Route::get('/','UsuarioController@vue')->name('.favoritos');
        Route::post('/','UsuarioController@favoritos')->name('.favoritos');
    });

    // PUBLICACIONES
    Route::namespace('Usuario')->prefix('publicaciones')->name('usuario')->group(function() {
        Route::get('/','UsuarioController@vue')->name('.publicaciones');
        Route::post('/','UsuarioController@mis_propiedades')->name('.publicaciones');
    });

    // PROPIEDADES
	Route::namespace('Propiedad')->prefix('propiedad')->name('propiedad')->group(function() {
        Route::get('crear','PropiedadController@vue')->name('.crear');
        Route::post('crear','PropiedadController@crear')->name('.guardar');
        Route::post('crear/guardar','PropiedadController@guardar')->name('.guardar');
        Route::post('crear/comuna','PropiedadController@comuna')->name('.comuna');
        Route::post('/desactivar','PropiedadController@desactivar')->name('.desactivar');
        Route::post('/reactivar','PropiedadController@reactivar')->name('.reactivar');
	});
});
