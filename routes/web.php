<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Auth::routes();

Route::get('/','HomeController@index')->name('inicio');
Route::post('/ultimas_propieades','HomeController@ultimas_propieades')->name('inicio.ultimas_propieades');


// SOCIAL LOGIN

Route::get('auth/{provider}', 'Auth\SocialAuthController@redirectToProvider')->name('social.auth');
Route::get('auth/{provider}/callback', 'Auth\SocialAuthController@handleProviderCallback');

Route::namespace('Propiedad')->prefix('propiedad')->name('propiedad')->group(function(){
    Route::get('{id}/detalle', 'PropiedadController@vue')->name('.ver_detalle');
    Route::post('{id}/detalle', 'PropiedadController@detalle')->name('.ver_detalle');

});
