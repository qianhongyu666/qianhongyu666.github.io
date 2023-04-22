function output_cmd_normal() {  // 1.12.2原版指令输出函数
	var axis_x = $("#axis_x").val();
	if (axis_x == 'x') axis_x = '';
	var axis_y = $("#axis_y").val();
	if (axis_y == 'y') axis_y = 1;
	var axis_z = $("#axis_z").val();
	if (axis_z == 'z') axis_z = '';
	
	var move_x = $("#move_x").val();
	if (move_x == 'vx') move_x = 0;
	var move_y = $("#move_y").val();
	if (move_y == 'vy') move_y = 0;
	var move_z = $("#move_z").val();
	if (move_z == 'vz') move_z = 0;
	var cmdName = $("#cmdName_select").find("option:selected").val();
	var spread_speed = $("#spread_speed").val();
	var particle_num = $("#particle_num").val();
	var vision_range
	//取 radio 的选择的value值
	var radio = $("#radio_vision_range #vision_range");
	for (i=0; i<radio.length; i++) {
		if (radio[i].checked) {
			vision_range = radio[i].value
		}
	}
	
	var cmd = "/particle " + cmdName + " ~" + axis_x + " ~" + axis_y + " ~" + axis_z + " " + move_x + " " +
		move_y + " " + move_z + " " + spread_speed + " " + particle_num + " " + vision_range
	
	
	$(".output_destination").html("");  // 清空
	
	$(".output_destination").append(cmd)
	console.log("输出成功")
	output_cmd(cmd)


	$(".output_destination").css({"background-image": "url('img/copy_background.png')"})
}



// 确定生成键
let cmd_build_null = false;  // 复制时检查是否已生成指令
$("#cmd_build").click(() => {
	output_cmd_normal();
	cmd_build_null = true;
});