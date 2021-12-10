<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades \DB;
use Redirect, Response, File;
use Illuminate\Support\Facades \Hash;
use App\Models\User;

class UserController extends Controller
{
    
    public function register(Request $req)
    {

        // $user = new User;

        // $user->name = $req->input('name');
        // $user->email = $req->input('email');
        // $user->password = Hash::make($req->input('password'));
        // $user->save();

        return response()->json([
            'status' => 200,
            'message' => 'User Saved Successfully',
        ]);
        
        // DB::table('user')->insert([
        //     'name' => $name,
        //     'email' => $email ,
        //     'password'=> $password]);
    }

    function login(Request $req){
        $email = $req->input('email');
        $password = $req->input('password');

        $user = DB::table('users')->where('email', $email)->first();
        
        if(!Hash::check($password, $user->password)){
            echo " Not Matched ";
        }
        else{
            echo $user->email;
        }
    }
}
   