<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * @return Response
     */
    public function dashboard(): \Inertia\Response
    {
        return Inertia::render('Dashboard/Index');
    }
}
