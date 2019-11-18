<?php

// RUTAS SIN PERMISOS
Route::namespace('Sistema')->prefix('sistema')->name('sistema')->group(function() {
	
	// USUARIOS
	Route::prefix('usuarios')->name('.usuarios')->group(function() {
		//
	});
});

// RUTAS CON PERMISOS
Route::middleware('auth')->group(function() {
	Route::namespace('Sistema')->prefix('sistema')->name('sistema')->group(function() {

		// USUARIOS
		Route::prefix('usuarios')->name('.usuarios')->group(function() {
			Route::get('/', 'UsuariosController@vue')->name('');
			Route::post('/', 'UsuariosController@index')->name('');
			Route::get('crear', 'UsuariosController@vue')->name('.crear');
			Route::get('{id}/editar', 'UsuariosController@vue')->name('.editar');
			Route::post('editar', 'UsuariosController@editar')->name('.editar');
			Route::post('guardar', 'UsuariosController@guardar')->name('.guardar');
			Route::post('desactivar', 'UsuariosController@desactivar')->name('.desactivar');
			Route::post('reactivar', 'UsuariosController@reactivar')->name('.reactivar');
		});
	});
});