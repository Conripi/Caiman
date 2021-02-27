$(".twitter").on("click", function () {
    location.href = 'https://twitter.com/Conripi1230';
})

$(".kyoushin").on("click", function () {
    location.href = 'https://www.bosai.go.jp/';
})

$(".youtube").on("click", function () {
    location.href = 'https://www.youtube.com/channel/UCPL3kFog2fXKp0l8LOg8pMw';
})

$.getJSON("https://conripi.github.io/Caiman/material/update.json", function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        $(".update").append("<div class='update_child'>");
        $(".update_child").append(`<p class='update_time'>${item.time}</p>`)
        $(".update_child").append("<div style='margin-left: 30px;' class='indent'>");
        $(".indent").append(`<p class="version" style="margin-bottom: 0px;">バージョン: ${item.version}</p>`);
        $(".indent").append(`<p class="message" style="margin-bottom: 0px;margin-left: 60px;">内容: ${item.msg}</p>`);
    }
})