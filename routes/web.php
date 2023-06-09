<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\EditionController;
use App\Http\Controllers\PlanController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\WelcomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', [WelcomeController::class, 'index'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::controller(PlanController::class)->prefix('/plans')->group(function () {
    Route::get('/pricing', 'index');
    Route::post('/subscribe', 'Subscribe');
});


Route::get('/coming-soon', function () {
    return inertia('CommingSoon');
});

Route::prefix('/edition')->name('edition')->controller(EditionController::class)->group(function () {
    Route::get('/{id}/download', 'download');
    Route::get('/{id}', 'index');
});

// Route::get('/edition/{id}', function () {
//     return inertia('Magazine');
// });

Route::get('/contact', function () {
    return inertia('Contact');
});

require __DIR__ . '/auth.php';


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});
