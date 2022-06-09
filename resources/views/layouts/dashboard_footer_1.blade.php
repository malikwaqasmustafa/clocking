<script src="{{ asset('mix_media/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('mix_media/js/jquery.scrollbar.min.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
<script src="{{ asset('mix_media/js/bootstrap-timepicker.js') }} "></script>
<script src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
<script src="https://cdn.jsdelivr.net/npm/autosize@4.0.0/dist/autosize.min.js"></script>
<script src="{{ asset('mix_media/js/DateDiff.js')}}"></script>
<script src="{{ asset('mix_media/js/toastr.js') }}"></script>
<script src="{{ asset('mix_media/js/jquery.dataTables.full.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.5/js/select2.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/malsup/blockui@2.70/jquery.blockUI.js"></script>
<script src="{{ asset('mix_media/js/bootstrap-datetimepicker.min.js') }}"></script>
<script src="{{ asset('mix_media/js/utils.js') }}"></script>
<script src="{{ asset('mix_media/js/custom.js') }}?v={{strtotime(date('Y-m-d'))}}"></script>
<script src="{{ asset('mix_media/js/CheckIE.js') }}?v={{strtotime(date('Y-m-d'))}}"></script>
<script src="{{ asset('mix_media/js/tinymce/tinymce.min.js') }}"></script>
<script src="{{ asset('mix_media/js/scrollbar.js') }}"></script>

<div class="hidden lastdiv">
    <form class="form" target="_blank" method="post" id="form_print">
        <input type="hidden" name="selected_rows" id="selected_rows" value="">
        <input type="hidden" name="selected_filter_print" id="selected_filter_print" value="">
        <input type="hidden" name="print_data_type" id="print_data_type" value="selected">
        <!--all or selected -->
        {{ csrf_field() }}
    </form>
</div>
</body>
</html>
