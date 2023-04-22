var version_bedrock = $(".version_bedrock");
var Cbtn = "<button id='copy'>复制</button>"
bedrock_txt = "<p id='B_Copy'>" + Cbtn + "arrow_spell_emitter 药水箭粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "balloon_gas_particle 白色粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_bubble_particle 水中粒子1 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_bubble_particle_manual 水中粒子2 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_crit_particle 暴击粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_flame_particle 火焰粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_portal_particle 传送门粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_smoke_particle 烟雾粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "bleach 村民生气粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_column_bubble 水中粒子3 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_column_down_bubble 水中粒子4 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "basic_column_up_bubble 水中粒子5 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "camera_shoot_explosion 相机爆炸射击粒子？？？？？？</p>" +
	"<p id='B_Copy'>" + Cbtn + "campfire_smoke_particle 营火粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "campfire_tall_smoke_particle 营火放在干草块上粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "cauldron_bubble_particle 水中粒子6 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "cauldron_explosion_emitter 白色烟雾1</p>" +
	"<p id='B_Copy'>" + Cbtn + "cauldron_splash_particle 水中粒子7</p>" +
	"<p id='B_Copy'>" + Cbtn + "conduit_absorb_particle 潮涌核心吸收粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "conduit_attack_emitter 潮涌核心攻击粒子？？？？？？</p>" +
	"<p id='B_Copy'>" + Cbtn + "conduit_particle 潮涌核心粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "critical_hit_emitter 唤魔者攻击的粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "death_explosion_emitter 死亡白色烟雾粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "dolphin_move_particle 海豚游泳粒子 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "dragon_breath_fire 末影龙吐息火焰粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "dragon_breath_lingering 末影龙吐息火焰溅射粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "dragon_breath_trail 末影龙吐息火焰停留粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "dragon_death_explosion_emitter 末影龙死亡粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "dragon_destroy_block 末影龙摧毁方块粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "dragon_dying_explosion 末影龙死亡时爆炸粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "egg_destroy_emitter 蛋摧毁粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "elephant_tooth_paste_vapor_particle 白色烟雾2</p>" +
	"<p id='B_Copy'>" + Cbtn + "minecraft_enchanting_table_particle 附魔桌粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "end_chest 末影箱粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "endrod 末影烛粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "evocation_fang_particle 唤魔者召唤的实体粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "evoker_spell 黑色烟雾</p>" +
	"<p id='B_Copy'>" + Cbtn + "_explosion_manual 白色烟雾3</p>" +
	"<p id='B_Copy'>" + Cbtn + "_explosion_particle 白色烟雾4</p>" +
	"<p id='B_Copy'>" + Cbtn + "eye_of_ender_bubble_particle 水中粒子8 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "eyeofender_death_explode_particle 白色烟雾5</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_border_dust_particle 红色粒子1</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_border_dust_particle_dust 黑色粒子1</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_dust_concrete_powder_particle 黑色粒子2</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_dust_dragon_egg_particle 黑色粒子3</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_dust_gravel_particle 灰色粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_dust_red_sand_particle 橙褐色粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_dust_sand_particle 黄褐色粒子(浅色)</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_dust_scaffolding_particle 黄褐色粒子(深色)</p>" +
	"<p id='B_Copy'>" + Cbtn + "falling_dust_top_snow_particle 灰白色粒子（雪）</p>" +
	"<p id='B_Copy'>" + Cbtn + "fish_hook_particle 水中粒子9 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "fish_pos_particle 水中粒子10 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "guardian_attack_particle 水中粒子11 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "guardian_water_move_particle 水中粒子12 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "heart_particle 爱心粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "huge_explosion_emitter 大爆炸粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "ice_evaporation_emitter 白色烟雾6</p>" +
	"<p id='B_Copy'>" + Cbtn + "knockback_roar_particle 白色烟雾7 (大范围散开)</p>" +
	"<p id='B_Copy'>" + Cbtn + "lab_table_heatblock_dust_particle 黑色颗粒粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "lab_table_misc_mystical_particle 附魔台掉落粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "large_explosion “大爆炸”粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "lava_drip_particle 岩浆滴落粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "lava_particle 岩浆迸发粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "llama_spit_smoke 白色烟雾8</p>" +
	"<p id='B_Copy'>" + Cbtn + "magnesium_salts_emitter 白色絮状粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "misc_fire_vapor_particle 白色烟雾9</p>" +
	"<p id='B_Copy'>" + Cbtn + "mob_block_spawn_emitter 白色烟雾10</p>" +
	"<p id='B_Copy'>" + Cbtn + "mob_portal 传送门粒子1</p>" +
	"<p id='B_Copy'>" + Cbtn + "mobflame_single 火焰粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "mobspell_emitter 黑色絮状粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "mycelium_dust_particle 黑色小颗粒粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "note_particle 黑色音符粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "obsidian_glow_dust_particle 红色粒子2</p>" +
	"<p id='B_Copy'>" + Cbtn + "portal_directional 传送门粒子2</p>" +
	"<p id='B_Copy'>" + Cbtn + "rain_splash_particle 雨滴滴落溅射粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "redstone_ore_dust_particle 红色散发粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "redstone_repeater_dust_particle 红色粒子3</p>" +
	"<p id='B_Copy'>" + Cbtn + "redstone_torch_dust_particle 红色粒子4</p>" +
	"<p id='B_Copy'>" + Cbtn + "redstone_wire_dust_particle 红色粒子5</p>" +
	"<p id='B_Copy'>" + Cbtn + "rising_border_dust_particle 红色上升粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "shulker_buller 白色粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "silverfish_grief_emitter 白色烟雾11</p>" +
	"<p id='B_Copy'>" + Cbtn + "sparkier_emitter 黑色散射粒子 </p>" +
	"<p id='B_Copy'>" + Cbtn + "splash_spell_emitter 黑色散射粒子(大范围)</p>" +
	"<p id='B_Copy'>" + Cbtn + "sponge_absorb_water_particle 水中粒子11 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "squid_flee_particle 水中粒子12 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "squid_ink_bubble 水中粒子13 (散开)(仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "squid_move_particle 水中粒子14 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "totem_manual 复活图腾复活粒子 (慢速)</p>" +
	"<p id='B_Copy'>" + Cbtn + "totem_particle 复活图腾复活粒子 (快速)</p>" +
	"<p id='B_Copy'>" + Cbtn + "underwater_torch_particle 水中粒子15 (仅限水中使用)</p>" +
	"<p id='B_Copy'>" + Cbtn + "villager_angry 村民生气粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "villager_happy 村民高兴粒子(绿色粒子)</p>" +
	"<p id='B_Copy'>" + Cbtn + "water_drip_particle 水滴滴落粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "water_evaporation_actor_emitter 白色烟雾12</p>" +
	"<p id='B_Copy'>" + Cbtn + "water_evaporation_actor_bucket_emitter 白色烟雾13</p>" +
	"<p id='B_Copy'>" + Cbtn + "water_evaporation_manual 白色烟雾14</p>" +
	"<p id='B_Copy'>" + Cbtn + "water_splash_particle 水溅落粒子1</p>" +
	"<p id='B_Copy'>" + Cbtn + "water_splash_particle_manual 水溅落粒子2</p>" +
	"<p id='B_Copy'>" + Cbtn + "water_wake_particle 水上升粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "wither_boss_invulnerable 凋零粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "portal_reverse_particle 重生锚粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "blue_flame_particle 灵魂火把粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "obsidian_tear_particle 哭泣黑曜石粒子</p>" +
	"<p id='B_Copy'>" + Cbtn + "soul_particle 灵魂粒子</p>"

