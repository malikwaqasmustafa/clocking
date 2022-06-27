<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TerminalController extends Controller
{
    /**
     * Show the application add terminal.
     *
     * @return Renderable
     */
    public function add()
    {
        return view('add-terminal');
    }

    /**
     * @param  Request  $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'device_ip'    => 'required',
            'device_model' => 'required'
        ]);

        if (!empty($validated)) {
            $setting = Settings::where('device_ip', $validated['device_ip'])->first();

            if (!$setting instanceof Settings) {
                $setting = Settings::create([
                    "device_ip"    => $validated['device_ip'],
                    "api_url"      => 'https://jawa.linksdev.co.uk/api/storeClocking',
                    "company_id"   => 3,
                    "device_model" => $validated['device_model']
                ]);

                if ($setting instanceof Settings) {
                    return response()->json(["status" => "success", "message" => "Terminal was added successfully"]);
                }
            } else {
                return response()->json(["status" => "failed", "message" => "Terminal with this ip already exists"]);
            }
        }

        return response()->json(["status" => "failed", "message" => "Failed to add new terminal"]);
    }

    /**
     * Show the application dashboard.
     *
     * @return Renderable
     */
    public function loadTerminals(): Renderable
    {
        $terminals = Settings::all();
        return view('includes.terminals', compact('terminals'));
    }
}

