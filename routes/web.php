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

// Password reset routes...
Route::get('password','HomeController@reset_password')->middleware('only_guest')->name('reset_password');
Route::post('password','HomeController@send_mail')->middleware('only_guest')->name('reset_password');
Route::get('password/reset', 'HomeController@reset_password')->middleware('only_guest')->name('password.request');
Route::post('password/reset', 'HomeController@post_reset')->name('password.reset');
// propiedades
Route::post('/ultimas_propieades','HomeController@ultimas_propieades')->name('inicio.ultimas_propieades');
// SOCIAL LOGIN

Route::get('auth/{provider}', 'Auth\SocialAuthController@redirectToProvider')->name('social.auth');
Route::get('auth/{provider}/callback', 'Auth\SocialAuthController@handleProviderCallback');

Route::namespace('Propiedad')->prefix('propiedad')->name('propiedad')->group(function(){
    Route::get('{id}/detalle', 'PropiedadController@vue')->name('.ver_detalle');
    Route::post('{id}/detalle', 'PropiedadController@detalle')->name('.ver_detalle');
});
