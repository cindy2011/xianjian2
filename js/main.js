var curNum = 0;
var total = 0;
var curAns = "";
var dataList = [];

function getTitle(dataList, curNum) {
    console.log(dataList, curNum);
    // dataList.forEach(function(el, index) {
    //     if (el.num == curNum) {
    //         $("#index2Title").html(el.title);
    //         $("#index2Title").attr("data-class", el.answer);
    //     }
    // });
    for (var i = 0; i < dataList.length; i++) {
        var el=dataList[i];        
        if (el.num == curNum) {
            $("#index2Title").html(el.title);
            $("#index2Title").attr("data-class", el.answer);
        }
    }
}
$.get('data.json', function(data) {
    curNum = $("#index2Title").attr("data-num");
    dataList = eval(data);
    getTitle(dataList, curNum);
});

$(".tipslayout").on('touchstart', function() {
    $(".layout").hide();
    $(".index2Titlebg").show();
});
$(".share").on('touchstart', function() {
    $(".sharebg").hide();
    $(".sharelayout,.tips2").show();
});

function geta(id) {
    curNum++;
    console.log("外层：" + curNum);
    var getAn = $("#index2Title").attr("data-class");
    if ("btn" + id == getAn) {
        total += 1;
    }
    getTitle(dataList, curNum);
    if (curNum > 10) {
        $(".sharebg").find("i").html(17-total);
        $(".sharelayout,.sharebg").show();
    }
}