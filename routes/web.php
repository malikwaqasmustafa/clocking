<?php

use App\Http\Controllers\GuestController;
use Illuminate\Support\Facades\Auth;
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
*/

Route::get('/', [App\Http\Controllers\HomeController::class, 'index']);


Route::get('/login', [App\Http\Controllers\auth\LoginController::class, 'showLoginForm']);
Route::post('/login', [App\Http\Controllers\auth\LoginController::class, 'login'])->name('login');
Route::any('/logout', [App\Http\Controllers\auth\LoginController::class, 'logout'])->name('logout');
Route::post('/verify-login', [App\Http\Controllers\auth\LoginController::class, 'login'])->name('verify.user');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/add-terminal', [App\Http\Controllers\TerminalController::class, 'add'])->name('terminal.add');
Route::post('/store-terminal', [App\Http\Controllers\TerminalController::class, 'store'])->name('terminal.save');
Route::get('/edit-terminal/{id}', [App\Http\Controllers\TerminalController::class, 'edit'])->name('terminal.edit');
Route::post('/edit-terminal', [App\Http\Controllers\TerminalController::class, 'update'])->name('terminal.update');
Route::get('/load-terminals', [App\Http\Controllers\TerminalController::class, 'loadTerminals'])->name('terminal.load');
