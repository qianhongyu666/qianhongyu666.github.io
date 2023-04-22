setTimeout(() => {  // 导航栏自动剧中排版
    typessetting()
    // alert(btnWidth);
},0)

window.addEventListener("resize",function(){
    typessetting()
})

function typessetting() {
    let NavigationBar_Btns = $(".Navigation-bar button");

    let btnWidth = $(".Navigation-bar button").css("width");

    let pageWidth = document.body.clientWidth;

    btnWidth = parseInt(btnWidth.replace("px",""));

    $(".Navigation-bar").css("padding-left", pageWidth / 2 - (btnWidth*NavigationBar_Btns.length)/2 + "px");
}

