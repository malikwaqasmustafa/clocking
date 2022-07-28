<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use maliklibs\Zkteco\Lib\ZKTeco;
use Mockery\Exception;

class Settings extends Model
{
    use HasFactory;

    /**
     * @var string
     */
    protected $table = 'settings';

    /**
     * @var string[]
     */
    protected $fillable = [
        'device_ip',
        'api_url',
        'company_id',
        'device_model'
    ];

    /**
     * @param $ip
     * @return string
     */
    public static function verifyStatus($ip): string
    {
        try {
            $zk = new ZKTeco($ip);
            $zk->connect();
            $zk->disableDevice();
            $serialNumber = $zk->serialNumber();
            $zk->enableDevice();

            if(!empty($serialNumber)){
                return "Connected";
            }

            return "Disconnected";
        }catch (Exception $exception){
            return "Disconnected";
        }
    }
}
