var first_time_fulldata = 1;
$(window).load(function () {

    if ($(".inPageLinksTitle").length > 0) { //alert("here");

        var width = $('.inPageLinksTitle').parent().width();

        var offsetsh = $('.inPageLinksTitle').offset();

        $('.inPageLinksTitle').width(width - 30);

        $('.inPageLinks').width(width - 30);

        if (offsetsh.top > 220) {

            $('.inPageLinksTitle').addClass('changePosition');

            $('.inPageLinks').addClass('changePosition');

        }

    }

});

$(document).ready(function () {



	$('.front-face').click(function(e) {

		  ConfirmFromUser('Are you sure you want to enable Archive mode?','confirm_archieve_mode',$(this).attr('id'));

    });



	$('.back-face').click(function(e) {

		 confirm_archieve_mode(1,$(this));



    });



	$('.residentSelectChange .filter').click(function(){

            $('.residentSelectChange .fields').toggleClass('expand');
			$(this).parent().toggleClass('hiddenBox');

        });



	$('.inPageLinksTitle').parent().hide();





    $('.textcounter').keyup(function() {

        var text_length 	= $(this).val().length;

		var text_max 		= $(this).attr('limit');

        var text_remaining  = text_max - text_length;

        $(this).parent().find('.text_remaining').html(text_remaining + ' characters remaining');

    });







    function getRandom() {

        var text = "";

        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";



        for (var i = 0; i < 5; i++) {

            text += possible.charAt(Math.floor(Math.random() * possible.length));

        }



        return text;

    }





    $('.confirm_alert').change(function (e) {

        var confirm_id = $(this).attr('id');

        var alert_checked = $('#' + confirm_id + ':checked').length > 0;

        if (alert_checked) {

          //  var confirm_alert = confirm("Are you sure?");

			ConfirmFromUser('Are you sure?','confirm_alert_response',confirm_id);

            /*if (!confirm_alert) {

                $('#' + confirm_id).attr('checked', false);

            }

*/        }

		else{

			confirm_alert_after(0);

		}

    });









    $('.alertsNotification .closeAlerts').click(function () {



        $('.alertsNotification').removeClass('active');



    });



    $('.alertsNotification .closeBtn').click(function () {



        $('.alertsNotification').removeClass('active');



    });



    $('.alertsNotification .showNotifications').click(function () {



        $('.alertsNotification').removeClass('active');



        $('.alerts').addClass('open');



        $('.overlay').addClass('active');



        Getalerts(1);

    });


    $(document).on('click','.showNotificationsNew', function () {
        window.location.href = baseurl+'/messagescenter';
    });


    $(document).on('click', '[redirecto]', function () {

        var url = $(this).attr('redirecto');

        window.location.href = url;

    });



    $(".closeBar").click(function () {

        $(".notificationBar").remove();

        $('.overlay').removeClass('active');

    });



    $(".smileysBtn").click(function () {



        var change_class = $(this).attr('change_class');

        var PreviousActive = $(this).parent().find('button.active').index();

        var CurrentActive = $(this).index();

        var smileysVal = $(this).val();

        $("." + change_class).removeClass('active');



        if (PreviousActive != CurrentActive) {

            $(this).addClass('active');

            $(this).parent().parent().find('input.moodvalue').val(smileysVal);

        } else {

            $(this).parent().parent().find('input.moodvalue').val('');

        }

        //console.log("PreviousActive:"+PreviousActive);

        //console.log("CurrentActive:"+CurrentActive);

    });





    // Datepicker

    if ($.isFunction($.fn.datepicker)) {

        $(".datepicker").each(function (i, el) {

            var $this = $(el),

                opts = {

                    //\format: attrDefault($this, 'format', 'dd/mm/yyyy'),

                    startDate: attrDefault($this, 'startdate', ''),

                    endDate: attrDefault($this, 'enddate', ''),

                    daysOfWeekDisabled: attrDefault($this, 'disableddays', ''),

                    startView: attrDefault($this, 'startview', 0),

                    rtl: false

                },

                $n = $this.next(),

                $p = $this.prev();



            $this.datepicker(opts);



            if ($n.is('.input-group-addon') && $n.has('a')) {

                $n.on('click', function (ev) {

                    ev.preventDefault();



                    $this.datepicker('show');

                });

            }



            if ($p.is('.input-group-addon') && $p.has('a')) {

                $p.on('click', function (ev) {

                    ev.preventDefault();



                    $this.datepicker('show');

                });

            }

        });

    }



    // Timepicker

    if ($.isFunction($.fn.timepicker)) {

        $(".timepicker").each(function (i, el) {

            var $this = $(el),

                opts = {

                    template: attrDefault($this, 'template', false),

                    showSeconds: attrDefault($this, 'showSeconds', false),

                    defaultTime: attrDefault($this, 'defaultTime', 'current'),

                    showMeridian: attrDefault($this, 'showMeridian', true),

                    minuteStep: attrDefault($this, 'minuteStep', 15),

                    secondStep: attrDefault($this, 'secondStep', 15)

                },

                $n = $this.next(),

                $p = $this.prev();



            $this.timepicker(opts);



            if ($n.is('.input-group-addon') && $n.has('a')) {

                $n.on('click', function (ev) {

                    ev.preventDefault();



                    $this.timepicker('showWidget');

                });

            }



            if ($p.is('.input-group-addon') && $p.has('a')) {

                $p.on('click', function (ev) {

                    ev.preventDefault();



                    $this.timepicker('showWidget');

                });

            }

        });

    }



    // Timepicker

    if ($.isFunction($.fn.timepicker)) {

        $(".timepicker").each(function (i, el) {

            var $this = $(el),

                opts = {

                    template: attrDefault($this, 'template', false),

                    showSeconds: attrDefault($this, 'showSeconds', false),

                    defaultTime: attrDefault($this, 'defaultTime', 'current'),

                    showMeridian: attrDefault($this, 'showMeridian', true),

                    minuteStep: attrDefault($this, 'minuteStep', 15),

                    secondStep: attrDefault($this, 'secondStep', 15)

                },

                $n = $this.next(),

                $p = $this.prev();



            $this.timepicker(opts);



            if ($n.is('.input-group-addon') && $n.has('a')) {

                $n.on('click', function (ev) {

                    ev.preventDefault();



                    $this.timepicker('showWidget');

                });

            }



            if ($p.is('.input-group-addon') && $p.has('a')) {

                $p.on('click', function (ev) {

                    ev.preventDefault();



                    $this.timepicker('showWidget');

                });

            }

        });

    }





// Element Attribute Helper

    function attrDefault($el, data_var, default_val) {

        if (typeof $el.data(data_var) != 'undefined') {

            return $el.data(data_var);

        }



        return default_val;

    }



    toastr_opts = {

        "closeButton": true,

        "debug": false,

        "positionClass": "toast-middle-right",

        "onclick": null,

        "showDuration": "300",

        "hideDuration": "1000",

        "timeOut": "5000",

        "extendedTimeOut": "1000",

        "showEasing": "swing",

        "hideEasing": "linear",

        "showMethod": "fadeIn",

        "hideMethod": "fadeOut"

    };

    ShowNewTodo = 0;



    $(document).ajaxError(function (event, jqXHR, ajaxSettings, thrownError) {

        //$('.modal').modal('hide');

        $('.btn[data-loading-text]').button('reset');

		 if (jqXHR.readyState == 0 || jqXHR.status == 0) {

			   return; //Skip this error

		 }



        switch (jqXHR.status) {

            case 500:

                toastr.error('Oops Something went wrong please contact your system administrator', "Error", toastr_opts);

                break;

            case 503:

                toastr.error('Service Unavailable', "Error", toastr_opts);

                break;

            case 504:

                toastr.error('Gateway Timeout', "Error", toastr_opts);

                break;

            case 400:

                toastr.error('Bad Request', "Error", toastr_opts);

                break;

            case 404:

                toastr.error('Not Found', "Error", toastr_opts);

                break;

            case 401:

                console.log("event");

                console.log(event);

                console.log("jqXHR");

                console.log(jqXHR);

                console.log("ajaxSettings");

                console.log(ajaxSettings);

                console.log("thrownError");

                console.log(thrownError);

                toastr.error('Unauthorized', "Error", toastr_opts);

                toastr.error('Session expired now redirecting to login page', "Error", toastr_opts);

                setTimeout(function () {

                    window.location.href = baseurl;

                }, 100);

                break;

            case 403:

                toastr.error('Access Denied', "Error", toastr_opts);

                break;

            case 408:

                toastr.error('Request Timeout', "Error", toastr_opts);

                break;

            case 410:

                toastr.error('Gone', "Error", toastr_opts);

                break;

            case 422:

                if (loginpage) {

                    toastr.error('These credentials do not match our records.', "Error", toastr_opts);

                } else {

                   // toastr.error(thrownError, "Error", toastr_opts);

                }

				case 0:

					console.log("event");

					console.log(event);

					console.log("jqXHR");

					console.log(jqXHR);

					console.log("ajaxSettings");

					console.log(ajaxSettings);

					console.log("thrownError");

					console.log(thrownError);

                break;

            default:

                if (thrownError != '') {

                    toastr.error(thrownError, "Error", toastr_opts);

                }

        }

    });



    $.ajaxSetup({

        headers: {

            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')

        }

    });





    function ShowToastr(type, message) {

        var opts = {

            "closeButton": true,

            "debug": false,

            "positionClass": "toast-middle-right",

            "onclick": null,

            "showDuration": "300",

            "hideDuration": "1000",

            "timeOut": "5000",

            "extendedTimeOut": "1000",

            "showEasing": "swing",

            "hideEasing": "linear",

            "showMethod": "fadeIn",

            "hideMethod": "fadeOut"

        };

        if (type == "success") {

            toastr.success(message, "Success", opts);

        } else {

            toastr.error(message, "Error", opts);

        }



    }



    function show_summernote(element, options) {

        if (!!document.createRange) {

            document.getSelection().removeAllRanges();

        }



        element.addClass("hidden");

        element.summernote('destroy');



        element.summernote({

            onInit: function () {

                //console.log('Summernote is launched');

            },

            toolbar: [

                ['placeholders', ['placeholders']], // here, for example

                ['style', ['style']],

                ['font', ['bold', 'italic', 'underline', 'clear']],

                ['fontname', ['fontname']],

                ['color', ['color']],

                ['para', ['ul', 'ol', 'paragraph']],

                ['height', ['height']],

                ['table', ['table']],

                ['insert', ['media', 'link', 'hr', 'picture', 'video']],

                ['view', ['fullscreen', 'codeview']],

                ['help', ['help']]

            ],

            height: 200,

            tabsize: 2,

            dialogsInBody: true,

            defaultOptions: options

        });

    }





    if (typeof TableTools != 'undefined') {



        /* dataTable Export Button */

        var data_table_extra_params = [];



        TableTools.BUTTONS.download = {

            "sAction": "text",

            "sTag": "default",

            "sFieldBoundary": "",

            "sFieldSeperator": "\t",

            "sNewLine": "<br>",

            "sToolTip": "",

            "sButtonClass": "DTTT_button_text",

            "sButtonClassHover": "DTTT_button_text_hover",

            "sButtonText": "Download",

            "mColumns": "all",

            "bHeader": true,

            "bFooter": true,

            "sDiv": "",

            "fnMouseover": null,

            "fnMouseout": null,

            "fnClick": function (nButton, oConfig) {



                var oParams = this.s.dt.oApi._fnAjaxParameters(this.s.dt);

                var aoPost = [

                    //{"name": "hello", "value": "world"}

                ];

                var aoGet = [];



                /* Create an IFrame to do the request */

                nIFrame = document.createElement('iframe');

                nIFrame.setAttribute('id', 'RemotingIFrame');

                nIFrame.style.border = '0px';

                nIFrame.style.width = '0px';

                nIFrame.style.height = '0px';



                document.body.appendChild(nIFrame);

                var nContentWindow = nIFrame.contentWindow;

                nContentWindow.document.open();

                nContentWindow.document.close();



                var nForm = nContentWindow.document.createElement('form');

                nForm.setAttribute('method', 'post');



                /* Add POST data */

                for (var i = 0; i < aoPost.length; i++) {

                    nInput = nContentWindow.document.createElement('input');

                    nInput.setAttribute('name', aoPost[i].name);

                    nInput.setAttribute('type', 'text');

                    nInput.value = aoPost[i].value;

                    nForm.appendChild(nInput);

                }

                //var params = data_table.oApi._fnAjaxParameters(data_table.dataTable().fnSettings());

                var params = this.s.dt.oApi._fnAjaxParameters(this.s.dt);

                //console.log(params);



                /* Add All Params data to the URL */

                var sUrlAddition = '';

                for (var i = 0; i < params.length; i++) {

                    sUrlAddition += params[i].name + '=' + params[i].value + '&';

                }

                for (var i = 0; i < data_table_extra_params.length; i++) {

                    sUrlAddition += data_table_extra_params[i].name + '=' + data_table_extra_params[i].value + '&';

                }

                if (oConfig.sButtonClass == 'save-collection sageexport') {

                    if (confirm('Do you want to change the status of selected invoices to Paid?')) {

                        sUrlAddition += 'MarkPaid=1&';

                    }

                }

                //console.log(sUrlAddition);

                /* Add GET data to the URL */

                //var sUrlAddition = '';

                for (var i = 0; i < aoGet.length; i++) {

                    sUrlAddition += aoGet[i].name + '=' + aoGet[i].value + '&';

                }

                console.log(oConfig.sUrl + '?' + sUrlAddition);



                nForm.setAttribute('action', oConfig.sUrl + '?' + sUrlAddition);



                /* Add the form and the iframe */

                nContentWindow.document.body.appendChild(nForm);



                /* Send the request */

                nForm.submit();

            },

            "fnSelect": null,

            "fnComplete": null,

            "fnInit": null

        };

    }



    jQuery(document).ready(function (event) {

        //$('#hidden_fld').remove();

        jQuery('#loginform').submit(function (e) {

            e.stopImmediatePropagation;

            e.preventDefault;

            var loginroute = $('#loginform').attr('action');

            var formdata = jQuery(this).serializeArray();



            jQuery.ajax({

                method: "POST",

                url: loginroute,

                type: 'JSON',

                data: formdata,

                success: function (data) {

                    if (data.status == "failed") {



                        toastr.error(data.message, "Error", toastr_opts);

                    } else {

                        window.location.href = baseurl+'/dashboard';

                    }

                }, error: function (response) {  console.log(response);

					if(typeof response =='object')

					{

						shakeForm();

					}else{

						location.reload();

					}

					/*try {*/

						//obj = JSON.parse(response);

						//shakeForm();

					/*} catch(e) {

						location.reload();

					}*/



				/*	if(response.statusText=='Internal Server Error'){

						alert(response.responseText);

					 //location.reload();

					}

                    var obj = JSON.parse(response.responseText);

                    alert(obj.email);

                    shakeForm();*/



                }

            });

            return false;

        });



        //

        function shakeForm() {

            var l = 20;



            for (var i = 0; i <= 10; i++) {

                $('#loginform').animate({

                    'margin-left': '+=' + ( l = -l ) + 'px',

                    'margin-right': '-=' + l + 'px'

                }, 50);

            }

        }





	    $(document).on('click','.cancelbtn',function(e){

            window.location = $(this).attr('href');

        });



    });





	 $(document).on('click','.counterBtn',function(e){

        var $button  		= $(this);

        var negative  		= $button.attr('negative'); //alert(negative);

		var min_value 		= $button.parent().find("input").attr('min');

		var max_value 		= $button.parent().find("input").attr('max');

        var oldValue  		= $button.parent().find("input").val();

	    var CheckDisabled   = $button.parent().find("input").attr('disabled');



		if(CheckDisabled)

	 	{

			return;

		}



		/*negative check start*/

        if ($button.hasClass('plus'))

		{

            var newVal = parseFloat(oldValue) + 1;

        }

		else

		{

            if (oldValue > 0)

			{

                var newVal = parseFloat(oldValue) - 1;

            }

			else

			{

                if (negative)

				{

                    var newVal = parseFloat(oldValue) - 1;

                }

				else

				{

                    newVal = 0;

                }

            }

        }

        $button.parent().find("input").val(parseFloat(newVal).toFixed(2));

        $button.parent().find("input").trigger('change');

		/*negative check end*/

		/*min max check start*/



		if(max_value && min_value)

		{

			if ($button.hasClass('plus'))

			{

				var newVal = parseFloat(oldValue) + 1;

			}

			else

			{

				var newVal = parseFloat(oldValue) - 1;

			}



			if(newVal>max_value)

			{

				newVal = max_value;

			}



			if(newVal<min_value)

			{

				newVal = min_value;

			}



			$button.parent().find("input").val(parseFloat(newVal).toFixed(2));

	        $button.parent().find("input").trigger('change');

		}





		/*min max check end*/



    });





    $('.reset_filter ').click(function (e) {

        document.getElementById('search_box').reset();

        data_table.draw();

    });



    $('.reset_sort ').click(function (e) {

        //	document.getElementById('search_box').reset();

        //sorting  = [[2, 'desc']];

        var sort_field = $(this).attr('sort_field');

        var sort_type = $(this).attr('sort_type');



        if (sort_field.length > 0) {

            var sorting_reset = [[sort_field, sort_type]];

        } else {

            var sorting_reset = [[2, 'desc']];

        }

        //console.log(sorting_reset);

        data_table.order(sorting_reset).draw();

    });



    $('.printdata').click(function (e) {

        var that 		    =  this;

        var ModuleName 		=  $(this).attr('module');

		var redirect_url    =  $(this).attr('redirect_url');



        $(this).attr('disabled', 'disabled');

        $(this).button('loading');

        $('.dataTables_processing').css("visibility", "visible");



		if(!redirect_url){

        	var ajaxurl = baseurl + '/' + ModuleName + "/print";

		}else{

			var ajaxurl = baseurl + '/' + ModuleName + "/print?redirect="+redirect_url;

		}



        var selected = [];

        $('.gridcheckbox:checked').each(function () {

            selected.push($(this).attr('data-id'));

        });

        if (selected.length == 0) {

            toastr.error("Please select atleast one row", "Error", toastr_opts);

            $(that).button('reset');

            return false;

        }

		var search_Str = '';
		$('#search_box').find('.search_filter').each(function () {
			search_Str +=   $(this).attr('name')+"="+$(this).val()+"&";
		});

		console.log(search_Str);

        $('#selected_rows').val(selected);

		$('#selected_filter_print').val(search_Str);

        $('#form_print').attr('action', ajaxurl);

        $('#form_print').submit();

        $(that).button('reset');

        var is_checked = $("#selectall").is(':checked');

        if (is_checked) {

            $("#selectall").trigger('click');

        }



    });





	 $('.change_global_unit').change(function (e) {

        e.stopImmediatePropagation();

        e.preventDefault();

        var change_global_unit = $(this).val();

        if (change_global_unit) {

            var token = $(document).find('input[name=_token]').eq(0).val();



            //var formData = new FormData($(this)[0]);

            var ajax_url = baseurl + '/residentsummery/selectallresident';



            $.ajax({

                url: ajax_url,

                type: 'POST',

                dataType: 'json',

                data: {"_token": token,change_global_unit:change_global_unit},

                success: function (response) {

					 $(".change_global_resident option").remove();

						$.each(response.data, function(key, value) {

   							 $('.change_global_resident').append($("<option></option>").attr("value",value.ID).text(value.residentName));

						});

                }, error: function (ErrorResponse) {

                    toastr.error(ErrorResponse.message, "Error", toastr_opts);

                }

            });

            return false;





        }

    });



    $('.change_global_resident').change(function (e) {

        e.stopImmediatePropagation();

        e.preventDefault();

        var change_global_resident = $(this).val();

        if (change_global_resident && !isNaN(change_global_resident)) {

            var token = $(document).find('input[name=_token]').eq(0).val();



            //var formData = new FormData($(this)[0]);

            var ajax_url = baseurl + '/residentsummery/' + change_global_resident + '/selectresident';



            $.ajax({

                url: ajax_url,

                type: 'POST',

                dataType: 'json',

                data: {"_token": token},

                success: function (response) {

                    location.reload();

                }, error: function (ErrorResponse) {

                    toastr.error(ErrorResponse.message, "Error", toastr_opts);

                }

            });

            return false;





        }

    });





    $('.handle2').click(function () {



        $('.alerts').toggleClass('open');



        $('.overlay').toggleClass('active');

        Getalerts(1);



    });



    $('.closeAlerts').click(function () {



        $('.alerts').removeClass('open');



        $('.overlay').removeClass('active');



    });





    $('.gSeachIcon').click(function () {



        $('.globalSearch').addClass('active');



    });



    $('.closeSearch').click(function () {



        $('.globalSearch').removeClass('active');



    });



//////////////////////

    var uiBlocked = false;

/*

    window.setInterval(function () {

        if (loginpage == 1) {

            return false;

        }

        $.ajax({

            cache: false,

            type: 'GET',

            async: false,

            url: baseurl + '/is_server_alive',

            timeout: 3000,

            success: function (data, textStatus, XMLHttpRequest) {

                console.log(data);

                if (data != 'alive') {

                    if (uiBlocked == false) {

                        uiBlocked = true;

                        $.blockUI({

                            message: 'im trying to connect to the server',

                            css: {

                                border: 'none',

                                padding: '15px',

                                backgroundColor: '#000',

                                '-webkit-border-radius': '10px',

                                '-moz-border-radius': '10px',

                                opacity: .5,

                                color: '#fff'

                            }

                        });

                    }

                } else {

                    if (uiBlocked == true) {

                        uiBlocked = false;

                        $.unblockUI();

                    }

                    if (!$('.alerts').hasClass("open")) {

                        Getalerts(0);

                    }

                }

            },

            "error": function (response) {

                console.log(response.responseText);

                if (response != 'undefined' && response.length > 0) {

                    var responsetext = jQuery.parseJSON(response.responseText);



                    if (typeof responsetext == 'object') {

                        if (responsetext.error == 'Unauthenticated') {

                            window.location = baseurl;

                            return false;

                        }



                    }

                }

                if (uiBlocked == false) {

                    uiBlocked = true;

                    $.blockUI({

                        message: 'im trying to connect to the server',

                        css: {

                            border: 'none',

                            padding: '15px',

                            backgroundColor: '#000',

                            '-webkit-border-radius': '10px',

                            '-moz-border-radius': '10px',

                            opacity: .5,

                            color: '#fff'

                        }

                    });

                }



            },



        })



    }, 60000);

	*/



 window.setInterval(function () {

	 if(!loginpage)

	 {

	 	 Getalerts(0);

	 }else{

		console.log("one minute passed");

	 }



	  },60000);



    function Getalerts(ScreenView) {
        //var token		= $(document).find('input[name=_token]').eq(0).val();

        var token = $(document).find('input[name=_token]').last().val();

        var ajax_url = baseurl + '/todolist/getalerts';

        $.ajax({

            url: ajax_url,

            type: 'POST',

            dataType: 'html',

           // async: false,

            data: {"_token": token, "ScreenView": ScreenView},

            success: function (response) {


                var oldAlertsCount = $("#global_msg_counter").val();

                $('.todoalerts').html(response);
                var newAlertsCount = $("#global_unread_msgs").val();

                if(parseInt(oldAlertsCount) < parseInt(newAlertsCount))
                {
                    var newAlertsDiff = parseInt(newAlertsCount)-parseInt(oldAlertsCount);
                    $('.newNotifAlert').addClass('active');
                    $('.total_notifications_new').text(newAlertsDiff);

                }

                if (response.length > 0) {

                    $('.alerts').addClass('active');

                } else {

                    $('.alerts').removeClass('active');

                }

                ShowNewTodoListAlert(oldAlertsCount);

				ShowUnreadMsgCounter();



            }, error: function (ErrorResponse) {

				//console.log(ErrorResponse);

				 if (ErrorResponse.readyState == 0 || ErrorResponse.status == 0) {

			 		  return; //Skip this error

				 }

                toastr.error(ErrorResponse.message, "Error", toastr_opts);

            }

        });

    }





    function ShowNewTodoListAlert(oldAlertsCount) {

        //if(ShowNewTodo==1){return false;}

        var unread = 0;

        $('.newNotification').each(function (index, element) {

            unread++;

        });

        //alert("here1"); alert("unread:"+unread);

        if (unread > 0) {

            $('.total_notifications').html(unread);

            $('.newToDo').addClass('active');

            ShowNewTodo = 1;

        }

        //console.log("in messages show counter");
        var oldmsgcount = oldAlertsCount;//$(".global_msg_counter").text();
        var newmsgcount = $("#global_unread_msgs_notification").val();
        var unread_total_messages=$("#_global_unread_msgs_notification").val();
        //console.log("new Count = "+newmsgcount);
        //console.log("old Count = "+unread_total_messages);

        if(parseInt(newmsgcount) > parseInt(unread_total_messages)) {
            $("#total_unread_messages").text($("#global_unread_msgs_notification").val());
            $('.newMessagesPopup').addClass('active');
            unread_total_messages = newmsgcount;
          //  console.log("unread messages = "+$("#global_unread_msgs_notification").val());
        } else {
            $('.newMessagesPopup').removeClass('active');
        }


    }


	function ShowUnreadMsgCounter(){

		var global_unread_msgs = $('#global_unread_msgs').val();
        var unread_total_messages=$("#global_unread_msgs_notification").val();
		if(global_unread_msgs && !isNaN(global_unread_msgs)){

			if(global_unread_msgs>0)

			{
                //global_unread_msgs = unread_total_messages;
                //alert(global_unread_msgs);
				$('.messagesAlert .global_msg_counter').html(global_unread_msgs);

				$('.toDo .global_msg_counter').html(global_unread_msgs);

				$('.messagesAlert .global_msg_counter').show();


				//var CurrentSelecetedMsg = $('.MessagesList');



				//console.log("before");

				if (typeof GetMsgData === "function") {

					//$('.global_unread_total').html(global_unread_msgs);

					//GetMsgData(1);



					/*if(first_time_fulldata == 1)

					{

						GetMsgData(1);

						first_time_fulldata = 0;

					}else{

						GetMsgData(0);

					}*/

					//console.log("global_unread_msgs"+global_unread_msgs);

				}

				//console.log("after");

				//$('.change_msg_type.active').trigger('click'); ///reload last selected msg

				//$('.global_unread_total').html(global_unread_msgs);

			}

			else

			{

				$('.global_msg_counter').hide();

			}

		}

	}

	$(document).on('click', '.showMessageCenter', function (e) {

    });

    //

    $(document).on('click', '.complete_alert', function (e) {

        e.stopImmediatePropagation();

        e.preventDefault();

        var complete_alert_id = $(this).attr('data-id');



        var complete = 0;

        var complete_repeat = 0;



        if (!isNaN(complete_alert_id)) {

            var confirm_complete = confirm('Are you sure you want to complete the task?');

            if (confirm_complete) {

                complete = 1;

                var complete_task_repeat = $(this).attr('recurring_alert');

                if (complete_task_repeat.length > 0) {

                    var confirm_complete_repeat = confirm('Are you sure you want to complete the recurring task?');

                    if (confirm_complete_repeat) {

                        complete_repeat = 1;

                    }

                }

            }



        }



        if (complete) {



            var token = $(document).find('input[name=_token]').eq(0).val();

            //var formData 	= 	new FormData($(this)[0]);

            var ajax_url = baseurl + '/todolist/update_task_status';



            $.ajax({

                url: ajax_url,

                type: 'POST',

                dataType: 'json',

                data: {"_token": token, "id": complete_alert_id, "complete_repeat": complete_repeat},

                success: function (response) {

                    Getalerts(1);

                    toastr.success(response.message, "Success", toastr_opts);

                }, error: function (ErrorResponse) {

                    toastr.error(ErrorResponse.message, "Error", toastr_opts);

                }

            });

            return false;

        }

    });



    if (!loginpage) {

        Getalerts(0);

    }



	$(document).on('click', '.show_all_popup', function () {

		var all_text = $(this).parent().find('.show_all_text').html();



        $('#ShowAllText').find('.modal-body').html(all_text);

		$('#ShowAllText').modal('show');

    });





	$('.inputfile').change(function(e) {

        var fullPath = $(this).val();
		var id_show  = $(this).attr('show-id');

		 var a=(this.files[0].size);

		if(a > 2000000) {
			$("#MenuInputfile").val(""); // clear image input value
			console.log('big image');
			$("#MenuInputfile").val("");
			$('#'+id_show).html('');
			toastr.error("Image size is greater than 2MB.", "Error", toastr_opts);
			return false;
		}


 		if (fullPath) {
			var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
			var filename = fullPath.substring(startIndex);
			if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
				filename = filename.substring(1);
			}
			filenameNew = filename;
			var dotshow = '';
			if(filenameNew.length>25){
				filenameNew = filenameNew.substr(filenameNew.length-25,25);
				dotshow = '...';
			}
			var PicturePath =  baseurl+"/images/pictures.svg";
			$('#'+id_show).html('<span title="'+filename+'"><img src='+PicturePath+' class="svg">Selected File: '+dotshow+filenameNew+'</span>');
			ShowSvgImage();


		}
    });


});



function EnableSlider(objectStr, SaveType) {

    var currentCheck = $(objectStr).is(':checked');



    if (!currentCheck && SaveType) {

        $(objectStr).click();

    }



    if (currentCheck && !SaveType) {

        $(objectStr).click();

    }





}





function ShowToastr(type, message) {

    var opts = {

        "closeButton": true,

        "debug": false,

        "positionClass": "toast-middle-right",

        "onclick": null,

        "showDuration": "300",

        "hideDuration": "1000",

        "timeOut": "5000",

        "extendedTimeOut": "1000",

        "showEasing": "swing",

        "hideEasing": "linear",

        "showMethod": "fadeIn",

        "hideMethod": "fadeOut"

    };

    if (type == "success") {

        toastr.success(message, "Success", opts);

    } else {

        toastr.error(message, "Error", opts);

    }



}





function show_summernote(element, options) {

    if (!!document.createRange) {

        document.getSelection().removeAllRanges();

    }

    element.addClass("hidden");

    element.summernote('destroy');



    element.summernote({

        onInit: function () {

            console.log('Summernote is launched');

        },

        toolbar: [

            ['placeholders', ['placeholders']], // here, for example

            ['style', ['style']],

            ['font', ['bold', 'italic', 'underline', 'clear']],

            ['fontname', ['fontname']],

            ['color', ['color']],

            ['para', ['ul', 'ol', 'paragraph']],

            ['height', ['height']],

            ['table', ['table']],

            ['insert', ['media', 'link', 'hr', 'picture', 'video']],

            ['view', ['fullscreen', 'codeview']],

        ],

        /* height: 200,*/

        tabsize: 2,

        dialogsInBody: true,

        defaultOptions: options

    });

}



////////////

$('.handle').click(function () {

    $('.sideNav').toggleClass('closed');

    $(this).toggleClass('open');

    $('.contentHeader').toggleClass('expand');

    $('.contentBody').toggleClass('expand');

    $('.contentFooter').toggleClass('expand');

    $('.medicationLegends').toggleClass('expand');

	$('.dashboard').toggleClass('expand');

});



$('.scrollArea').scrollbar({autoUpdate: true});



$(document).ready(function () {

    var contentHeader = $('.contentHeader').height();

    $('.contentBody').css("top", contentHeader + 90);



    $(document).on('change', '#drp_toandfro_jump', function () {

        var val = $(this).val();

        if (val != "") {



            var url = window.location.href.replace(baseurl, "");

            var p = new RegExp('(\\/)(\\d+)', ["i"]);

            var m = p.exec(url);

            if (m != null) {

                url = url.replace(m[2], val);

                window.location.href = baseurl + url;

            }

        }

    });





    $("#selectall").click(function (ev) {

        var is_checked = $(this).is(':checked');

        $('#table-4 tbody tr').each(function (i, el) {

            if ($(el).find('.gridcheckbox:checked').length > 0) {

                if (is_checked) {



                }

                else {

                    $(el).find('.gridcheckbox').trigger('click');

                }

            }

            else {



                if (is_checked) {

                    $(el).find('.gridcheckbox').trigger('click');

                }

                else {



                }

            }

        });

    });

});





