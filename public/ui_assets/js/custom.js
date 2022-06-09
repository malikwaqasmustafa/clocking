/* Toastr Option */
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

/* Alert One Minute Interval */
$(document).ready(function () {
    window.setInterval(function () {
        if (!loginpage) {
            Getalerts(0);
        }
    }, 60000);
});

$(window).on('load', function () {
    Getalerts(0);
});

function Getalerts(ScreenView) {
    var ajax_url = baseurl + '/todolist/getalerts';
    $.ajax({
        url: ajax_url,
        type: 'POST',
        dataType: 'html',
        data: {"ScreenView": ScreenView},
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        },
        success: function (response) {
            $('.todoalerts').html(response);
            ShowUnreadMsgCounter();
        }, error: function (ErrorResponse) {
            if (ErrorResponse.readyState == 0 || ErrorResponse.status == 0) {
                return;
            }
            toastr.error(ErrorResponse.message, "Error", toastr_opts);
        }
    });
}

function setCookie(key, value, expiry) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function eraseCookie(key) {
    var keyValue = getCookie(key);
    setCookie(key, keyValue, '-1');
}

function ShowUnreadMsgCounter() {
    var todoListCounter = $('#global_pending_todolist').val();
    if(todoListCounter > 0) {
        $('.total_pending_todolist_counter').text(todoListCounter);
        $('.total_pending_todolist_counter').show();
    } else {
        $('.total_pending_todolist_counter').hide();
    }
    var oldNotification = $('.global_notification_counter_old').val();
    var NotficationUnread = $('#global_unread_msgs_notification').val();
    if (NotficationUnread > 0) {
        $('.total_unread_notification').text(NotficationUnread);
        $('.global_notification_counter_old').val(NotficationUnread);
    } else {
        $('.total_unread_notification').hide();
    }
    var FetchCookie = getCookie('CVNotification');
    if (FetchCookie) {
        if (parseInt(FetchCookie) < parseInt(NotficationUnread)) {
            var newAlertsDiff = parseInt(NotficationUnread) - parseInt(FetchCookie);
            $('.notificationBubble').addClass('show');
            $('.notificationBubble_Counter').text(newAlertsDiff);
        }
        eraseCookie('CVNotification');
        setCookie('CVNotification', NotficationUnread, '1');
    } else {
        if (parseInt(oldNotification) < parseInt(NotficationUnread)) {
            var newAlertsDiff = parseInt(NotficationUnread) - parseInt(oldNotification);
            $('.notificationBubble').addClass('show');
            $('.notificationBubble_Counter').text(newAlertsDiff);
        }
        setCookie('CVNotification', NotficationUnread, '1');
    }
    var global_unread_msgs = $('#global_unread_msgs').val();
    if (global_unread_msgs && !isNaN(global_unread_msgs)) {
        if (global_unread_msgs > 0) {
            $('.total_unread_messages').html(global_unread_msgs);
            $('.total_unread_messages').show();
        } else {
            $('.total_unread_messages').hide();
        }
    }
}

    function ConfirmFromUser(text, BackFunc, obj_id) {
        $('#YesNoModal').find('.confirm_text').html(text);
        if (obj_id) {
            $('#YesNoModal').find('.confirm_yes').attr("onclick", "javascript:" + BackFunc + '(1,' + obj_id + ');');
            $('#YesNoModal').find('.confirm_no').attr("onclick", "javascript:" + BackFunc + '(0,' + obj_id + ');');
        } else {
            $('#YesNoModal').find('.confirm_yes').attr("onclick", "javascript:" + BackFunc + '(1);');
            $('#YesNoModal').find('.confirm_no').attr("onclick", "javascript:" + BackFunc + '(0);');
        }
        $('#YesNoModal').find('.confirm_no').attr('yesnocheck', 1);
        $('#YesNoModal').addClass('show');
    }

function FormatDate(date, Format) {
    if (Format == "d-m-Y") {
        var jsDate = date.split("-");
        return jsDate[2] + "-" + jsDate[1] + '-' + jsDate[0];
    }
}

function DisableForm(FormID) {
    $('#' + FormID).find('input').addClass('disabled').attr('disabled', 'disabled');
    $('#' + FormID).find('select').addClass('disabled').attr('disabled', 'disabled');
    $('#' + FormID).find('textarea').addClass('disabled').attr('disabled', 'disabled');
}

function GetFileSize(attachmentID) {
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
