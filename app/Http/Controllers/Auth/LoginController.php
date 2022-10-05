<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use JsonException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * We are validating the login information of the client with out Cloud
     *
     *
     * @param  Request  $request
     * @return JsonResponse
     * @throws GuzzleException
     * @throws JsonException|JsonResponse
     */
    public function login(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        if (!empty($validated)) {
            $client = new Client();
            $response = $client->request('POST', 'https://prerelease.care-vision.co.uk/api/login', [
                'form_params' => [
                    'userName' => $validated['username'],
                    'password' => $validated['password'],
                    'ip'       => '192.168.0.1',
                ]
            ]);

            if ($response->getStatusCode() === 200) {
                $responseCollection = collect(json_decode($response->getBody()->getContents(), false, 512, JSON_THROW_ON_ERROR));

                if (!empty($responseCollection->get('success'))) {
                    $verifiedUserDetails = collect($responseCollection->get('data'));

                    if ($verifiedUserDetails->get('id')) {

                        $user = User::updateOrCreate(['users.company_id' => $verifiedUserDetails->get('id')], [
                            'name'     => $verifiedUserDetails->get('name'),
                            'email'    => $verifiedUserDetails->get('email'),
                            'password' => bcrypt($validated['password']),
                            'company_id' => $verifiedUserDetails->get('id')
                        ]);

                        if ($user instanceof User) {
                            Auth::loginUsingId($user->id);
                            return response()->json(["status" => "success", "message" => "logged in successfully"]);
                        }

                        return response()->json(["status"  => "failed",
                                                 "message" => "failed to verify the credentials"
                        ]);
                    }
                }

                return response()->json(["status" => "failed", "message" => "failed to verify the credentials"]);
            }

            return response()->json(["status" => "failed", "message" => "failed to verify the credentials"]);
        }

        return response()->json(["status" => "failed", "message" => "failed to validate the required details"]);
    }
}
