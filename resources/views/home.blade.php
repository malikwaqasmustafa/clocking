@extends('layouts.dashboard_layout')
@section('content')

    <style>
        img {
            height: 150px;
            width: 100%;
        }

        .item {
            padding-left: 5px;
            padding-right: 5px;
        }

        .item-card {
            transition: 0.5s;
            cursor: pointer;
            background-color: #289b85;
            color: white;
            margin: 4px;
            padding: 5px;
            border-radius: 6px;
        }

        .item-card-title {
            font-size: 15px;
            transition: 1s;
            cursor: pointer;
        }

        .item-card-title i {
            font-size: 15px;
            transition: 1s;
            cursor: pointer;
            color: #ffa710
        }

        .card-title i:hover {
            transform: scale(1.25) rotate(100deg);
            color: #18d4ca;

        }

        .card:hover {
            transform: scale(1.05);
            box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.3);
        }

        .card-text {
            height: 80px;
        }

        .card::before, .card::after {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: scale3d(0, 0, 1);
            transition: transform .3s ease-out 0s;
            background: rgba(255, 255, 255, 0.1);
            content: '';
            pointer-events: none;
        }

        .card::before {
            transform-origin: left top;
        }

        .card::after {
            transform-origin: right bottom;
        }

        .card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
            transform: scale3d(1, 1, 1);
        }
    </style>
    <section class="contentBody noBg noFooter directorDb">
        <div class="directorDbTopBar listingTopbar hideForIframe">
            <h2>Welcome, <b>{{Auth::user()->name}}</b></h2>
            <p>An overlook of all Terminals</p>
        </div>

        <div class="directorDbWrap hideForIframe">
            <div class="scrollArea">

                <div class="container mt-2">

                    <div class="row">

                        @if(!empty($terminals) > 0)
                            @php($i=1)
                            @foreach($terminals as $terminal)

                                <div class="col-md-3 col-sm-6 item">
                                    <div class="card item-card card-block">
                                        <img src="{{asset('images/device-2.jpeg')}}" alt="Photo of sunset">
                                        <p class="card-text">
                                            IP: {{$terminal->device_ip}}<br>
                                            Model: {{$terminal->device_model}}<br>
                                            Status:
                                            <button class="btn btn-xs btn-success">Connected</button>
                                            <br>
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
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection
