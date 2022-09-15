<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use maliklibs\Zkteco\Lib\ZKTeco;
use Mockery\Exception;

class TerminalController extends Controller
{
    /**
     * Show the application add terminal.
     *
     * @return Renderable
     */
    public function add(): Renderable
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
            'device_ip'    => 'required|ipv4',
            'device_model' => 'required'
        ]);

        if (!empty($validated)) {

            /**
             * Verify the connection with machine if it's pingable or not if yes fetch the serial number
             * and update it in the settings table along with this new terminal creation
            */
            try {
                $zk = new ZKTeco($validated['device_ip']);
                if($zk->connect()){
                    $zk->disableDevice();
                    $serialNumber = $zk->serialNumber();
                    $zk->enableDevice();
                }
            }catch (Exception $exception){
                return response()->json(["status" => "failed", "message" => $exception->getMessage()]);
            }


            if (empty($serialNumber)){
                return response()->json([
                    "status" => "failed",
                    "message" => "On this IP no active machine found please correct the ip and make sure there is an actual machine on it."]);
            }

            $setting = Settings::where('device_ip', $validated['device_ip'])->first();

            if (!$setting instanceof Settings) {
                $setting = Settings::create([
                    "device_ip"    => $validated['device_ip'],
                    "api_url"      => 'https://jawa.linksdev.co.uk/api/v2/storeClocking',
                    "company_id"   => 3,
                    "device_model" => $validated['device_model'],
                    "serial_number" => $serialNumber
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

    /**
     * Show the application add terminal.
     *
     * @param $id
     * @return Renderable
     */
    public function edit($id): Renderable
    {
        $settings = Settings::find($id);

        return view('edit-terminal', compact('settings'));
    }

    /**
     * @param  Request  $request
     * @return JsonResponse
     */
    public function update(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'device_ip'    => 'required|ipv4',
            'device_model' => 'required'
        ]);

        if (!empty($validated)) {
            $input = $request->all();

            if (!empty($input['id'])) {

                $update = [];
                if (!empty($input['device_ip'])) {

                    /**
                     * Verify the connection with machine if it's pingable or not if yes fetch the serial number
                     * and update it in the settings table along with this new terminal creation
                     */
                    try {
                        $zk = new ZKTeco($validated['device_ip']);
                        if($zk->connect()){
                            $zk->disableDevice();
                            $serialNumber = $zk->serialNumber();
                            $zk->enableDevice();
                        }
                    }catch (Exception $exception){
                        return response()->json(["status" => "failed", "message" => $exception->getMessage()]);
                    }


                    if (empty($serialNumber)){
                        return response()->json([
                            "status" => "failed",
                            "message" => "On this IP no active machine found please correct the ip and make sure there is an actual machine on it."]);
                    }

                    $update['device_ip'] = $input['device_ip'];
                    $update['serial_number'] = $serialNumber;
                }

                if (!empty($input['device_model'])) {
                    $update['device_model'] = $input['device_model'];
                }

                if (!empty($update)) {
                    Settings::find($input['id'])->update($update);
                    return response()->json(["status" => "success", "message" => "Terminal updated successfully"]);
                }

                return response()->json(["status" => "success", "message" => "No change found"]);
            }

            return response()->json(["status"  => "failed",
                                     "message" => "Something went wrong please try again by refreshing the page or contact support"
            ]);
        }

        return response()->json(["status"  => "failed",
                                 "message" => "Something went wrong please try again by refreshing the page or contact support"
        ]);
    }

}

