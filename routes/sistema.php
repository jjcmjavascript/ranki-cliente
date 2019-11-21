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
			Route::post('crear', 'UsuariosController@crear')->name('.crear');
			Route::get('{id}/editar', 'UsuariosController@vue')->name('.editar');
			Route::post('editar', 'UsuariosController@editar')->name('.editar');
			Route::post('guardar', 'UsuariosController@guardar')->name('.guardar');
			Route::post('desactivar', 'UsuariosController@desactivar')->name('.desactivar');
			Route::post('reactivar', 'UsuariosController@reactivar')->name('.reactivar');
		});

		// PERFILES
		Route::prefix('perfiles')->name('.perfiles')->group(function() {
			Route::get('/', 'PerfilesController@vue')->name('');
			Route::post('/', 'PerfilesController@index')->name('');
			Route::post('guardar', 'PerfilesController@guardar')->name('.guardar');
			Route::post('desactivar', 'PerfilesController@desactivar')->name('.desactivar');
			Route::post('reactivar', 'PerfilesController@reactivar')->name('.reactivar');
		});
	});
});