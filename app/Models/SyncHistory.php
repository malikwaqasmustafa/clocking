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
    protected string $table = 'sync_history';

    /**
     * @var string[]
     */
    protected array $fillable = [
        'date',
        'serial_number'
    ];
}
