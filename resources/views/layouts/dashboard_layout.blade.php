<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('images/favicon.png') }}" rel="shortcut icon">
    <title>CareVision - Clocking</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="{{ asset('media/css/custom.css') }}?v={{strtotime(date('Y-m-d'))}}" rel="stylesheet">
    <link href="{{ asset('media/css/mobile.css') }}" rel="stylesheet" media="screen and (max-device-width: 767px)">
    <link href="{{ asset('media/css/toast.css') }}" rel="stylesheet">
    @yield('extra-css')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
@include('layouts.dashboard_header_1')
@yield('content')

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<script src="{{ asset('media/js/toastr.js') }}"></script>
<script src="{{ asset('media/js/bootstrap-timepicker.js') }} "></script>
<script src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
<script src="{{ asset('media/js/bootstrap-datetimepicker.min.js') }}"></script>
<script src="{{ asset('media/js/jquery.scrollbar.min.js') }}?v={{strtotime(date('Y-m-d'))}}"></script>
<script src="{{ asset('media/js/autosize.min.js') }}?v={{strtotime(date('Y-m-d'))}}"></script>
<script src="{{ asset('media/js/custom.js') }}?v={{strtotime(date('Y-m-d'))}}"></script>
@yield('extra-js')
<script>
    // $.ajaxSetup({
    //     headers: {
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     }
    // });
</script>
</body>
</html>