autosize($('textarea'));



jQuery('img.svg').each(function () {

    var $img = jQuery(this);

    var imgID = $img.attr('id');

    var imgClass = $img.attr('class');

    var imgURL = $img.attr('src');



    jQuery.get(imgURL, function (data) {

        // Get the SVG tag, ignore the rest

        var $svg = jQuery(data).find('svg');



        // Add replaced image's ID to the new SVG

        if (typeof imgID !== 'undefined') {

            $svg = $svg.attr('id', imgID);

        }

        // Add replaced image's classes to the new SVG

        if (typeof imgClass !== 'undefined') {

            $svg = $svg.attr('class', imgClass + ' replaced-svg');

        }



        // Remove any invalid XML tags as per http://validator.w3.org

        $svg = $svg.removeAttr('xmlns:a');



        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

        if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {

            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))

        }

        // Replace image with new SVG

        $img.replaceWith($svg);

        jQuery(this).css("opacity", 1);

    }, 'xml');





});



function ShowSvgImage() {

    jQuery('img.svg').each(function () {

        var $img = jQuery(this);

        var imgID = $img.attr('id');

        var imgClass = $img.attr('class');

        var imgURL = $img.attr('src');



        jQuery.get(imgURL, function (data) {

            // Get the SVG tag, ignore the rest

            var $svg = jQuery(data).find('svg');



            // Add replaced image's ID to the new SVG

            if (typeof imgID !== 'undefined') {

                $svg = $svg.attr('id', imgID);

            }

            // Add replaced image's classes to the new SVG

            if (typeof imgClass !== 'undefined') {

                $svg = $svg.attr('class', imgClass + ' replaced-svg');

            }



            // Remove any invalid XML tags as per http://validator.w3.org

            $svg = $svg.removeAttr('xmlns:a');



            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.

            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {

                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))

            }

            // Replace image with new SVG

            $img.replaceWith($svg);

        }, 'xml');





    });



}



