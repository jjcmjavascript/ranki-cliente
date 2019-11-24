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

Auth::routes();

Route::get('/','HomeController@index');
Route::get('logout', 'HomeController@logout');
Route::post('crear','HomeController@crear');
Route::post('iniciar','HomeController@login');


// SOCIAL LOGIN

Route::get('auth/{provider}', 'Auth\SocialAuthController@redirectToProvider')->name('social.auth');
Route::get('auth/{provider}/callback', 'Auth\SocialAuthController@handleProviderCallback');

//clientes 
 Route::prefix('inicio')->group(function(){
    Route::get('/', function () {
        return view('vue');
    });
    
 });
