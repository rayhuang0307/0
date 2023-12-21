ezstartkit.buttonABinput(ezstartkit.Button_read.read1, function () {
    ezstartkit.rgb_led_show_all(0xff0000)
})
ezstartkit.buttonABinput(ezstartkit.Button_read.read3, function () {
    ezstartkit.oled_showString("愛你.", 0, 0)
})
basic.forever(function () {
	
})
