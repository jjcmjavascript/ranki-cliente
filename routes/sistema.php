<?php

Route::middleware('auth')->group(function() {
	Route::namespace('Sistema')->prefix('sistema')->name('sistema')->group(function() {

		// USUARIOS
		Route::prefix('usuarios')->name('usuarios')->group(function() {
			Route::get('/', 'UsuariosController@vue')->name('');
			Route::post('/', 'UsuariosController@index')->name('');
			Route::get('crear', 'UsuariosController@vue')->name('crear');
			Route::post('crear', 'UsuariosController@crear')->name('crear');
		});

	});
});