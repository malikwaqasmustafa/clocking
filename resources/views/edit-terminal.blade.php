@extends('layouts.app_design')
@section('content')
    <section class="contentHeader">

    </section>
    <section class="contentBody">
        <div class="scrollArea">
            <div class="content">
                <div class="row">
                    <div class="col-md-12 col-lg-12">
                        Add New Terminal
                        <hr>
                        <form id="inBodyForm" class="inBodyForm form-horizontal">
                            <input type="hidden" name="id" value="{{$settings->id}}">
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="device_ip">Device Ip</label>
                                <div class="col-md-2">
                                    <input type="text" name="device_ip" class="form-control" id="device_ip" value="{{$settings->device_ip}}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="device_ip">Device Port</label>
                                <div class="col-md-2">
                                    <input type="text" name="device_port" value="4370" class="form-control disabled" id="device_ip" disabled>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-4 control-label" for="device_model">Device Model</label>
                                <div class="col-md-2">
                                    <input type="text" name="device_model" value="{{$settings->device_model}}" class="form-control" id="device_model">
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
                <button type="button" id="saveform" class="saveformbtn save">Update</button>
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
                var ajax_url = "{{ route('terminal.update') }}";
                $.ajax({
                    url: ajax_url,
                    type: 'POST',
                    dataType: 'json',
                    async: false,
                    cache: false,
                    contentType: false,
                    processData: false,
                    data: formData,
                    success: function (response) {
                        $('.btn').removeAttr('disabled');
                        if (response.status == 'success') {
                            ShowToastr("success", response.message);
                            window.location.href = '<?php echo route('home'); ?>';
                        } else {
                            toastr.error(response.message, "Error", toastr_opts);
                        }
                    }, error: function (reject) {
                        if( reject.status === 422 ) {
                            var errors = $.parseJSON(reject.responseText);
                            toastr.error(errors.message, "Error", toastr_opts);
                        }
                    }
                });
                return false;
            });
        });
    </script>
@endsection
