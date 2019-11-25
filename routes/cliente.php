<?php

Route::prefix('inicio')->middleware('auth')->namespace('Clientes')->group(function(){
    Route::get('/', function () {  return view('vue'); });

    Route::get('logout', 'ClienteController@logout')->name('cliente.salir');
    
});
Route::prefix('dashboard')->middleware('auth')->namespace('Clientes')->group(function(){
    
    Route::get('/', 'ClienteController@vue')->name('cliente.inicio');
    Route::post('/','ClienteController@iniciar')->name('cliente.inicio');
    
    Route::get('perfil','ClienteController@vue')->name('cliente.perfil');
    Route::post('perfil','ClienteController@editar')->name('cliente.perfi');
    Route::post('perfil/clave','ClienteController@editar_clave')->name('cliente.perfi');


    Route::get('logout', 'ClienteController@logout')->name('cliente.salir');

});