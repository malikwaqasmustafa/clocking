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
            <button class="btn btn-primary pull-right" id="reloadTerminals">Reload</button>
        </div>

        <div class="directorDbWrap hideForIframe">
            <div class="scrollArea">

                <div class="container mt-2">

                    <div class="row" id="terminalListings">
                        {{-- This will be replaced with ajax response --}}
                    </div>

                </div>
            </div>
        </div>
    </section>

    <script type="text/javascript">
        $(document).ready(function ($) {

            // Load for the first time
            renderTerminals();

            // Register a reload timeframe (every ten seconds)
            setInterval(function() {
                renderTerminals();
            }, 60*1000);

            // Method to trigger GET request on Controller
            function renderTerminals(){
                const ajax_url = "{{route('terminal.load')}}";
                $.ajax({
                    url: ajax_url,
                    type: 'GET',
                    dataType: 'html',
                    success: function (response) {

                        $('#terminalListings').fadeOut("slow", function () {
                            $(this).html(response);
                            $(this).fadeIn();
                        });

                    }, error: function () {
                        $('#terminalListings').html("failed to load terminals please press the refresh button or reload page");
                    }
                });
                return false;
            }

            // ForceFul ReFresh
            $("#reloadTerminals").click(function (ev) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                renderTerminals();
            });
        });
    </script>

@endsection
