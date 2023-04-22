let bgColorBtn = new Array();
bgColorBtn[0] = "#000000"
bgColorBtn[1] = "#aa0000"
bgColorBtn[2] = "#005500"
bgColorBtn[3] = "#aa5500"
bgColorBtn[4] = "#00aa00";
bgColorBtn[5] = "#aaaa00";
bgColorBtn[6] = "#00ff00";
bgColorBtn[7] = "#aaff00";
bgColorBtn[8] = "#00007f";
bgColorBtn[9] = "#aa007f";
bgColorBtn[10] = "#00557f";
bgColorBtn[11] = "#aa557f";
bgColorBtn[12] = "#00aa7f";
bgColorBtn[13] = "#aaaa7f";
bgColorBtn[14] = "#00ff7f";
bgColorBtn[15] = "#aaff7f";
bgColorBtn[16] = "#0000ff";
bgColorBtn[17] = "#aa00ff";
bgColorBtn[18] = "#0055ff";
bgColorBtn[19] = "#aa55ff";
bgColorBtn[20] = "#00aaff";
bgColorBtn[21] = "#aaaaff";
bgColorBtn[22] = "#00ffff";
bgColorBtn[23] = "#aaffff";
bgColorBtn[24] = "#550000";
bgColorBtn[25] = "#ff0000";
bgColorBtn[26] = "#555500";
bgColorBtn[27] = "#ff5500";
bgColorBtn[28] = "#55aa00";
bgColorBtn[29] = "#ffaa00";
bgColorBtn[30] = "#55ff00";
bgColorBtn[31] = "#ffff00";
bgColorBtn[32] = "#55007f";
bgColorBtn[33] = "#ff007f";
bgColorBtn[34] = "#55557f";
bgColorBtn[35] = "#ff557f";
bgColorBtn[36] = "#55aa7f";
bgColorBtn[37] = "#ffaa7f";
bgColorBtn[38] = "#55ff7f";
bgColorBtn[39] = "#ffff7f";
bgColorBtn[40] = "#5500ff";
bgColorBtn[41] = "#ff00ff";
bgColorBtn[42] = "#5555ff";
bgColorBtn[43] = "#ff55ff";
bgColorBtn[44] = "#55aaff";
bgColorBtn[45] = "#ffaaff";
bgColorBtn[46] = "#55ffff";
bgColorBtn[47] = "#ffffff";

// particle color 遍历颜色按键

for (let i = 0; i < 48;i ++) {
	$("#btnColor").append("<button class='colorBtn'></button>");
	setTimeout(()=>{
		let colorBtn = $(".colorBtn");
		$(colorBtn[i]).css('background-color', bgColorBtn[i])
	},1)
}

var list;
// 真实 rgba 变量
var red = 1;
var green = 1;
var blue = 1;
let alphas = 1;

// 缓存 rgba 变量
let Temp_red = 1;
let Temp_green = 1;
let Temp_blue = 1;
let Temp_alphas = 1;

var pColors = $(".pColor");

for (let i = 0; i <= pColors.length; i++) {
	$(pColors[i]).focus(() => {
		// id = $(pColors).attr("id")

		particle_color_board_toggle(true)
		
		rgba_count(i)
		Temp_i = i;
		console.log("list: " + i)
	})
}

// 确定颜色 点击事件
var Temp_i;
$("#particle_color_save").click(() => {
	particle_color_board_toggle(false)
	red = Temp_red;
	green = Temp_green;
	blue = Temp_blue;
	alphas = Temp_alphas;
	$(pColors[Temp_i]).attr("value", red + " " + green + " " + blue + " " + alphas)

})
// 关闭颜色设置面板 点击事件
$("#particle_color_board_close,#particle_color_cancel").click(() => {
	particle_color_board_toggle(false)
})

// 获取不透明度
alpha.addEventListener("input", () => {
	// console.log($("#alpha").val())
	var value = $("#alpha").val()
	$("#alpha_show").text(value + "%")

	Temp_alphas = value / 100
});




function rgba_count(subscript) {
	Temp_i = subscript;

	// 排他思想 获取颜色 rgb 值
	var btnColor = $(".colorBtn");
	var sure_color
	for (let i = 0; i <= btnColor.length; i++) {
		$(btnColor[i]).click(() => {

			for (j = 0; j <= btnColor.length; j++) {
				$(btnColor[j]).css({
					"border": "dashed 2px transparent"
				})
			}
			$(btnColor[i]).css({
				"border": "dashed 2px #5a5a5a"
			})
			// 获取该 btn 得到背景颜色
			let rgb = $(btnColor[i]).css('background-color')
			// console.log(rgb + typeof(rgb))
			let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ']
			let str = []
			for (j = 0; j <= rgb.length; j++) {
				for (k = 0; k < arr.length; k++) {
					if (rgb[j] == arr[k]) {
						str += rgb[j]
					}
				}
			}
			console.log("结果:" + str)
			sure_color = str

			// 将 rgb字符串转换成 r, g, b 三元色
			// console.log("rgb 转换目标:" + str + "\n数据类型：" + typeof(str))
			conversion_r = [];
			conversion_g = [];
			conversion_b = []; // 目标三原色
			let rgb_conversion_outcome = [] // 转换结果数组

			let tempTime = 0; // 三原色赋值 轮换次数
			t_str = str + " "; // 决绝没有第三个空格问题
			for (j = 0; j <= t_str.length; j++) {
				if (t_str[j] != " ") {
					rgb_conversion_outcome += t_str[j]
					// console.log("j:" + j + " out:" + rgb_conversion_outcome)
				} else {
					if (tempTime == 0) conversion_r = Number(rgb_conversion_outcome) / 255
					if (tempTime == 1) conversion_g = Number(rgb_conversion_outcome) / 255
					if (tempTime == 2) conversion_b = Number(rgb_conversion_outcome) / 255
					tempTime++;
					rgb_conversion_outcome = [];
				}
			}
			$("#rbga_displayed_r").attr("value", conversion_r * 255)
			$("#rbga_displayed_g").attr("value", conversion_g * 255)
			$("#rbga_displayed_b").attr("value", conversion_b * 255)

			Temp_red = Math.floor(conversion_r * 10) / 10
			Temp_green = Math.floor(conversion_g * 10) / 10
			Temp_blue = Math.floor(conversion_b * 10) / 10
			console.log("结果:" + red + " " + green + " " + blue)
		})
	}

}
