<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class ApiAuthController extends Controller
{
    /**
     * @return array
     * Login user.
     */
    public function login()
    {
        $validator = Validator::make(request()->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if ($validator->fails())
            return ['status' => false, 'message' => implode(' ', $validator->errors()->all())];

        $user = User::whereEmail(request()->email)->first();

        if ($user) {
            if ($this->validateUser($user))
                return $this->getAccessToken($user);
            else
                return response()->json(['status' => false, 'message' => 'Invalid credentials.'])->setStatusCode(401);
        } else
            return response()->json(['status' => false, 'message' => 'User not found!'])->setStatusCode(404);
    }//..... end of login() .....//

    /**
     * @param User $user
     * @return bool
     * Validate User credentials.
     */
    private function validateUser(User $user)
    {
        return Hash::check(request()->password, $user->password);
    }//..... end of validateUser() .....//

    /**
     * @return array
     * Get Access token.
     */
    public function getAccessToken(User $user)
    {
        try {
            return array_merge($user->toArray(), [
                    'access_token' => $user->createToken($user->email)->accessToken,
                    'status'       => true,
                ]);
        } catch (\Exception $e) {
            return response()->json([
                'status'  => false,
                'message' => 'Could not get access token, please try later.'
            ])->setStatusCode(500);
        }//..... end of try-catch() .....//
    }//..... end of getAccessToken() .....//

    /**
     * @return array
     * Register new user.
     */
    public function register()
    {
        $validator = Validator::make(request()->all(), [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|min:6|confirmed'
        ]);

        if ($validator->fails())
            return ['status' => false, 'message' => implode(' ', $validator->errors()->all())];

        User::create(array_merge(['password' => bcrypt(request()->password)], request()->only(['name', 'email'])));

        return ['status' => true, 'message' => 'User registered successfully.'];
    }//..... end of register() .....//
}//..... end of class.
