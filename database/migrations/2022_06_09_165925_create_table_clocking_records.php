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
        Schema::create('clocking_records', function (Blueprint $table) {
            $table->id();
            $table->integer("UID")->nullable();
            $table->string('name')->nullable();
            $table->dateTime('clocking_in')->nullable();
            $table->dateTime('clocking_out')->nullable();
            $table->dateTime('break_in')->nullable();
            $table->dateTime('break_out')->nullable();
            $table->string('status')->nullable();
            $table->integer("company_id")->nullable();
            $table->text("serial_number");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clocking_records');
    }
};