$("#version_bedrock").append(bedrock_txt)
JAVA_txt = "<p id='J_Copy'>" + Cbtn + "explode 爆炸</p>" +
	"<p id='J_Copy'>" + Cbtn + "largeexplode 大型爆炸</p>" +
	"<p id='J_Copy'>" + Cbtn + "hugeexplosion 巨型爆炸</p>" +
	"<p id='J_Copy'>" + Cbtn + "fireworksSpark 烟花颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "bubble 水中气泡</p>" +
	"<p id='J_Copy'>" + Cbtn + "splash 喷溅水花</p>" +
	"<p id='J_Copy'>" + Cbtn + "wake 水准波纹</p>" +
	"<p id='J_Copy'>" + Cbtn + "suspended 水准颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "depthsuspend 虚空粒子</p>" +
	"<p id='J_Copy'>" + Cbtn + "crit 物理暴击</p>" +
	"<p id='J_Copy'>" + Cbtn + "magicCrit 魔法暴击</p>" +
	"<p id='J_Copy'>" + Cbtn + "smoke 黑烟</p>" +
	"<p id='J_Copy'>" + Cbtn + "largesmoke 大型黑烟</p>" +
	"<p id='J_Copy'>" + Cbtn + "spell 持续药水颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "instantSpell 瞬间药水颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "mobSpell 状态效果颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "mobSpellAmbient 信标效果颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "witchMagic 女巫颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "dripWater 方块溅水</p>" +
	"<p id='J_Copy'>" + Cbtn + "dripLava 方块溅岩浆</p>" +
	"<p id='J_Copy'>" + Cbtn + "angryVillager 村民愤怒</p>" +
	"<p id='J_Copy'>" + Cbtn + "happyVillager 村民喜悦</p>" +
	"<p id='J_Copy'>" + Cbtn + "townaura 菌丝颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "note 音符颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "portal 传送门颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "enchantmenttable 附魔台符文</p>" +
	"<p id='J_Copy'>" + Cbtn + "flame 火苗颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "lava 岩浆颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "footstep 脚印</p>" +
	"<p id='J_Copy'>" + Cbtn + "reddust 红石充能</p>" +
	"<p id='J_Copy'>" + Cbtn + "snowballpoof 雪球颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "slime 史莱姆颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "heart 爱心</p>" +
	"<p id='J_Copy'>" + Cbtn + "barrier 屏障</p>" +
	"<p id='J_Copy'>" + Cbtn + "cloud 云朵</p>" +
	"<p id='J_Copy'>" + Cbtn + "snowshovel 血傀儡生成</p>" +
	"<p id='J_Copy'>" + Cbtn + "droplet 下雪颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "mobappearance 远古守卫者的注视</p>" +
	"<p id='J_Copy'>" + Cbtn + "endRod 末地烛颗粒</p>" +
	"<p id='J_Copy'>" + Cbtn + "dragonbreath 末影龙吐息粒子</p>" +
	"<p id='J_Copy'>" + Cbtn + "damageIndicator 玩家造成伤害粒子</p>" +
	"<p id='J_Copy'>" + Cbtn + "sweepAttack 剑气</p>" +
	"<p id='J_Copy'>" + Cbtn + "fallingdust 落沙</p>" +
	"<p id='J_Copy'>" + Cbtn + "blockcrack 摧毁方块</p>" +
	"<p id='J_Copy'>" + Cbtn + "blockdust 跌落粒子</p>" +
	"<p id='J_Copy'>" + Cbtn + "iconcrack 物品碎裂粒子</p>" +
	"<p id='J_Copy'>" + Cbtn + "spit 羊驼攻击</p>" +
	"<p id='J_Copy'>" + Cbtn + "totem 不死图腾</p>"
