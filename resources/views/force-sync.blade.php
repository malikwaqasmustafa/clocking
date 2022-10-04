@extends('layouts.app_design')
@section('content')
    <section class="contentHeader">

    </section>
    @include('loader')
    <section class="contentBody">
        <div class="scrollArea">
            <div class="content">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        Add New Terminal
                        <hr>
                        <form id="inBodyForm" class="inBodyForm form-horizontal">
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="force_sync_date_selector">Force Resync From</label>
                                <div class="col-md-2">
                                    <input type="date" name="force_sync_date" value="" class="form-control" id="force_sync_date_selector">
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-md-4 control-label" for="force_sync_date_selector">Machine</label>
                                <div class="col-md-2">
                                    <select name="machine" id="machine">
                                        @foreach($settings as $setting)
                                            <option value="{{$setting->id}}">{{ $setting->serial_number . "({$setting->device_ip})" }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            {{ csrf_field() }}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="contentFooter">
        <div class="row">
            <div class="col-md-6">
                <button class="cancelbtn" href="{{ url()->previous() }}" type="button">Back</button>
                <button type="button" id="saveform" class="saveformbtn save">Save</button>
            </div>
        </div>
    </section>
    <script type="text/javascript">
        $(document).ready(function ($) {

            $("#saveform").click(function (ev) {
                ev.preventDefault();
                ev.stopImmediatePropagation();
                $('#inBodyForm').submit();
            });

            $(document).on('change', '#startDate', function (e) {
                var StartDate = $(this).val();
                var ParseDate = FormatDate(StartDate, DateFormat);
                var StartDarParse = new Date(ParseDate);
                $('.startdateday').html(days[StartDarParse.getDay()]);
                var EndDate = AddDaysToDate(ParseDate, parseInt(CycleDays) - 1, DateFormat);
                $('#endDatedummy').val(EndDate);
            });

            $(document).on('submit', '#inBodyForm', function (e) {
                e.stopImmediatePropagation();
                e.preventDefault();
                $('.btn').attr('disabled', 'disabled');
                var formData = new FormData($(this)[0]);
                var ajax_url = "{{ route('terminal.force.sync') }}";
                $.ajax({
                    url: ajax_url,
                    type: 'POST',
                    dataType: 'json',
                    async: true,
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: formData,
                    beforeSend: function() {
                        $(".preloader").css("display","block");
                    },
                    success: function (response) {
                        $('.btn').removeAttr('disabled');
                        if (typeof(response.status) != "undefined" && response.status !== null) {
                            if(response.status !== "failed"){
                                ShowToastr("success", response.message);
                                window.location.href = '<?php echo route('home'); ?>';
                            }else{
                                toastr.error(response.message, "Error", toastr_opts);
                            }
                        } else {
                            toastr.error(response.message, "Error", toastr_opts);
                        }
                        $(".preloader").css("display","none");
                    },
                    error: function (reject) {
                        if( reject.status === 422 ) {
                            var errors = $.parseJSON(reject.responseText);
                            toastr.error(errors.message, "Error", toastr_opts);
                        }
                        $(".preloader").css("display","none");
                    },complete: function() {
                        $(".preloader").css("display","none");
                    }
                });
                return false;
            });
        });
    </script>
@endsection
