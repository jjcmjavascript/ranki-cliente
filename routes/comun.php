<?php

// RUTAS SIN PERMISOS
Route::namespace('Comun')->prefix('comun')->name('comun')->group(function(){

	Route::prefix('combo_box')->name('.combo_box')->group(function() {
		Route::post('comunas', 'ComunaController@combo_box')->name('.comunas');
  	});
});

// RUTAS CON PERMISOS
Route::middleware(['auth','verifyToken'])->group(function() {
	Route::namespace('Comun')->prefix('comun')->name('comun')->group(function(){

	});
});