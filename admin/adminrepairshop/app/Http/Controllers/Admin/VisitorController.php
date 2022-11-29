<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Visitor;

class VisitorController extends Controller
{

    public function GetVisitorDetails(){

        $ip_address = $_SERVER['REMOTE_ADDR'];
        date_default_timezone_set("America/Mexico_City");
        $visit_time = date('h:s:sa');
        $visit_date = date('d-m-Y');

        $result = Visitor::insert([
            'ip_address' => $ip_address,
            'visit_time' => $visit_time,
            'visit_date' => $visit_date
        ]);
        return $result;

    }//end method
}
