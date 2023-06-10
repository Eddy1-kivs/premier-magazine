<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Plan>
 */
class PlanFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $description  = [
            'Daily updates, Newsletters, Events, Subscriptions ',
            'Daily updates, Newsletters, Events, Subscriptions ',
        ];
        return [
            // 'name'=>$this->faker->firstName,
        ];
    }
}