$("#version_JAVA").append(JAVA_txt)


var new_cmdName_select = "<option value='ambient_entity_effect'>药水</option>" +
	"<option value='angry_villager'>村民愤怒</option>" +
	"<option value='ash'>粉尘灰</option>" +
	"<option value='barrier'>屏障</option>" +
	"<option value='bubble'>泡沫</option>" +
	"<option value='bubble_column_up'>气泡柱向上</option>" +
	"<option value='bubble_pop'>泡泡流行</option>" +
	"<option value='campfire_cosy_smoke'>篝火舒适的烟雾</option>" +
	"<option value='campfire_signal_smoke'>篝火信号烟雾</option>" +
	"<option value='cloud'>云</option>" +
	"<option value='composter'>堆肥机粒子</option>" +
	"<option value='crimson_spore'>深红孢子</option>" +
	"<option value='crit'>暴击</option>" +
	"<option value='current_down'>当前下降</option>" +
	"<option value='damage_indicator'>损坏指示器</option>" +
	"<option value='dolphin'>海豚</option>" +
	"<option value='dragon_breath'>龙息</option>" +
	"<option value='dripping_honey'>蜂蜜滴</option>" +
	"<option value='dripping_lava'>岩浆滴</option>" +
	"<option value='dripping_obsidian_tear'>哭泣的黑曜石滴</option>" +
	"<option value='dripping_water'>水滴</option>" +
	"<option value='dust'>灰尘</option>" +
	"<option value='effect'>药水</option>" +
	"<option value='elder_guardian'>老守望者注视</option>" +
	"<option value='enchant'>附魔台符文</option>" +
	"<option value='enchanted_hit'>附魔命中</option>" +
	"<option value='end_rod'>末地烛</option>" +
	"<option value='entity_effect'>实体效果</option>" +
	"<option value='explosion'>爆炸</option>" +
	"<option value='explosion_emitter'>爆炸发射</option>" +
	"<option value='falling_dust'>尘灰滴落</option>" +
	"<option value='falling_honey'>蜂蜜滴落</option>" +
	"<option value='falling_lava'>岩浆滴落</option>" +
	"<option value='falling_nectar'>蜜汁滴落</option>" +
	"<option value='falling_obsidian_tear'>哭泣的黑曜石滴落</option>" +
	"<option value='falling_water'>水滴落</option>" +
	"<option value='firework'>烟花颗粒</option>" +
	"<option value='fishing'>钓鱼水花</option>" +
	"<option value='flame'>火焰颗粒</option>" +
	"<option value='flash'>闪光</option>" +
	"<option value='happy_villager'>村民快乐</option>" +
	"<option value='heart'>爱心</option>" +
	"<option value='instant_effect'>白色颗粒</option>" +
	"<option value='item_slime'>史莱姆粒子</option>" +
	"<option value='item_snowball'>雪球粒子</option>" +
	"<option value='landing_honey'>蜂蜜落下</option>" +
	"<option value='landing_lava'>岩浆落下</option>" +
	"<option value='landing_obsidian_tear'>哭泣的黑曜石落下</option>" +
	"<option value='large_smoke'>大烟</option>" +
	"<option value='lava'>岩浆颗粒</option>" +
	"<option value='mycelium'>菌丝颗粒</option>" +
	"<option value='nautilus'>鹦鹉螺</option>" +
	"<option value=''>note乐符</option>" +
	"<option value='poof'>死亡烟雾</option>" +
	"<option value='portal'>下坠的下界门粒子</option>" +
	"<option value='rain'>雨</option>" +
	"<option value='reverse_portal'>悬停的下界门粒子</option>" +
	"<option value='smoke'>烟</option>" +
	"<option value='sneeze'>打喷嚏</option>" +
	"<option value='soul'>灵魂颗粒</option>" +
	"<option value='soul_fire_flame'>灵魂火焰</option>" +
	"<option value='spit'>羊驼吐痰</option>" +
	"<option value='splash'>溅起的水花</option>" +
	"<option value='squid_ink'>鱿鱼墨水</option>" +
	"<option value='sweep_attack'>扫荡剑气</option>" +
	"<option value='totem_of_undying'>不朽的图腾</option>" +
	"<option value='underwater'>水下气泡</option>" +
	"<option value='warped_spore'>翘曲孢子颗粒</option>" +
	"<option value='white_ash'>白灰颗粒</option>" +
	"<option value='witch'>女巫粒子</option>"