function httpGet(baseurl, theUrl) {

    var http = new XMLHttpRequest();



    http.open('HEAD', baseurl + theUrl, false);

    http.send();



    return http.status != 404;

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



function StartperfectScrollbar() {

    $('.scrollArea').scrollbar({autoUpdate: true});

}



/////////////



function getParameterByName(name, url) {

    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),

        results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));

}



function Redirect(url, timeout) {

    setTimeout(function () {

        window.location.href = url

    }, timeout);

}





function getRandom() {

    var text = "";

    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";



    for (var i = 0; i < 5; i++) {

        text += possible.charAt(Math.floor(Math.random() * possible.length));

    }



    return text;

}

function FormatDate(date,Format)

{

	if(Format=="d-m-Y"){

		var jsDate = date.split("-");

		return jsDate[2]+"-"+jsDate[1]+'-'+jsDate[0];

	}

}





function AddDaysToDate(StartDate,Days,Format){

	var result = new Date(StartDate);



    result.setDate(result.getDate() + Days);



	if(Format=="d-m-Y"){

	var month_type =  result.getMonth()+parseInt(1);

		if(month_type<10){month_type = '0'+month_type;} console.log('month_type:'+month_type);

		var day_convert  = result.getDate();  //console.log(day_convert.toString().length);
		if(day_convert.toString().length==1){
			day_convert = '0'+day_convert;
		}

		var dd_convertt  =  day_convert+"-"+(month_type)+'-'+result.getFullYear(); console.log('dd_convertt:'+dd_convertt);

		return dd_convertt;

	}





}



