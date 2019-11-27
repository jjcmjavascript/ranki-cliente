<?php

Route::prefix('inicio')->middleware('auth')->namespace('Usuario')->group(function(){
    Route::get('/', function () {  return view('vue'); });

    Route::get('logout', 'UsuarioController@logout')->name('cliente.salir');
    
});
Route::prefix('dashboard')->middleware('auth')->namespace('Usuario')->group(function(){
    
    Route::get('/', 'UsuarioController@vue')->name('cliente.inicio');
    Route::post('/','UsuarioController@iniciar')->name('cliente.inicio');
    
    Route::get('perfil','UsuarioController@vue')->name('cliente.perfil');
    Route::post('perfil','UsuarioController@editar')->name('cliente.perfi');
    Route::post('perfil/clave','UsuarioController@editar_clave')->name('cliente.perfi');
    Route::post('perfil/avatar', 'UsuarioController@avatar')->name('cliente.avatar');

    Route::get('logout', 'UsuarioController@logout')->name('cliente.salir');

});