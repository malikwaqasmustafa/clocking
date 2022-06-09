<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link href="/images/favicon.png" rel="shortcut icon">
    <title>CareVision - Less Admin, More Caring</title>
    <link href="{{ asset('mix_media/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('mix_media/css/toast.css') }}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/css/select2.min.css" rel="stylesheet"/>
    <link href="{{ asset('mix_media/css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('mix_media/css/jquery-ui.css') }}">
    <link href="{{ asset('mix_media/css/jquery.ui.datepicker.css') }}" rel="stylesheet">
    <link href="{{ asset('mix_media/css/bootstrap-datetimepicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('mix_media/css/custom.css') }}?v={{strtotime(date('Y-m-d'))}}" rel="stylesheet">

    <link href="{{ asset('mix_media/css/mobile.css') }}" rel="stylesheet" media="screen and (max-device-width: 767px)">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
    <link href="{{ asset('mix_media/css/app_new.css') }}?v={{strtotime(date('Y-m-d'))}}" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script>
	var prefilled_global_text  = '';
	function imgError(image) {
		console.log(image.src);
		image.onerror = "";
		image.src = baseurl + '/mix_media/images/Noimage.jpg';
		console.log(image);
		return true;
	}
	function imgErrorReplace(image){
		var alt_text  = image.alt;
		var NameArray = alt_text.split(" ");
		var FinalName = '';
		if(NameArray[0]){
			FinalName  =  NameArray[0].substr(0, 1);
		}
		if(NameArray[1]){
			FinalName  +=  NameArray[1].substr(0, 1);
		}

		$(image).replaceWith("<span class='initials'>"+FinalName+"</span>");
		//$(image).parent().html("<span>"+FinalName+"</span>");
	}
	  /* Define functin to find and replace specified term with replacement string */

    function replaceAll(str, term, replacement) {
      return str.replace(new RegExp(escapeRegExp(term), 'g'), replacement);
    }

	 function escapeRegExp(string){
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
   }
    $(document).on('click', '.expansionBtn', function () {
        $(this).toggleClass('change');
        $('.leftNav').toggleClass('expand');
        $('.topBar').toggleClass('shrink');
        $('.mainBody').toggleClass('shrink');
        $('.mainMenu').toggleClass('shrink');
        $('.secLevel').toggleClass('slide');
    });
    </script>
</head>
<body>
@include('layouts.dashboard_header_2')
{{--@include('pharmacy.Mix_layout.sideNav')--}}
@yield('content')
@include('layouts.dashboard_footer_1')
