@if(!empty($terminals) > 0)
    @php($i=1)
    @foreach($terminals as $terminal)

        <div class="col-md-3 col-sm-6 item">
            <div class="card item-card card-block">
                <img src="{{asset('images/device-2.jpeg')}}" alt="Photo of sunset">
                <?php
                    $status = \App\Models\Settings::verifyStatus($terminal->device_ip)
                ?>
                <p class="card-text">
                    IP: {{$terminal->device_ip}}<br>
                    Model: {{$terminal->device_model}}<br>
                    Status:
                    <button class="btn btn-xs {{ ($status === "Connected") ? 'btn-success' : 'btn-danger' }}">
                        {{ $status }}
                    </button>
                    <a href="{{ route("terminal.edit", ['id' => $terminal->id]) }}" class="btn btn-xs btn-primary">Edit Configurations</a>
                </p>
            </div>
        </div>

        @php($i++)
    @endforeach
@else
    <h3 class="text-danger">You have not added any terminal yet, please set a static ip to your device and click
        below to add new terminal</h3>
    <a href="{{ route('terminal.add') }}" type="button" class="btn btn-primary" style="color: white">Add New Terminal</a>
@endif