$(".cmdName_select").html(new_cmdName_select)


var old_cmdName_select = "<option value='explode'>爆炸</option>" +
	"<option value='largeexplode'>大型爆炸</option>" +
	"<option value='hugeexplosion'>巨型爆炸</option>" +
	"<option value='fireworksSpark'>烟花颗粒</option>" +
	"<option value='bubble'>水中气泡</option>" +
	"<option value='splash'>喷溅水花</option>" +
	"<option value='wake'>水准波纹</option>" +
	"<option value='suspended'>水准颗粒</option>" +
	"<option value='depthsuspend'>虚空粒子</option>" +
	"<option value='crit'>物理暴击</option>" +
	"<option value='magicCrit'>魔法暴击</option>" +
	"<option value='smoke'>黑烟</option>" +
	"<option value='largesmoke'>大型黑烟</option>" +
	"<option value='spell'>持续药水颗粒</option>" +
	"<option value='instantSpell'>瞬间药水颗粒</option>" +
	"<option value='mobSpell'>状态效果颗粒</option>" +
	"<option value='mobSpellAmbient'>信标效果颗粒</option>" +
	"<option value='witchMagic'>女巫颗粒</option>" +
	"<option value='dripWater'>方块溅水</option>" +
	"<option value='dripLava'>方块溅岩浆</option>" +
	"<option value='angryVillager'>村民愤怒</option>" +
	"<option value='happyVillager'>村民喜悦</option>" +
	"<option value='townaura'>菌丝颗粒</option>" +
	"<option value='note'>音符颗粒</option>" +
	"<option value='portal'>传送门颗粒</option>" +
	"<option value='enchantmenttable'>附魔台符文</option>" +
	"<option value='flame'>火苗颗粒</option>" +
	"<option value='lava'>岩浆颗粒</option>" +
	"<option value='footstep'>脚印</option>" +
	"<option value='reddust'>红石充能</option>" +
	"<option value='snowballpoof'>雪球颗粒</option>" +
	"<option value='slime'>史莱姆颗粒</option>" +
	"<option value='heart'>爱心</option>" +
	"<option value='barrier'>屏障</option>" +
	"<option value='cloud'>云朵</option>" +
	"<option value='snowshovel'>血傀儡生成</option>" +
	"<option value='droplet'>下雪颗粒</option>" +
	"<option value='mobappearance'>远古守卫者的注视</option>" +
	"<option value='endRod'>末地烛颗粒</option>" +
	"<option value='dragonbreath'>末影龙吐息粒子</option>" +
	"<option value='damageIndicator'>玩家造成伤害粒子</option>" +
	"<option value='sweepAttack'>剑气</option>" +
	"<option value='fallingdust'>落沙</option>" +
	"<option value='blockcrack'>摧毁方块</option>" +
	"<option value='blockdust'>跌落粒子</option>" +
	"<option value='iconcrack'>物品碎裂粒子</option>" +
	"<option value='spit'>羊驼攻击</option>" +
	"<option value='totem'>不死图腾</option>"

