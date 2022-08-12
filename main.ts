input.onButtonPressed(Button.A, function () {
    受信 = ""
    全列数 = 0
    全受信データ = ""
    scrollbit.clear()
    scrollbit.show()
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    受信 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))
    データ = 受信.charAt(0)
    basic.showString(データ)
    if (データ == "Z") {
        全列数 = 0
        全受信データ = ""
        scrollbit.clear()
        scrollbit.show()
    } else if (データ == "R") {
        scrollbit.clear()
        scrollbit.show()
        表示位置 = 0
        setLED()
    } else {
        列の開始位置 = parseFloat(受信.substr(1, 3))
        このデータの列数 = 受信.length - 4
        if (列の開始位置 == 0) {
            if (データ == "2" || データ == "3") {
                music.playTone(988, music.beat(BeatFraction.Sixteenth))
            }
        }
        if (データ == "1" || データ == "3") {
            スクロール = 1
        }
        文字データ部分 = 受信.substr(4, 受信.length - 4)
        if (列の開始位置 == 0) {
            全受信データ = 文字データ部分
            全列数 = このデータの列数
        } else {
            全受信データ = "" + 全受信データ + 文字データ部分
            全列数 = 全列数 + このデータの列数
        }
    }
})
function setLED () {
    for (let カウンター = 0; カウンター <= 17; カウンター++) {
        データ = 全受信データ.charAt((カウンター + 表示位置) * 2)
        if (データ == "7") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 1, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (データ == "6") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 1, 128)
        } else if (データ == "5") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (データ == "4") {
            scrollbit.setPixel(カウンター, 0, 128)
        } else if (データ == "3") {
            scrollbit.setPixel(カウンター, 1, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (データ == "2") {
            scrollbit.setPixel(カウンター, 1, 128)
        } else if (データ == "1") {
            scrollbit.setPixel(カウンター, 2, 128)
        }
        データ = 全受信データ.charAt((カウンター + 表示位置) * 2 + 1)
        if (データ == "F") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "E") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "D") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "C") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
        } else if (データ == "B") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "A") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "9") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "8") {
            scrollbit.setPixel(カウンター, 3, 128)
        } else if (データ == "7") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "6") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "5") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "4") {
            scrollbit.setPixel(カウンター, 4, 128)
        } else if (データ == "3") {
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (データ == "2") {
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (データ == "1") {
            scrollbit.setPixel(カウンター, 6, 128)
        }
    }
}
let 文字データ部分 = ""
let このデータの列数 = 0
let 表示位置 = 0
let 全受信データ = ""
let 全列数 = 0
let 列の開始位置 = 0
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
列の開始位置 = 0
全列数 = 0
全受信データ = ""
