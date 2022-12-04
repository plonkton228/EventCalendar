<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Illuminate\Support\Facades\Hash;
class EventController extends Controller
{
    public function index()
    {
      $events = Event::get();
      return(json_decode($events));
    }


    public function create()
    {
        $events = Event::get();
             Event::create([
            'description' => request('description'),
            'author' => request('author'),
            'guest' => request('guest'),
            'data' => request('data'),
        ]);
        return (json_decode($events)) ;
    }

    public function show($id)
    {
        return response()->json(Event::whereId($id)->first());
    }

     public function uPdate($id)
    {
         Event::whereId($id)->first()->update([
            'guest'=>request('guest'),
            'description'=>request('description'),
            'data'=>request('data'),
        ]);
         $events = Event::get();
        return(json_decode($events));
       
    }

      public function delete ($id){
        $event = Event::whereId($id)->first();
        $event->delete();
        $events = Event::get();
        return(json_decode($events));
    }
}
