<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::table('news', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // drop foreign key dulu kalau ada
            $table->dropColumn('user_id');    // hapus kolom user_id
        });
    }

    public function down()
    {
        Schema::table('news', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
        });
    }
};