$("*#cmdName_select, #CB1_cmdName_select").html(old_cmdName_select);




var particles = new Array();
particles[0] = ["ambient_entity_effect","药水"];
particles[1] = ["angry_villager","村民愤怒"];
particles[2] = ["ash","粉尘灰"];
particles[3] = ["barrier","屏障"];
particles[4] = ["bubble","泡沫"];
particles[5] = ["bubble_column_up","气泡柱向上"];
particles[6] = ["bubble_pop","泡泡流行"];
particles[7] = ["campfire_cosy_smoke","篝火舒适的烟雾"];
particles[8] = ["campfire_signal_smoke","篝火信号烟雾"];
particles[9] = ["cloud","云"];
particles[10] = ["composter","堆肥机粒子"];
particles[11] = ["crimson_spore","深红孢子"];
particles[12] = ["crit","暴击"];
particles[13] = ["current_down","当前下降"];
particles[14] = ["damage_indicator","损坏指示器"];
particles[15] = ["dolphin","海豚"];
particles[16] = ["dragon_breath","龙息"];
particles[17] = ["dripping_honey","蜂蜜滴"];
particles[18] = ["dripping_lava","岩浆滴"];
particles[19] = ["dripping_obsidian_tear","哭泣的黑曜石滴"];
particles[20] = ["dripping_water","水滴"];
particles[21] = ["dust","灰尘"];
particles[22] = ["effect","药水"];
particles[23] = ["elder_guardian","老守望者注视"];
particles[24] = ["enchant","附魔台符文"];
particles[25] = ["enchanted_hit","附魔命中"];
particles[26] = ["end_rod","末地烛"];
particles[27] = ["entity_effect","实体效果"];
particles[28] = ["explosion","爆炸"];
particles[29] = ["explosion_emitter","爆炸发射"];
particles[30] = ["falling_dust","尘灰滴落"];
particles[31] = ["falling_honey","蜂蜜滴落"];
particles[32] = ["falling_lava","岩浆滴落"];
particles[33] = ["falling_nectar","蜜汁滴落"];
particles[34] = ["falling_obsidian_tear","哭泣的黑曜石滴落"];
particles[35] = ["falling_water","水滴落"];
particles[36] = ["firework","烟花颗粒"];
particles[37] = ["fishing","钓鱼水花"];
particles[38] = ["flame","火焰颗粒"];
particles[39] = ["flash","闪光"];
particles[40] = ["chappy_villager","村民快乐"];
particles[41] = ["heart","爱心"];
particles[42] = ["instant_effect","白色颗粒"];
particles[43] = ["item_slime","史莱姆粒子"];
particles[44] = ["item_snowball","雪球粒子"];
particles[45] = ["landing_honey","蜂蜜落下"];
particles[46] = ["landing_lava","岩浆落下"];
particles[47] = ["landing_obsidian_tear","哭泣的黑曜石落下"];
particles[48] = ["large_smoke","大烟"];
particles[49] = ["lava","岩浆颗粒"];
particles[50] = ["mycelium","菌丝颗粒"];
particles[51] = ["nautilus","鹦鹉螺"];
particles[52] = ["note","乐符"];
particles[53] = ["poof","死亡烟雾"];
particles[54] = ["portal","下坠的下界门粒子"];
particles[55] = ["rain","雨"];
particles[56] = ["reverse_portal","悬停的下界门粒子"];
particles[57] = ["smoke","烟"];
particles[58] = ["sneeze","打喷嚏"];
particles[59] = ["soul","灵魂颗粒"];
particles[60] = ["soul_fire_flame","灵魂火焰"];
particles[61] = ["spit","羊驼吐痰"];
particles[62] = ["splash","溅起的水花"];
particles[63] = ["squid_ink","鱿鱼墨水"];
particles[64] = ["sweep_attack","扫荡剑气"];
particles[65] = ["totem_of_undying","不朽的图腾"];
particles[66] = ["underwater","水下气泡"];
particles[67] = ["warped_spore","翘曲孢子颗粒"];
particles[68] = ["white_ash","白灰颗粒"];
particles[69] = ["witch","女巫粒子"];



