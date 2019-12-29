<?php

Route::get('/','HomeController@index')->name('inicio');
Route::post('/isLoged','HomeController@isLoged')->name('inicio.isLoged');


// Password reset routes...
Route::get('password','HomeController@reset_password')->middleware('only_guest')->name('reset_password');
Route::post('password','HomeController@send_mail')->middleware('only_guest')->name('reset_password');
Route::get('password/reset', 'HomeController@reset_password')->middleware('only_guest')->name('password.request');
Route::post('password/reset', 'HomeController@post_reset')->name('password.reset');
// SOCIAL LOGIN
Route::get('auth/{provider}', 'Auth\SocialAuthController@redirectToProvider')->name('social.auth');
Route::get('auth/{provider}/callback', 'Auth\SocialAuthController@handleProviderCallback');
