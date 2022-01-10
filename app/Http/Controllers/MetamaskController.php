<?php

namespace App\Http\Controllers\Metamask;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use App\Models\NFT;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class MetamaskController extends Controller
{
    /**
     * Metamask Result Page
     * Based from https://dev.to/lathindu1/metamask-integration-with-laravel-4mng
     * 
     * @return void
     */
    public function index()
    {
        $response['transactions'] = Transaction::all();
        return view('Pages.Metamsk.metamask')->with($response);
    }

    public function create(Request $request)
    {
        // return  Transaction::create([
        //     "txHash" => $request->txHash,
        //     "amount" => $request->amount,
        // ]);
    }
}