for(let i = 0;i < particles.length;i ++) {
	let txt = "<button id='Copy_to_value' title='"+particles[i][0]+"' value='"+particles[i][0]+"'>"+particles[i][1] +"</button>";
	// console.log(particles[i][0]);
	$(chunksResourceBoxs[0]).append(txt);
}


var complete_command = new Array();
complete_command[0] = ['正方体',"particleex conditional minecraft:end_rod ~ ~1 ~ 0 1 1 1 0 0 0 0.5 0.5 0.5 '(abs(y)==0.5&!(abs(z)<0.5))|(abs(x)==0.5&(!(abs(z)<0.5)|!(abs(y)<0.5)))' 0.1 0 'vy=0.01' 1.0 null"];
complete_command[1] = ['立体球', "particleex polarparameter minecraft:firework ~ ~2 ~ 0 1 0 1 0 0 0 0 550 's1=t;s2=t/50;dis=t/10'"];
complete_command[2] = ['锐角星型', "particleex parameter minecraft:end_rod ~ ~4 ~ 0 1 1 1 0 0 0 -3082 3082 'a=5;u=floor(t/78.5)/25;v=t%157/25;x=a*(cos(u)*cos(v))^3;y=a*(sin(u)*cos(v))^3;z=a*sin(v)^3' 1 0 'a=0.05;(vx,,vy,,vz)=(-sin(a),0,-cos(a),,0,1,0,,cos(a),0,-sin(a))*(x*2*sin(a),,0.1,,z*2*sin(a))' 0.1 0"];
complete_command[3] = ['旋转的球体', "particleex polarparameter minecraft:end_rod ~ ~3 ~ 1 1 1 1 0 0 0 -100.0 100.0 's1,s2,dis=t*10,t*PI/200,10' 0.1 0 'a=0.05;(vx,,vy,,vz)=(-sin(a),0,-cos(a),,0,1,0,,cos(a),0,-sin(a))*(x*2*sin(a),,0.1,,z*2*sin(a));cr=sin(t/7)/2+0.5;cg=sin(t/5)/2+0.5;cb=sin(t/3)/2+0.5' 1.0 null"];
complete_command[4] = ['粒子缠绕',"particleex normal minecraft:end_rod ~ ~1 ~ 0.5 0 0.5 1 0 0. 0 10 5 5 5 0 'a=0.1;(vx,,vy,,vz)=(-sin(a),0,-cos(a),,0,1,0,,cos(a),0,-sin(a))*(x*2*sin(a),,0,,z*2*sin(a))' 1.0 null"];
complete_command[5] = ['心形曲线',"particleex polarparameter minecraft:end_rod ~ ~17 ~ 1 1 1 1 0 0 0 -100.0 100.0 'dis=t/5;s1=t/7;s2'"];
complete_command[6] = ['圈', "particleex polarparameter minecraft:end_rod ~ ~2 ~ 0 1 1 1 0 0 0 -100.0 100.0 's1,s2,dis=t*10,t*PI/2000,10' 0.1 0 'a=-0.05;(vx,,vz)=(-sin(a),0,-cos(a),,cos(a),0,-sin(a))*(x*2*sin(a),,0.1,,z*2*sin(a))' 1.0 null"];
complete_command[7] = ['竖立的圈', "particleex polarparameter minecraft:end_rod ~ ~2 ~ 0.1 1 1 1 0 0 0 -10.0 10.0 'dis=1;s1=1;s2=t' 0.1 0 0 1.0 null"];
complete_command[8] = ['散开的圈', "particleex polarparameter minecraft:end_rod ~ ~1 ~ 0.1 1 1 1 0 0 0 -10.0 10.0 'dis=2;s1=2*t;s2=3' 0.1 0 'i=0.1;(vx,vy,vz)=(x*i,y*i,z*i)' 1.0 null"];
complete_command[9] = ['球', "particleex rgbapolarparameter minecraft:end_rod ~ ~5 ~ 0 0 0 -60.0 65.0 's1,s2,dis=t*0.2,t*PI/3.1415926,5;cr,cg,cb=sin(t/7)/4+0.75,sin(t/5)/4+0.75,sin(t/3)/4+0.75;s1=s1*dis;s2=s2*dis' 0.1 0 0 1.0 null"];
complete_command[10] = ['粒子升华', "particleex normal minecraft:end_rod ~ ~-10 ~ .2 .5 1 1 0 1.5 0 10 5 10 500 0 null"];
//complete_command[11] = ['粒子雨', "particleex normal minecraft:end_rod ~ ~15 ~ 1 0.3 1 1 0 0 0 10 0 5 2 150 'vy=-0.1' 0.1 null"];
//complete_command[12] = ['心(下半)', "particleex tickparameter minecraft:end_rod ~ ~5 ~ .6 .2 1 1 0 0 0 -2.0 3.0 'x=t;y=-2.8*sqrt(1-sqrt(abs(t)/2))' 0.01 20 100 'vy=0'"];
//complete_command[13] = ['心(上半)', "particleex tickparameter minecraft:end_rod ~ ~5 ~2 .6 .2 1 1 0 0 0 -2.0 2.0 'x=-t;y=sqrt(1-(abs(t)-1)^2)' 0.01 20 100 'vy=0'"];
//complete_command[14] = ['光芒射线', "particleex polarparameter minecraft:end_rod ~ ~1 ~ 1 1 1 1 0 0 0 -13.0 13.0 's1=t;s2=t;dis=tan(5*t)' 0.001 100 null"];

// colorblock作品图片初始化
let complete_commandCards;
for (let i = 0;i < complete_command.length;i ++ ) {
	$(".chunks-resource-box:eq(1)").append("<div class='card'><p>" + complete_command[i][0] + "</p><h3>复制源码</h3></div>")
	
	if (i == complete_command.length-1) $(".chunks-resource-box:eq(1)").append("<div class='ENDText'>-- END --</div>");
	
}
complete_commandCards = $(".chunks-resource-box:eq(1) .card");
for (let i = 0;i < complete_command.length;i ++ ) {
	$(complete_commandCards[i]).css({"background-image": "url('img/card/" + i + ".jpg')"});
	$(complete_commandCards[i]).click(() => {
		console.log(i)
		copyHandle(complete_command[i][1]);
	})
}