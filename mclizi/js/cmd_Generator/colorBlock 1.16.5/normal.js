var cmd_build = $(".cmd_build");
for (let i = 0;i <= cmd_build.length;i ++) {
    $(cmd_build[i+1]).click(() => {
        console.log("click btn: "+i);
        
        get_value(i);

        cmd_build_null = true;
    })
}

// parameter 动画开关
let PCTemp = false;
$("#parameter_cpt_box").click(() => {
    if (PCTemp == false) {
        cpt_animation("parameter", true);
        PCTemp = true;
    } else {
        cpt_animation("parameter", false);
        PCTemp = false;
    }
});
// polarparameter 动画开关
let PPCTemp = false;
$("#polarparameter_cpt_box").click(() => {
    if (PPCTemp == false) {
        cpt_animation("polarparameter", true);
        PPCTemp = true;
    } else {
        cpt_animation("polarparameter", false);
        PPCTemp = false;
    }
});

function get_value(way) { // 获取 value
    
    let command; // 最终指令
    
    if (way == 0) {  // normal
        let cmdName = $("#normal_cmdName_select").find("option:selected").val();

        let x = $("#normal_x").val();
        let y = $("#normal_y").val();
        let z = $("#normal_z").val();

        let color = $("#normal_PColor").val();

        let vx = $("#normal_vx").val();
        let vy = $("#normal_vy").val();
        let vz = $("#normal_vz").val();

        let rx = $("#normal_rx").val();
        let ry = $("#normal_ry").val();
        let rz = $("#normal_rz").val();

        let count = $("#normal_count").val();

        let age = $("#normal_age").val();

        let SE = $("#normal_speed_expression").val();

        // 默认 value
        if (x == 'x') x = '';
        if (y == 'y') y = 1;
        if (z == 'z') z = '';

        if (color == "(255, 255, 255, 1)") color = "1 1 1 1";

        if (vx == 'vx') vx = 0;
        if (vy == 'vy') vy = 0;
        if (vz == 'vz') vz = 0;

        if (rx == 'rx') rx = 0;
        if (ry == 'ry') ry = 0;
        if (rz == 'rz') rz = 0;

        // if (count == "1")

        // if (age == '0')
        console.log(x, y, z, color, vx, vy, vz, rx, ry, rz, count, age, SE);

        command = '/particleex normal minecraft:'+ cmdName +' ~'+ x +' ~'+ y +' ~'+ z +' '+ color +' '+ vx +' '+ vy +' '+ vz +' '+ rx +' '+ ry +' '+ rz +
        ' '+ count +' '+ age +" '"+ SE +"'"
        
    }

    if (way == 1) { // parameter
        let cmdName = $("#parameter_cmdName_select").find("option:selected").val();

        let x = $("#parameter_x").val();
        let y = $("#parameter_y").val();
        let z = $("#parameter_z").val();

        let color = $("#parameter_pColor").val();

        let vx = $("#parameter_vx").val();
        let vy = $("#parameter_vy").val();
        let vz = $("#parameter_vz").val();

        let begin = $("#parameter_domain_begin").val();
        let end = $("#parameter_domain_end").val();

        let E = $("#parameter_expression").val();

        let step = $("#parameter_step").val();

        // ************动画设置************
        let cpt;
        let tick;
        if (PCTemp == false) {cpt = '';tick = '';}
        if (PCTemp == true) {
            cpt = $("#parameter_cpt").val();
             if (cpt == "cpt") {
                cpt =  '10 ';
            } else {
                cpt = $("#parameter_cpt").val() + ' ';
            }
            tick = 'tick'
        }
        // ************动画设置************

        let age = $("#parameter_age").val();

        let SE = $("#parameter_speed_expression").val();

        // 默认 value
        if (x == 'x') x = '';
        if (y == 'y') y = 1;
        if (z == 'z') z = '';

        if (color == "(255, 255, 255, 1)") color = "1 1 1 1";

        if (vx == 'vx') vx = 0;
        if (vy == 'vy') vy = 0;
        if (vz == 'vz') vz = 0;

        if (begin == "begin") begin = -10.0;
        if (end == "end") end = 10.0;

        if (step == "step") step = 0.1;
        // if (count == "1")

        // if (age == '0')
        command = '/particleex '+ tick +'parameter minecraft:'+ cmdName +' ~'+ x +' ~'+ y +' ~'+ z +' '+ color +' '+ vx +' '+ vy +' '+ vz +' '+ begin +' '+ end +' '+
        "'"+ E +"' "+ step +' '+ cpt + age +' '+"'"+ SE +"'"
    }

    if (way == 2) { // polarparameter
        let cmdName = $("#polarparameter_cmdName_select").find("option:selected").val();

        let x = $("#polarparameter_x").val();
        let y = $("#polarparameter_y").val();
        let z = $("#polarparameter_z").val();

        let color = $("#polarparameter_pColor").val();

        let vx = $("#parameter_vx").val();
        let vy = $("#parameter_vy").val();
        let vz = $("#parameter_vz").val();

        let begin = $("#polarparameter_domain_begin").val();
        let end = $("#polarparameter_domain_end").val();

        let E = $("#polarparameter_expression").val();

        let step = $("#polarparameter_step").val();

        // ************动画设置************
        let cpt;
        let tick;
        if (PPCTemp == false) {cpt = '';tick = ''}
        if (PPCTemp == true) {
            cpt = $("#polarparameter_cpt").val();
             if (cpt == "cpt") {
                cpt =  '10 ';
            } else {
                cpt = $("#polarparameter_cpt").val() + ' ';
            }
            tick = "tick";
        }
        // ************动画设置************

        let age = $("#polarparameter_age").val();

        let SE = $("#polarparameter_speed_expression").val();

        // 默认 value
        if (x == 'x') x = '';
        if (y == 'y') y = 1;
        if (z == 'z') z = '';

        if (color == "(255, 255, 255, 1)") color = "1 1 1 1";

        if (vx == 'vx') vx = 0;
        if (vy == 'vy') vy = 0;
        if (vz == 'vz') vz = 0;

        if (begin == "begin") begin = -10.0;
        if (end == "end") end = 10.0;

        if (step == "step") step = 0.1;
        // if (count == "1")

        // if (age == '0')
        command = '/particleex '+ tick +'polarparameter minecraft:'+ cmdName +' ~'+ x +' ~'+ y +' ~'+ z +' '+ color +' '+ vx +' '+ vy +' '+ vz +' '+ begin +' '+ end +' '+
        "'"+ E +"' "+ step +' '+ cpt + age +' '+"'"+ SE +"'"
    }

    if (way == 3) { // conditional
        let cmdName = $("#conditional_cmdName_select").find("option:selected").val();

        let x = $("#conditional_x").val();
        let y = $("#conditional_y").val();
        let z = $("#conditional_z").val();

        let color = $("#conditional_pColor").val();

        let vx = $("#conditional_vx").val();
        let vy = $("#conditional_vy").val();
        let vz = $("#conditional_vz").val();
        
        let rx = $("#conditional_rx").val();
        let ry = $("#conditional_ry").val();
        let rz = $("#conditional_rz").val();

        let E = $("#conditional_expression").val();

        let step = $("#conditional_step").val();

        let age = $("#conditional_age").val();

        let SE = $("#conditional_speed_expression").val();
        // 默认 value
        if (x == 'x') x = '';
        if (y == 'y') y = 1;
        if (z == 'z') z = '';

        if (color == "(255, 255, 255, 1)") color = "1 1 1 1";

        if (vx == 'vx') vx = 0;
        if (vy == 'vy') vy = 0;
        if (vz == 'vz') vz = 0;

        if (rx == 'rx') rx = 1;
        if (ry == 'ry') ry = 1;
        if (rz == 'rz') rz = 1;

        if (step == "step") step = 0.1;
        
        command = '/particleex conditional minecraft:'+ cmdName +' ~'+ x +' ~'+ y +' ~'+ z +' '+ color +' '+ vx +' '+ vy +' '+ vz +' '+ rx +' '+ ry +' '+ rz +' '+
        "'"+ E +"' "+ step +' '+ age +' '+"'"+ SE +"'"
    }

    if (way == 4) { // image
        let cmdName = $("#image_cmdName_select").find("option:selected").val();

        let x = $("#image_x").val();
        let y = $("#image_y").val();
        let z = $("#image_z").val();

        let path = $("#image_path").val();
        
        let scaling = $("#image_scaling").val();

        let rotateX = $("#image_rotateX").val();
        let rotateY = $("#image_rotateY").val();
        let rotateZ = $("#image_rotateZ").val();

        let flip = $("#image_flip_select").find("option:selected").val();

        let dpb = $("#image_dpb").val();

        let vx = $("#image_vx").val();
        let vy = $("#image_vy").val();
        let vz = $("#image_vz").val();

        let age = $("#image_age").val();

        let SE = $("#image_speed_expression").val();
        // 默认 value
        if (x == 'x') x = '';
        if (y == 'y') y = 1;
        if (z == 'z') z = '';

        if (path == 'path') path = '1.png';

        if (scaling == "scaling") scaling = 0.1;
        
        if (rotateX == "rotateX") rotateX = 0;
        if (rotateY == "rotateY") rotateY = 0;
        if (rotateZ == "rotateZ") rotateZ = 0;

        if (dpb == "dpb") dpb = 10.0;

        if (vx == 'vx') vx = 0;
        if (vy == 'vy') vy = 0;
        if (vz == 'vz') vz = 0;

        command = '/particleex image minecraft:'+ cmdName +' ~'+ x +' ~'+ y +' ~'+ z +' '+ path +' '+ scaling +' '+ rotateX +' '+ rotateY +' '+ rotateZ +' '+ 
        flip +' '+ dpb +' '+ vx +' '+ vy +' '+ vz +' '+ age +' '+"'"+ SE +"'";
    }
    console.log(command);
    output_cmd(command); // 输出至复制栏
}