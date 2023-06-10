<?php

namespace App\Http\Controllers;

use App\Models\Plan;
use App\Models\User;
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
        $this->setPlan($request);
    }

    private function setPlan($request)
    {
        $authUser = User::find(auth()->id());
        $authUser->plans()->detach();
        $authUser->plans()->attach($request->id);
        // dd($request->all());
    }
}
