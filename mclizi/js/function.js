function blackboardToggle(bull) {
	if (bull == true) {
		$(".blackboard").css({'pointer-events': 'all','opacity': '1'})
	} else {
		$(".blackboard").css({'pointer-events': 'none','opacity': '0'})
	}
}

function slide_left(nth, animation) {
	var move;
	if (animation == false) {
		$(".slide_left").css("transition", "0ms");
	} else {
		$(".slide_left").css("transition", "300ms");
	}
	if (nth == 0) move = 0;
	if (nth == 1) move = -701;
	if (nth == 2) move = -1403;
	$(".slide_left").css({"transform": "translate(" + move + "px,0)"})

	$(SCGWs[nth]).css({'background-color': "#fff","border-bottom": "solid 1px transparent", "z-index": 2, "color": "#000000","top": "0px"});
}


function copyHandle(content) { // 指令复制
	let copy = (e) => {
		e.preventDefault()
		e.clipboardData.setData('text/plain', content)
		// alert('成功复制：' + content)
		document.removeEventListener('copy', copy)
	}
	document.addEventListener('copy', copy)
	document.execCommand("Copy");
	Messagebox(content);

	$(".output_destination").css({"background-image": "url('img/copy_background1.png')"})
}

function particle_color_board_toggle(bull) {
	if (bull == true) {
		$(".particle_color_board").css({
			"pointer-events": "all",
			"opacity": "1",
			"transform": "scale(1)"
		})
	} else {
		$(".particle_color_board").css({
			"pointer-events": "none",
			"opacity": "0",
			"transform": "scale(0.9)"
		})
	}
}

function Messagebox(content, type) {
	if (type === undefined) {
		$("#copyText").html("成功复制："+content);
		$(".Messagebox").css({"background-color": "#55aa00"})
	} else if (type == "alert") {
		$("#copyText").text(content);
		$(".Messagebox").css({"background-color": "#ff9d26"})
	}
		
	$(".Messagebox").css({
		"pointer-events": "all",
		"opacity": "1",
		"transform": "translate(0, 0%)"
	})
	setTimeout(() => {
		$(".Messagebox").css({
			"pointer-events": "none",
			"opacity": "0",
			"transform": "translate(0, -100%)"
		})
	}, 1000)
}

function output_cmd(command) {
	// 清空 --> 填充指令 --> css改变
	$(".output_destination").html("").append(command).css({"background-image": "url('img/copy_background.png')"});

	$(".output_destination").css({
		"transition": "0ms",
		"transform": "translate(-50%,0%)",
		"opacity": 0
	})
	setTimeout(() => {
		$(".output_destination").css({
			"transition": "300ms",
			"transform": "translate(2%,0%)",
			"opacity": 1
		})
	},2)
	setTimeout(() => {
		$(".output_destination").css({
			"transform": "translate(0%,0%)"
		})
	},300)
}

function cpt_animation(V, bull){
	if (V == "parameter") {
		if (bull == true) {
			$("#parameter_cpt").css({"opacity": "1", "transform": "translateX(0px)", "pointer-events": "all"});
			$("#parameter_cpt_box").css("background-image", "url('img/btn_check1.png')");
			$("#parameter_row_status").text("开");
		} else {
			$("#parameter_cpt").css({"opacity": "0", "transform": "translateX(-50px)", "pointer-events": "none"});
			$("#parameter_cpt_box").css("background-image", "url('img/btn_check0.png')");
			$("#parameter_row_status").text("关");
		}
	} 
	if (V == "polarparameter") {
		if (bull == true) {
			$("#polarparameter_cpt").css({"opacity": "1", "transform": "translateX(0px)", "pointer-events": "all"});
			$("#polarparameter_cpt_box").css("background-image", "url('img/btn_check1.png')");
			$("#polarparameter_row_status").text("开");
		} else {
			$("#polarparameter_cpt").css({"opacity": "0", "transform": "translateX(-50px)", "pointer-events": "none"});
			$("#polarparameter_cpt_box").css("background-image", "url('img/btn_check0.png')");
			$("#polarparameter_row_status").text("关");
		}
	}
	
}
// 表达式选择面板 定位
function speed_hideExpression_and_hideExpression_pos(n) {
	$(".hideExpression").css({"margin-top": n+"px"})
}

function setBox(bull){
	if (bull == true) {
		$(".setBox").css({"left": "0%"})
		 blackboardToggle(bull)
	} else {
		$(".setBox").css({"left": "-100%"})
		blackboardToggle(bull)
	}
}
let Level_1_Tmep = 0;
function Level_1(i) {
	let move;
	Level_1_Tmep < i? move = -1:move = 1;
	Level_1_Tmep = i;
	for(let j = 0;j <= chunks.length;j ++) {
		$(NavigationBar[j]).css({"background-color": "rgba(0, 0, 0, 0.05)","color": "#333"});
		$(chunks[j]).css({"transition": "300ms","opacity": "0","pointer-events": "none","transform": "translateX("+ move*480 +"px)","z-index": "-1"});
	}
	$(NavigationBar[i]).css({"background-color": "#fff","color": "#519ef7"});
	$(chunks[i]).css({"transition": "300ms","opacity": "1","pointer-events": "all","transform": "translateX("+ move*0 +"px)","z-index": "1"});
}

function Level_2(i) {
	for(let j = 0;j <= chunksResourceBoxs.length;j ++){
		$(chunksResourceBoxs[j]).css({"transition": "0ms","opacity": "0","pointer-events": "none","transform": "translateX("+ 20 +"px)","z-index": "-1"});
		$(listUls[j]).css({"background-color": "transparent", "color": "#333"})
	}
	$(listUls[i]).css({"background-color": "#e6e6e6", "color": "#0b91fe"})
	$(chunksResourceBoxs[i]).css({"transition": "200ms","opacity": "1","pointer-events": "all","transform": "translateX(0px)","z-index": "1"});
}


function TWay() {  // 指令生成器> colorBlock 1.16.5版 > 模式 ——事件
	localStorage.TWay = $("#way").find("option:selected").val();  // 找到列表中选择的目标value
	if (localStorage.TWay  == "normal") {
		for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
		$(wayTable[0]).show()
	}
	if (localStorage.TWay  == "parameter") {
		for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
	$(wayTable[1]).show()
	}
	if (localStorage.TWay  == "polarparameter") {
		for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
	$(wayTable[2]).show()
	}
	if (localStorage.TWay  == "conditional") {
		for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
	$(wayTable[3]).show()
	}
	if (localStorage.TWay  == "image") {
		for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
	$(wayTable[4]).show()
	}
}