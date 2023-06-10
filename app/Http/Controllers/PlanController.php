<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\Payment;
use App\Models\User;
use Daraja as Mpesa;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function index()
    {
        $plans  = Plan::get()->map(function ($plan) {
            return [
                'id' => $plan->id,
                'features' => explode(',', $plan->features),
                'display_price' => $plan->display_price,
                'display_name' => $plan->display_name,
                'display_period' => $plan->display_period,

            ];
        });
        return inertia('Pricing', [
            'plans' => $plans,
        ]);
    }

    public function subscribe(Request $request)
    {
$registerUrlsResponse=Mpesa::c2bRegisterUrls();
$simulateResponse=Mpesa::simulateC2B(100, "254708374149", $request->id());
        $this->setPlan($request);

    }

    public function confirm(Request $request){
        $this->setPlan($request->BillRefNumber);
        $authUser =  User::find(auth()->id())->payments()->create([
            'currency'=>'KES',
            'amount'=>$request->TransAmount,
            'payment_method'=>'SAFARICOM MPESA',
        ]);
    }

    private function setPlan($id)
    {
        $authUser = User::find(auth()->id());
        $authUser->plans()->detach();
        $authUser->plans()->attach($id);
    }
}
