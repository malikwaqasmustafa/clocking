<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('settings')->update(["api_url" => "https://jawa.linksdev.co.uk/api/storeClocking/v2"]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::table('settings')->update(["api_url" => "https://jawa.linksdev.co.uk/api/storeClocking"]);
    }
};
