// 《一级》导航栏切换-布局事件
var NavigationBar = $(".Navigation-bar button");
var chunks = $("*#chunks");
localStorage.NavigationBarTemp;
for(let i = 0;i <=NavigationBar.length;i ++) {
	$(NavigationBar[i]).click(()=>{
		console.log(i);
		Level_1(i);
		localStorage.NavigationBarTemp = i;
	})
}
// 《一级》导航栏-布局初始化
Level_1(localStorage.NavigationBarTemp);
if (localStorage.NavigationBarTemp == null) Level_1(0);


// 《二级》导航栏-子分支切换导航栏 of resource
var listUls = $(".listUl li");
var chunksResourceBoxs = $("*.chunks-resource-box");
localStorage.NavigationBar_listUlsTmep;
for(let i = 0;i <=listUls.length;i ++) {
	$(listUls[i]).click(()=>{
		console.log(i);
		Level_2(i);
		
		localStorage.NavigationBar_listUlsTmep = i;
	})
}
// 《二级》导航栏-子分支切换导航栏-布局初始化
Level_2(localStorage.NavigationBar_listUlsTmep);
if (localStorage.NavigationBar_listUlsTmep == null) Level_2(0);

// 《二级》导航栏-子分支切换导航栏-按钮复制功能
document.addEventListener('click', (e) => {
	copyed = [];
	/*
	e.target.innerHTML  //获取元素
	e.target.innerText  //获取文本
	e.target.nodeName  //获取标签名
	*/
	if(e.target.id == "Copy_to_value")
	{
		copyHandle(e.target.value);
	}
	
})
document.addEventListener('click', (e) => {
	if(e.target.className == "copyValue")
	{
		copyHandle(e.target.id);
	}
})


// 关闭与隐藏 疑问解答提示
var doubt_v = 0
$(".doubt").click(() => {
	if (doubt_v == 0) {
		doubt_v = 1
		$(".doubt_box").css({
			"transform": "scaleY(1)",
			"opacity": "1"
		})
		blackboardToggle(true);
	} else {
		doubt_v = 0
		$(".doubt_box").css({
			"transform": "scaleY(.5)",
			"opacity": "0"
		})
	}
});

$(".blackboard").click(() => {
	blackboardToggle(false);
	doubt_v = 0
	$(".doubt_box").css({
		"transform": "scaleY(.5)",
		"opacity": "0"
	})
})

// .swith_cmd_Generator_way 切换指令生成方式
localStorage.change;  // 永久切换存储变量
var SCGWs = $(".swith_cmd_Generator_way");
for (let i = 0; i <= SCGWs.length; i++) {
	$(SCGWs[i]).click(() => {
		for (j = 0;j <= SCGWs.length;j ++) {
			$(SCGWs[j]).css({'background-color': "#f0f0f0","border-bottom": "solid 1px #dddddd", "z-index": 0, "color": "#7f7f7f","top": "3px"})
		}
		slide_left(i)
		$(SCGWs[i]).css({'background-color': "#fff","border-bottom": "solid 1px transparent" , "z-index": 2, "color": "#000000","top": "0px"})
		localStorage.change = i
	})
}
slide_left(localStorage.change, false)
if (localStorage.change == null) {
	slide_left(0);
}

// axis input text 聚/失焦清空文字事件
var axis = $(".axis");
for(let i = 0;i <= axis.length;i ++) {
	var temp_value
	$(axis[i]).focus(() => {
		temp_value = $(axis[i]).val();
		$(axis[i]).attr("value","");
	});
	$(axis[i]).blur(() => {
		$(axis[i]).attr("value", temp_value);
	});
}
// expression input text 聚/失焦清空文字事件
let expression = $(".expression");
let expression_id;
for(let i = 0;i <= expression.length;i ++) {
	var temp_value
	$(expression[i]).focus(() => {
		temp_value = $(expression[i]).val();
		$(expression[i]).attr("value","");
	});
	$(expression[i]).blur(() => {
		$(expression[i]).attr("value", temp_value);
	});

	// expression 聚/失焦显示提示板 事件
	// 聚焦 显示
	$(expression[i]).focus(() => {
		expression_id = $(expression[i] ).attr("id")
		console.log(expression_id)
		$(hideExpression[i]).css({"transform": "scale(1)","z-index": "10","transition": "0ms","opacity": "1"})

		speed_hideExpression_and_hideExpression_pos(0);
	})
	// 失焦 隐藏
	$(expression[i]).blur(() => {
		setTimeout(() => {
			$(hideExpression[i]).css({"transform": "scale(.9)","z-index": "-1","transition": "200ms","opacity": "0"})
		}, 50);
	})
}


