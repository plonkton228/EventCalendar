<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class,'login']);
    Route::post('register', [AuthController::class,'register']);
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', [AuthController::class,'me']);
    Route::patch('uPdate', [AuthController::class,'uPdate']);

});

Route::get('users', [UserController::class, 'index']);
Route::get('events', [EventController:: class, 'index']);
Route::post('events/create' , [EventController:: class,'create']);
Route::post('events/{id}', [EventController::class, 'show']);
Route::post('events/{id}/edit' , [EventController::class, 'uPdate']);
Route::delete('events/{id}', [EventController::class, 'delete']);
;

