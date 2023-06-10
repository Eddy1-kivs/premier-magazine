<?php

namespace App\Http\Controllers;
use App\Models\Edition;
use Illuminate\Http\Request;
use Carbon\Carbon;

class WelcomeController extends Controller
{
    public function index(){
        $hero = Edition::with('category')->orderBy('updated_at', 'desc')->limit(4)->get()->map(function($magazine){
   
            return [
'authorName'=>$magazine->author,
'id'=>$magazine->id,
'category'=>$magazine->category->name,
'title'=>$magazine->title,
'cover'=>$magazine->cover,
'time'=>$magazine->updated_at->diffForHumans(),
            ];
        });

        $forYou = Edition::with('category')->orderBy('updated_at', 'desc')->inRandomOrder()->get()->map(function($magazine){
            return [
'authorName'=>$magazine->author,
'id'=>$magazine->id,
'category'=>$magazine->category->name,
'title'=>$magazine->title,
'cover'=>$magazine->cover,
'date'=>$magazine->updated_at->diffForHumans(),
            ];
        });

        $popular = Edition::with('category')->orderBy('updated_at', 'desc')->get()->map(function($magazine){
            return [
'authorName'=>$magazine->author,
'id'=>$magazine->id,
'category'=>$magazine->category->name,
'title'=>$magazine->title,
'cover'=>$magazine->cover,
'date'=>$magazine->updated_at->diffForHumans(),
            ];
        });

        
        return inertia('Welcome',[
            'hero'=>$hero,
            'forYou'=>$forYou,
            'popular'=>$popular,
        ]);
    }
}