function ShowDateDiff(Date1, Date2) {



    Date1 = Date1.replace(/-/g, "/");

    var date1 = new Date(Date1);



    Date2 = Date2.replace(/-/g, "/");

    var date2 = new Date(Date2);



    return date1.diff(date2);

}



function jsUcfirst(string)

{

    return string.charAt(0).toUpperCase() + string.slice(1);

}



function showPreview(objFileInput) {



		var file = objFileInput.files[0];

		var fileType = file["type"];

		var ValidImageTypes = ["image/jpeg", "image/png"];

		if ($.inArray(fileType, ValidImageTypes) < 0) {

			 toastr.error("Invalid image file", "Error", toastr_opts); return false;

		}



	    if (objFileInput.files[0]) {

			var fileReader = new FileReader();

			fileReader.onload = function (e) {

				$('#previewing').attr('src', e.target.result);

				//$("#previewing").css('opacity','0.7');

			};

			fileReader.readAsDataURL(objFileInput.files[0]);

			 $('#imgform').submit();

	    }

}



function IsValidJson(text){

	if (/^[\],:{}\s]*$/.test(text.toString().replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')))

	{

		return 1;

	}else{

	  return 0;

	}

}



function ShowLimitedChars(str,limit){

	var str_len =  str.length;

	if(str_len>limit){

		return str.substring(0,limit)+'..';

	}

	return str;

}







function GetFileSize(attachmentID)

{

    var fi = document.getElementById(attachmentID); // GET THE FILE INPUT.



    // VALIDATE OR CHECK IF ANY FILE IS SELECTED.

    if (fi.files.length > 0) {

        // RUN A LOOP TO CHECK EACH SELECTED FILE.

        for (var i = 0; i <= fi.files.length - 1; i++) {



            var fsize = fi.files.item(i).size;      // THE SIZE OF THE FILE.

            return Math.round((fsize / 1024));

        }

    }

}



function validateAttachmentExtensions(id,allowedExtensions,errMsg,emptyFieldID)

{

    var sFileName = id.val().split('\\').pop();



    if (sFileName.length > 0) {

        var blnValid = false;

        for (var j = 0; j < allowedExtensions.length; j++)

        {

            var sCurExtension = allowedExtensions[j];

            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase())

            {

                blnValid = true;

                break;

            }

        }



        if (!blnValid)

        {

            toastr.error(errMsg, "Error", toastr_opts);

            id.val("");



            if(emptyFieldID!='')

            {

                $(emptyFieldID).text("");

            }



            return false;

        }

    }



}



