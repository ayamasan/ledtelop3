input.onButtonPressed(Button.A, function () {
    受信 = ""
    列数 = 0
    文字データ = ""
    scrollbit.clear()
    scrollbit.show()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    受信 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))
    データ = 受信.charAt(0)
    basic.showString(データ)
    if (データ == "Z") {
        列数 = 0
        文字データ = ""
        scrollbit.clear()
        scrollbit.show()
    } else {
        列 = parseFloat(受信.substr(1, 3))
        if (データ == "1" || データ == "3") {
            if (列 == 0) {
                文字データ = 受信
            } else {
                文字データ = "" + 文字データ + 受信.substr(4, 文字データ.length - 4)
            }
            スクロール = 1
            列数 = 列数 + (文字データ.length - 4) / 2
        } else {
            文字データ = 受信
            列数 = (文字データ.length - 4) / 2
        }
        if (データ == "1" || データ == "3") {
            music.playTone(988, music.beat(BeatFraction.Sixteenth))
        }
        setLED()
        scrollbit.show()
    }
})
function setLED () {
    for (let カウンター = 0; カウンター <= 列数; カウンター++) {
        データ = 文字データ.charAt(カウンター * 2 + 4)
        if (データ == "7") {
            scrollbit.setPixel(列, 0, 128)
            scrollbit.setPixel(列, 1, 128)
            scrollbit.setPixel(列, 2, 128)
        } else if (データ == "6") {
            scrollbit.setPixel(列, 0, 128)
            scrollbit.setPixel(列, 1, 128)
        } else if (データ == "5") {
            scrollbit.setPixel(列, 0, 128)
            scrollbit.setPixel(列, 2, 128)
        } else if (データ == "4") {
            scrollbit.setPixel(列, 0, 128)
        } else if (データ == "3") {
            scrollbit.setPixel(列, 1, 128)
            scrollbit.setPixel(列, 2, 128)
        } else if (データ == "2") {
            scrollbit.setPixel(列, 1, 128)
        } else if (データ == "1") {
            scrollbit.setPixel(列, 2, 128)
        } else {
        	
        }
        データ = 文字データ.charAt(カウンター * 2 + 5)
        if (データ == "F") {
            scrollbit.setPixel(列, 3, 128)
            scrollbit.setPixel(列, 4, 128)
            scrollbit.setPixel(列, 5, 128)
            scrollbit.setPixel(列, 6, 128)
        } else if (データ == "E") {
            scrollbit.setPixel(列, 3, 128)
            scrollbit.setPixel(列, 4, 128)
            scrollbit.setPixel(列, 5, 128)
        } else if (データ == "D") {
            scrollbit.setPixel(列, 3, 128)
            scrollbit.setPixel(列, 4, 128)
            scrollbit.setPixel(列, 6, 128)
        } else if (データ == "C") {
            scrollbit.setPixel(列, 3, 128)
            scrollbit.setPixel(列, 4, 128)
        } else if (データ == "B") {
            scrollbit.setPixel(列, 3, 128)
            scrollbit.setPixel(列, 5, 128)
            scrollbit.setPixel(列, 6, 128)
        } else if (データ == "A") {
            scrollbit.setPixel(列, 3, 128)
            scrollbit.setPixel(列, 5, 128)
        } else if (データ == "9") {
            scrollbit.setPixel(列, 3, 128)
            scrollbit.setPixel(列, 6, 128)
        } else if (データ == "8") {
            scrollbit.setPixel(列, 3, 128)
        } else if (データ == "7") {
            scrollbit.setPixel(列, 4, 128)
            scrollbit.setPixel(列, 5, 128)
            scrollbit.setPixel(列, 6, 128)
        } else if (データ == "6") {
            scrollbit.setPixel(列, 4, 128)
            scrollbit.setPixel(列, 5, 128)
        } else if (データ == "5") {
            scrollbit.setPixel(列, 4, 128)
            scrollbit.setPixel(列, 6, 128)
        } else if (データ == "4") {
            scrollbit.setPixel(列, 4, 128)
        } else if (データ == "3") {
            scrollbit.setPixel(列, 5, 128)
            scrollbit.setPixel(列, 6, 128)
        } else if (データ == "2") {
            scrollbit.setPixel(列, 5, 128)
        } else if (データ == "1") {
            scrollbit.setPixel(列, 6, 128)
        } else {
        	
        }
        列 += 1
    }
}
let 文字データ = ""
let 列数 = 0
let 列 = 0
let スクロール = 0
let 受信 = ""
let データ = ""
bluetooth.startUartService()
scrollbit.clear()
scrollbit.show()
データ = ""
受信 = ""
let 音 = 0
スクロール = 0
列 = 0
列数 = 0
文字データ = ""
