<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SyncHistory extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'sync_history';

    /**
     * @var string[]
     */
    protected $fillable = [
        'date',
        'serial_number'
    ];
}
