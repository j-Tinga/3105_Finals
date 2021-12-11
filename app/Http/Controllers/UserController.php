<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades \DB;
use Redirect, Response, File;
use Illuminate\Support\Facades \Hash;
use App\Models\User;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    
    public function register(Request $req)
    {

        $user = new User;

        $user->name = $req->input('username');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));

        $validator = Validator::make(
            ['name' => 'required|unique'],
            ['email' => 'required|unique:user|email'],
        );
        
        if($validator){
            $user->save();
            return response()->json([
                'status' => 200,
                'message' => 'User Saved Successfully',
            ]);
        }

        if ($validator->fails()){
            $messages = $validator->messages();
            echo $message; 
        }

    }

    public function login(Request $req){

        $user = new User;

        $user->email = $req->input('email');
        $user->password = $req->input('password');

        $emailV = User::where('email', '=', $user->email)->get();
        $passV = User::where('password', '=', Hash::make($user->password))->get();
        
        if($emailV && $passV){ // && Hash::check($user->password, $users->password)
            return response()->json([
                'emailV' => $emailV,
                'passV' => $passV,
                'id' => $user->id,
                'status' => 200,
                'message' => 'User Login Successfully',
            ]);
        }
        else{
            echo " Not Matched ";
        }
    }
}
   