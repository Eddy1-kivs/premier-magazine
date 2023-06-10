<?php

namespace App\Http\Controllers;
use PDF;
use App\Models\Edition;
use Illuminate\Http\Request;

class EditionController extends Controller
{
    public function index($id){
    return inertia('Magazine');
    }

    public function download($id){
        $edition = Edition::findOrFail($id);
        $pdf = PDF::loadView('edition',[
            'edition'=>$edition,
        ]);

        return $pdf->download('PREMIER-'.$edition->title);
    }
}
