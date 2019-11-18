<?php

// RUTAS SIN PERMISOS
Route::namespace('Sistema')->prefix('sistema')->name('sistema')->group(function() {
	
	// USUARIOS
	Route::prefix('usuarios')->name('.usuarios')->group(function() {
		Route::get('crear', function() {
			return view('registrar');
		})->name('.registrar');
		Route::post('guardar', 'UsuariosController@guardar')->name('.guardar');
	});
});

// RUTAS CON PERMISOS
Route::middleware('auth')->group(function() {
	Route::namespace('Sistema')->prefix('sistema')->name('sistema')->group(function() {

		// USUARIOS
		Route::prefix('usuarios')->name('.usuarios')->group(function() {
			Route::get('/', 'UsuariosController@vue')->name('');
			Route::post('/', 'UsuariosController@index')->name('');
			Route::get('{id}/editar', 'UsuariosController@vue')->name('.editar');
			Route::post('editar', 'UsuariosController@editar')->name('.editar');
			//Route::post('guardar', 'UsuariosController@guardar')->name('.guardar');
			Route::post('desactivar', 'UsuariosController@desactivar')->name('.desactivar');
			Route::post('reactivar', 'UsuariosController@reactivar')->name('.reactivar');
		});
	});
});