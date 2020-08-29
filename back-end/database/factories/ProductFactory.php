<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Product::class, function (Faker $faker) {

    return [
        'title' => $faker->word,
        'slug' => Str::slug($faker->word),
        'description' => $faker->sentence(5),
        'image' => 'https://via.placeholder.com/150x100',
        'price' => rand(10,100)
    ];
});
