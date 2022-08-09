<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <title>CareVision - Less Admin, More Caring</title>
    <link href="{{asset('ui_assets/css/app.css')}}" rel="stylesheet">
</head>

<body>

@include('loader')

<section class="login">
    <img src="{{ asset('ui_assets/images/logo-login.png') }}" alt="Care Vision" class="logo">
    <div class="loginSection">
        <span class="title">Hello!</span>
        Welcome to Care Vision Clocking Portal
        <form autocomplete="off" id="loginform" action="{{ route('verify.user') }}">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" id="username" value="{{ old('username') }}" required>
                @if ($errors->has('email'))
                    <span class="error">Wrong credentials. Try again or contact your account administrator.</span>
                @endif
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" required>
                @if ($errors->has('password'))
                    <span class="error">Wrong credentials. Try again or contact your account administrator.</span>
                @endif
            </div>
            <input id="company_id" type="hidden" name="company_id" value="">
            <button type="submit" id="signIn">Sign In</button>
        </form>
        <p class="copy">&copy; <?php echo date('Y');?> CareVision Management Ltd. All Rights Reserved</p>
    </div>
</section>
<script src="{{asset('ui_assets/js/jquery-3.5.1.js')}}"></script>
<script src="{{asset('ui_assets/js/toastr.js')}}"></script>
<script>

    $(document).on('click', '#signIn', function (){
        $(".loadingdiv").css("display","block");
    });

    $(document).ready(function (event) {
        $('#loginform').submit(function (e) {
            e.stopImmediatePropagation;
            e.preventDefault;
            var loginroute = $('#loginform').attr('action');
            var formdata = jQuery(this).serializeArray();

            jQuery.ajax({
                method: "POST",
                url: loginroute,
                type: 'JSON',
                data: formdata,
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                success: function (data) {
                    $(".loadingdiv").css("display","none");
                    if (data.status === "failed") {
                        toastr.error('These credentials do not match our records.', "Error");
                        return false;
                    } else {
                        window.location.href = '{{ route('home') }}'
                    }
                }, error: function (response) {
                    $(".preloader").css("display","none");
                    if (typeof response == 'object') {
                        toastr.error('These credentials do not match our records.', "Error");
                    } else {
                        location.reload();
                    }
                }
            });
            $(".loadingdiv").css("display","none");
            return false;
        });
    });
</script>
</body>
</html>
