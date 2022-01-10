<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
| In this project, we'll be relying on ReactJS for going page to page for so most of the routes will return to mostly the same pages
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/account', function () {
    return view('welcome');
});

Route::get('/history', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('welcome');
});

/*Route to Metamask test page, using LocalHost
Functions currently done: Connect to Wallet, Read Tokens, Transact(Hinay sya but maybe its cuz of how I setup my localhost)
Will move to Ropstein after algo exam
*/
Route::get('/testLocal', function () {
    return view('welcome');
});

//Route to Metamask test page, using Ropstein (so anyone can use it without having to setup localhost)
Route::get('/testRopstein', function () {
    return view('welcome');
});
