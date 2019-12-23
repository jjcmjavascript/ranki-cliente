<?php
// Home ultimas propiedades
Route::post('/ultimas_propieades','HomeController@ultimas_propieades')->name('inicio.ultimas_propieades');
Route::post('filtros', 'HomeController@filtros');
Route::post('obtener_comuna', 'HomeController@obtener_comuna');

// Ver detalles de la propiedad
Route::namespace('Propiedad')->prefix('propiedad')->name('propiedad')->group(function(){
    Route::get('{id}/detalle', 'PropiedadController@vue')->name('.ver_detalle');
    Route::post('{id}/detalle', 'PropiedadController@detalle')->name('.ver_detalle');
});
// PROPIEDADES
Route::namespace('Propiedad')->prefix('propiedad')->name('propiedad')->group(function() {
    Route::get('crear','PropiedadController@vue')->name('.crear');
    Route::post('crear','PropiedadController@crear')->name('.guardar');
    Route::post('crear/guardar','PropiedadController@guardar')->name('.guardar');
    Route::post('crear/comunas','PropiedadController@comunas')->name('.comuna');
    Route::get('{id}/editar','PropiedadController@vue')->name('.editar');
    Route::post('editar','PropiedadController@editar')->name('.editar');
    Route::post('actualizar','PropiedadController@actualizar')->name('.actualizar');
    Route::post('desactivar','PropiedadController@desactivar')->name('.desactivar');
    Route::post('reactivar','PropiedadController@reactivar')->name('.reactivar');
});
