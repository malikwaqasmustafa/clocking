<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClockingRecord extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected string $table = 'clocking_records';

    /**
     * @var string[]
     */
    protected array $fillable = [
        'UID',
        'name',
        'clocking_in',
        'clocking_out',
        'break_in',
        'break_out',
        'status',
        'company_id',
        'serial_number'
    ];
}
