<?php

namespace Database\Factories;

use App\Models\ClockingRecord;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ClockingRecordFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ClockingRecord::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'UID' => $this->faker->numberBetween(0,50),
            'name' => $this->faker->name,
            'clocking_in' => $this->faker->dateTime,
            'clocking_out' => $this->faker->dateTime,
            'break_in' => $this->faker->dateTime,
            'break_out' => $this->faker->dateTime,
            'status' => $this->faker->numberBetween(0,4),
            'company_id' => $this->faker->numberBetween(0, 1000),
            'serial_number' => $this->faker->iban
        ];
    }
}