// speed_expression input text 聚/失焦清空文字事件
let speed_expression = $(".speed_expression");
let speed_expression_id;
for(let i = 0;i <= speed_expression.length;i ++) {
	var temp_value
	$(speed_expression[i]).focus(() => {
		temp_value = $(speed_expression[i]).val();
		$(speed_expression[i]).attr("value","");
	});
	$(speed_expression[i]).blur(() => {
		$(speed_expression[i]).attr("value", temp_value);
	});

	// speed_expression 聚/失焦显示提示板 事件
	// 聚焦 显示
	$(speed_expression[i]).focus(() => {
		speed_expression_id = $(speed_expression[i] ).attr("id")
		console.log(speed_expression_id)
		$(speed_hideExpression[i]).css({"transform": "scale(1)","z-index": "10","transition": "0ms","opacity": "1"})

		speed_hideExpression_and_hideExpression_pos(-300);
	})
	// 失焦 隐藏
	$(speed_expression[i]).blur(() => {
		setTimeout(() => {
			$(speed_hideExpression[i]).css({"transform": "scale(.9)","z-index": "-1","transition": "200ms","opacity": "0"})
		}, 100);
	})
}
//cpts 清空文字事件
let cpts = $("*.cpt");
for(let i = 0;i <= cpts.length;i ++) {
	var temp_value
	$(cpts[i]).focus(() => {
		temp_value = $(cpts[i]).val();
		$(cpts[i]).attr("value","");
	});
	$(cpts[i]).blur(() => {
		$(cpts[i]).attr("value", temp_value);
	});
}


let speed_hideExpression = $("*#speed_hideExpression");
let speed_hideExpression_li = $("#speed_hideExpression li");
let hideExpression = $("*#hideExpression");
let hideExpression_li = $("#hideExpression li");


// 在表达式选项版中获取 value 速度表达式
for (let i = 0;i <= speed_hideExpression_li.length;i ++) {
	$(speed_hideExpression_li[i]).click(() => {
		let value = $(speed_hideExpression_li[i]).attr("value");
		console.log(value);
		$("#"+speed_expression_id).attr("value", value)
	})
}
for (let i = 0;i <= hideExpression_li.length;i ++) {
	$(hideExpression_li[i]).click(() => {
		let value = $(hideExpression_li[i]).attr("value");
		console.log(value);
		$("#"+expression_id).attr("value", value)
	})
}

// localStorage.clear();







let wayTable = $(".wayTable");	// html 表格对象
localStorage.TWay;
// 方式切换的映射的 重要事件！
$("#way").change(()=>{
	TWay();
})
for (let i = 0;i <= wayTable.length;i ++) $(wayTable[i]).hide()
$(wayTable[1]).show() 




// colorBlock 其他复制按钮
let cmdIpt_copy = $(".cmdIpt_copy");

for (let i = 0;i <= cmdIpt_copy.length;i ++) {
	$(cmdIpt_copy[i]).click(() => {
		console.log(i)
		if (i == 0) copyHandle("/particleex clearparticle");
		if (i == 1) copyHandle("/particleex clearcache");
	})
}




var copyTemp = 0;
$(".output_destination").click(() => {
	if (cmd_build_null == true) 
	{
		var ct = $(".output_destination").html();
		copyHandle(ct);
	} 
	// else 
	// {
	// 	Messagebox("请生成指令后重复此操作","alert");
	// }
})



