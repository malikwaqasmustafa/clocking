var imageWidth = '';
var imageHeight = '';
var canWidth = '';
var canheight = '';
var imageType = "";
var imageSize = "";
var image;
var cropper;

//make a backup of already uploaded image
var imgpreview = $("#previewing").attr("src");
$("#old_image").val(imgpreview);

var options = {
    aspectRatio: 1 / 1,
    preview: '#previewing',
    resizable: false,
    zoomable: true,
    rotatable: true,
    scalable: true,
    toggleDragModeOnDblclick:true,
    //multiple: true,
    //modal:true,
    //responsive:true,
    minContainerWidth: canWidth,
    minContainerHeight: canheight,
    /*minCan
    vasWidth: canWidth,
    minCanvasHeight: canheight,*/
    minCropBoxWidth:20,
    minCropBoxHeight:20,
    ready() {
        var result = cropper.getCroppedCanvas();
        //("image/jpeg",0.9")
        var imgSrc = result.toDataURL(imageType,"0.9");
        $('#previewing').attr('src', imgSrc);
        $('#employee_image').attr('src', imgSrc);
        $(".employeeImage").val(imgSrc);
    },
    crop(event) {
        var result = cropper.getCroppedCanvas();
        var imgSrc = result.toDataURL(imageType,"0.9");
        $('#previewing').attr('src', imgSrc);
        $(".employeeImage").val(imgSrc);
        $('#employee_image').attr('src', imgSrc);
        // console.log(event.detail.x);
        // console.log(event.detail.y);
        // console.log(event.detail.width);
        // console.log(event.detail.height);
        // console.log(event.detail.rotate);
        // console.log(event.detail.scaleX);
        // console.log(event.detail.scaleY);
    }
};

function loadCroper(width, height) {
    image = document.getElementById('crop_image');

    //if image is square
    if (width == height) {
        canWidth = 570;
        canheight = 570;
    }
    //if image is landscape
    if (width > height) {
        canWidth = 570;
        canheight = 570 * height / width;
    }
    //if image is portrait
    if (height > width) {
        canWidth = 570;
        canheight = 570 * height / width;
    }
    options.minContainerWidth = canWidth;
    options.minContainerHeight = canheight;
    originalData = {};
    cropper = new Cropper(image, options);
}


$('.ShowImageCrop').on('show.bs.modal', function (e) {
    //
});

$(".cropitnow").click(function (e) {

    var uID = $("#isUserIDFound").val();
    if (uID > 0) {
        $('#imgform').submit();
    }

    var result = cropper.getCroppedCanvas();
    var imgSrc = result.toDataURL();
    $('#previewing').attr('src', imgSrc);
    $(".employeeImage").val(imgSrc);

    $(".ShowImageCrop").modal('toggle');
});

function showPreviewOfCrop() {
    //var result = cropper['getCroppedCanvas'](4096, 4096);
    var result = cropper.getCroppedCanvas();
    var imgSrc = result.toDataURL();
    $('#previewing').attr('src', imgSrc);
    $("#old_image").val(imgSrc);
}

//cancel crop
$(".cancelPreview").click(function (e) {
    /*for staff dashbaord*/
    var uID = $("#isUserIDFound").val();
    if (uID > 0) {
        $('#employee_image').attr('src', $("#alreadyAddedImage").val());
        $('.employeeImage').val($("#alreadyAddedImage").val());
    }
    /*for resident dashboard*/
    var old_image = $("#old_image").val();
    $('#previewing').attr('src', old_image);
    $("#employeeImage").val("");
});

function readURL(input) {
    if (input.files && input.files[0]) {
        imageSize = input.files[0].size;
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#previewing').attr('src', e.target.result);
            $(".featured_image").html('<img id="crop_image" src="' + e.target.result + '" alt="" />');
            $(".employeeImage").val(e.target.result);
            var i = new Image();
            i.onload = function () {
                imageWidth = i.width;
                imageHeight = i.height;
                if(imageSize < 8000000) { //8M
                    showImageCropping(imageWidth, imageHeight);
                } else {
                    toastr.error("Max size limit exceeded, please choose an image less then 8 MB", "Error", toastr_opts);
                }
                //alert( i.width+", "+i.height );
            };
            i.src = e.target.result;
            //$('#crop_image').attr('src', e.target.result);
            //showImageCropping(i.width, i.height);
        }
        reader.readAsDataURL(input.files[0]);
        imageType = input.files[0].type;

        console.log(imageSize);
    }
}

function showImageCropping(width, height) {
    $(".ShowImageCrop").modal('show');//show modal
    loadCroper(width, height);
}


$(".rotateImage").click(function () {
    rotateImg($(this).data("option"));
    // cropper.rotate(90);
});

$(".moveImg").click(function () {
    var directionToMove = $(this).data("option");

    if(directionToMove=="left") {
        cropper.move(-5, 0);
    }
    if(directionToMove=="right") {
        cropper.move(5, 0);
    }
    if(directionToMove=="up") {
        cropper.move(0, 5);
    }
    if(directionToMove=="down") {
        cropper.move(0, -5);
    }
});




function rotateImg(rotate) {
    /* var img = $image.cropper('getImageData'); */

    var old_cbox = cropper.getCropBoxData();
    var new_cbox = cropper.getCropBoxData();
    var old_canv = cropper.getCanvasData();
    var old_cont = cropper.getContainerData();

    cropper.rotate(rotate);

    var new_canv = cropper.getCanvasData();

    //calculate new height and width based on the container dimensions
    var heightOld = new_canv.height;
    var widthOld = new_canv.width;
    var heightNew = old_cont.height;
    var racio = heightNew / heightOld;
    var widthNew = new_canv.width * racio;
    new_canv.height = Math.round(heightNew);
    new_canv.width = Math.round(widthNew);
    new_canv.top = 0;

    if (new_canv.width >= old_cont.width) {
        new_canv.left = 0;
    } else {
        new_canv.left = Math.round((old_cont.width - new_canv.width) / 2);
    }

    cropper.setCanvasData(new_canv);
    if (rotate == 90) {
        new_cbox.height  = racio * old_cbox.width;
        new_cbox.width   = racio * old_cbox.height;

        new_cbox.top     = new_canv.top + racio * (old_cbox.left - old_canv.left);
        new_cbox.left    = new_canv.left + racio * (old_canv.height - old_cbox.height - old_cbox.top);
    }

    new_cbox.width  = Math.round(new_cbox.width);
    new_cbox.height = Math.round(new_cbox.height);
    new_cbox.top    = Math.round(new_cbox.top);
    new_cbox.left   = Math.round(new_cbox.left);
    //cropper.setCropBoxData(new_cbox);
}