function DisableForm(FormID)
{
	$('#'+FormID).find('input').addClass('disabled').attr('disabled','disabled');
	$('#'+FormID).find('select').addClass('disabled').attr('disabled','disabled');
	$('#'+FormID).find('textarea').addClass('disabled').attr('disabled','disabled');
}

function EnableForm(FormID)
{
	$('#'+FormID).find('input').removeClass('disabled').removeAttr('disabled');
	$('#'+FormID).find('select').removeClass('disabled').removeAttr('disabled');
	$('#'+FormID).find('textarea').removeClass('disabled').removeAttr('disabled');
}





  function searchStringInArray (str, strArray) {

    for (var j=0; j<strArray.length; j++) {

        if (strArray[j].match(str)) return j;

    }

    return -1;

}



function confirm_alert_response(val,obj)

{

		if(val==0)

		{

			$(obj).attr('checked', false);

			confirm_alert_after(0);

		}

		else

		{

			confirm_alert_after(1);

		}

}



function confirm_archieve_mode(val,obj)

{

	var archive_mode_checked  = $(obj).attr('Archive-data');

	if(val==1)

	{

	  //console.log(archive_mode_checked);



	  var token 				= $(document).find('input[name=_token]').eq(0).val();

	  var ajax_url 				= baseurl + '/update_archive_mode';



		$.ajax({

			url: ajax_url,

			type: 'POST',

			dataType: 'json',

			data: {"_token": token,archive_mode_checked:archive_mode_checked},

			success: function (response) {

					window.location.href= baseurl+'/residentsummerylistview';

			}, error: function (ErrorResponse) {

				toastr.error(ErrorResponse.message, "Error", toastr_opts);

			}

		});

	}

	else

	{}

	return false;

}



