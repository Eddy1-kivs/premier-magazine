<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Edition>
 */
class EditionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $covers = [
'images/fashion/1.jpg',
'images/fashion/2.jpg',
'images/fashion/3.jpg',
'images/fashion/4.jpg',
'images/fashion/5.jpg',
'images/fashion/6.jpg',
'images/fashion/7.jpg',
'images/fashion/9.jpg',
'images/fashion/10.jpg',
'images/fashion/a.jpg',
'images/fashion/b.jpg',
'images/fashion/c.jpg',
'images/fashion/d.jpg',
'images/fashion/e.jpg',
'images/fashion/f.jpg',
'images/fashion/g.jpg',
'images/fashion/h.jpg',
'images/fashion/i.jpg',


        ];
        return [
            'title'=>$this->faker->name(),
            'keywords'=>$this->faker->name(),
            'description'=>$this->faker->name(),
            'cover'=> $covers[array_rand($covers)],
            'pages'=>'["editions\/June2023\/QvxRVceqaGnTXPWfZyTU.jpg","editions\/June2023\/L4d4VRdUNhuHHVmvyqyO.jpg","editions\/June2023\/B7VL2vnPtt3FYnzrhsGv.jpg","editions\/June2023\/soXTDILSE5xYcD4Evzgv.jpg","editions\/June2023\/VEdoJyvsr3Dn4a0wikPV.jpg","editions\/June2023\/b5n8ZKfe6RlWCJUY3eDM.jpg","editions\/June2023\/fOnGpyF0YaVgEyqdmAKb.jpg","editions\/June2023\/MI9ZiPOFaJPe34lRf5Ej.jpg","editions\/June2023\/XwonzRDcAGCIbdwBZBsg.jpg","editions\/June2023\/KdcVbt48ssvdsrEx5PY7.jpg","editions\/June2023\/4dXQ49guOZN0bttMhhV5.jpg","editions\/June2023\/w8IyIqmRv6jFCnl07MXy.jpg","editions\/June2023\/Li8IReHVPlcyc9uPZvzm.jpg","editions\/June2023\/DTELoEXPrWwXOi4Tmrdz.jpg"]',
        ];
    }
}
