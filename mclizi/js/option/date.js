let date = new Date();
let hour = date.getHours();
if (hour >= 6 && hour <= 8) {
    $(".Welcome h2").text("中午好");
} else if (hour >= 9 && hour <= 11) {
    $(".Welcome h2").text("上午好");
} else if (hour == 12) {
    $(".Welcome h2").text("中午好");
} else if (hour >= 13 && hour <= 18) {
    $(".Welcome h2").text("下午好");
} else if (hour >= 19 && hour <= 24) {
    $(".Welcome h2").text("晚上好");
} else {
    $(".Welcome h2").text("好好休息,安好一整夜");
}

setTimeout(() => {
    $(".Welcome").css({"transform": "translateY(0%)", "opacity": "1"});
    setTimeout(() => {
        $(".Welcome").css({"transform": "translateY(-120%)", "opacity": "0"});
    }, 2000);
}, 300);