function ReadMore(text){

	Showlength		     = 70;

	var return_read_text = '';

	if(text)

	{

		if(text.length>Showlength)

		{

			var SubStrText 	  = text.substring(0, Showlength);

			var FullText 	  =  "<span>"+text.replace(/,/g , "</span><span>")+"</span>";







			return '<div class="read_more"><span class="show_read_more">'+SubStrText+'...</span><br><a href="#" class="show_all_popup" >Show All</a><span class="hidden show_all_text">'+FullText+'</span></div> ';



		}

		else

		{

			return text;

		}

	}

	else

	{

		return text;

	}

}





function cleanArray(actual) {

  var newArray = [];

  for (var i = 0; i < actual.length; i++) {

    if (actual[i]) {

      newArray.push(actual[i]);

    }

  }

  return newArray;

}





// Restricts input for the given textbox to the given inputFilter.
// Restricts input for each element in the set of matched elements to the given inputFilter.
(function($) {
    $.fn.inputFilter = function(inputFilter) {
        return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
            if (inputFilter(this.value)) {
                this.oldValue = this.value;
                this.oldSelectionStart = this.selectionStart;
                this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
                this.value = this.oldValue;
                this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
            }
        });
    };
}(jQuery));


/* Restrict to get only numbers */
$(".positiveIntergersOnly").inputFilter(function(value) {
    return /^\d*$./.test(value);
});

/* Restrict to get only alphabets*/
$(".alphabetsOnly").inputFilter(function(value) {
    return /^[a-zA-Z_ ]*$/.test(value);
});
//for following requirements we can use different given regex.
//Integer (both positive and negative): /^-?\d*$/
//Integer (positive only): /^\d*$/
//Integer (positive and <= 500): /^\d*$/
//Floating point (use . or , as decimal separator): /^-?\d*[.,]?\d*$/
//Currency (at most two decimal places): /^-?\d*[.,]?\d{0,2}$/
//Hexadecimal: /^[0-9a-f]*$/i

/*Function to get day between two dates*/
function getDifferenceInDays(Date1, Date2) {
    var one_day = 1000*60*60*24;
    date1 = new Date(Date1);
    date2 = new Date(Date2);
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();
    var difference_ms = date2_ms - date1_ms;
    return Math.round(difference_ms/one_day)

}


$('.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g,'');
});






