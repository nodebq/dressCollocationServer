$(document).ready(function () {

//拖动逻辑
//getOffsetSum 获取相对与document的偏移量
    function getOffsetSum(ele) {
        var top = 0, left = 0;
        while (ele) {
            top += ele.offsetTop;
            left += ele.offsetLeft;
            ele = ele.offsetParent;
        }
        /*  alert(left+" : "+top);*/
        return {top: top, left: left}
    }

//var mainDiv=document.getElementById("main");
    var mainDiv = document.getElementsByClassName("png");
//console.log(mainDiv);
    for (var i = 0; i < mainDiv.length; i++) {
        mainDiv[i].addEventListener("touchmove", touch, false);
    }
    function touch(e) {
        e.target.style.position = "absolute";
        switch (e.type) {
            case "touchmove":

                var ele = getOffsetSum(e.target);
                var left = ele.left;
                var top = ele.top;

                var x = (e.touches[0].clientX - left) / 2;
                var y = (e.touches[0].clientY - top) / 2;
                e.preventDefault();
// alert(e.target.id);
                e.target.style.marginLeft = x + "px";
                e.target.style.marginTop = y + "px";

            /* $(e.target).css("left","50px");
             $(e.target).css("top","50px");*/
        }
    }


    //模态框列表逻辑
    $(".clothClick").click(function () {
        var id = $(this).attr('type');
        // console.log(id);
        // $(".modal-body").text(id);
        $.get("http://127.0.0.1:7516/list",
            {
                type: id,
                size: 0,
                lastOne: 0
            }, function (data) {
                //console.log('200');
                data = JSON.parse(data);
                //console.log(data.data);
                if (data.data.length) {
                    var string1 = '<img src="';
                    var string2 = '" class="col-xs-4 img-thumbnail change" flag="' + id + '" alt="Responsive image" id="';
                    var string3 = '">';
                    var string = '';
                    for (var i = 0; i < data.data.length; i++) {
                        string = string + string1 + data.data[i].url + string2 + i + string3;
                    }
                    $(".modal-body>.row").html(string);


                    //点击替换逻辑
                    $(".change").click(function () {
                        var flag = $(this).attr('flag');
                        var i = $(this).attr('id');
                        //alert(flag);
                        var type = '';
                        switch (flag) {
                            case '1':
                                type = 'hat';
                                break;
                            case '2':
                                type = 'shirt';
                                break;
                            case '3':
                                type = 'coat';
                                break;
                            case '4':
                                type = 'trousers';
                                break;
                            case '5':
                                type = 'shoes';
                                break;
                            case '6':
                                type = 'bags';
                                break;
                            case '7':
                                type = 'ornaments1';
                                break;
                            case '8':
                                type = 'ornaments2';
                                break;
                            case '9':
                                type = 'ornaments3';
                                break;
                        }
                        var src = $(this).attr("src");
                        var type0 = "." + type;
                        //console.log(1);
                        //console.log('<img src="' + src + '" alt="' + type + '" class="' + type + ' png">');
                        $(type0).html('<img src="' + src + '" alt="' + type + '" class="' + type + ' png ">');
                        //alert('666');
                        $('#myModal').modal('hide');
                        //重新添加拖动
                        //$(type0+">img").addEventListener("touchmove", touch, false);
                        // $(type0+">img").bind("touchmove",touch(event));
                        // function touch(e) {
                        //     e.target.style.position = "absolute";
                        //     switch (e.type) {
                        //         case "touchmove":
                        //
                        //             var ele = getOffsetSum(e.target);
                        //             var left = ele.left;
                        //             var top = ele.top;
                        //
                        //             var x = (e.touches[0].clientX - left) / 2;
                        //             var y = (e.touches[0].clientY - top) / 2;
                        //             e.preventDefault();
                        //             // alert(e.target.id);
                        //             e.target.style.marginLeft = x + "px";
                        //             e.target.style.marginTop = y + "px";
                        //
                        //         /* $(e.target).css("left","50px");
                        //          $(e.target).css("top","50px");*/
                        //     }
                        // }
                        // function getOffsetSum(ele) {
                        //     var top = 0, left = 0;
                        //     while (ele) {
                        //         top += ele.offsetTop;
                        //         left += ele.offsetLeft;
                        //         ele = ele.offsetParent;
                        //     }
                        //     /*  alert(left+" : "+top);*/
                        //     return {top: top, left: left}
                        // }
                        //拖动逻辑
//getOffsetSum 获取相对与document的偏移量
                        function getOffsetSum(ele) {
                            var top = 0, left = 0;
                            while (ele) {
                                top += ele.offsetTop;
                                left += ele.offsetLeft;
                                ele = ele.offsetParent;
                            }
                            /*  alert(left+" : "+top);*/
                            return {top: top, left: left}
                        }

//var mainDiv=document.getElementById("main");
                        var mainDiv = document.getElementsByClassName("png");
//console.log(mainDiv);
                        for (var j = 0; j < mainDiv.length; j++) {
                            mainDiv[j].addEventListener("touchmove", touch, false);
                        }
                        function touch(e) {
                            e.target.style.position = "absolute";
                            switch (e.type) {
                                case "touchmove":

                                    var ele = getOffsetSum(e.target);
                                    var left = ele.left;
                                    var top = ele.top;

                                    var x = (e.touches[0].clientX - left) / 2;
                                    var y = (e.touches[0].clientY - top) / 2;
                                    e.preventDefault();
// alert(e.target.id);
                                    e.target.style.marginLeft = x + "px";
                                    e.target.style.marginTop = y + "px";

                                /* $(e.target).css("left","50px");
                                 $(e.target).css("top","50px");*/
                            }
                        }




                    });


                } else {
                    $(".modal-body>.row").html("<p>这里啥都没有,快去</p><a href='http://127.0.0.1:7516/upload'>上传</a>");
                }


            })

    });

    // function getWH() {
    //     var wi = window.screen.width;
    //     var hi = window.screen.height;
    //     document.getElementById("testDiv").style.width = wi - 4 + "px";
    //     document.getElementById("testDiv").style.height = hi - 80 + "px";
    // }
    //
    // window.onload = getWH();

});


//上传逻辑
function doUpload() {
    //var formData = new FormData();
    //console.log(formData);
    //console.log($( "#uploadForm" )[0]);
    //var oOutput = document.getElementById("uploadForm");
    var oData = new FormData(document.forms.namedItem("uploadForm"));
    //formData.append('type',$("#type").val());
    //formData.append("inputFile", fileInputElement.files[0]);
    //console.log($("#type").val());
    $.ajax({
        url: 'http://127.0.0.1:7516/file/uploading',
        type: 'POST',
        data: oData,
        async: false,
        cache: false,
        contentType: false,
        processData: false,
        success: function (returnData) {
            alert(returnData);
        },
        error: function (returnData) {
            alert(returnData);
        }
    });
}


