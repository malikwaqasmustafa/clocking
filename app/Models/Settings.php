<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected string $table = 'settings';

    /**
     * @var string[]
     */
    protected array $fillable = [
        'device_ip',
        'api_url',
        'company_id',
        'device_model'
    ];
}
