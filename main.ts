input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("Y")
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    受信 = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Fullstop))
    データ = 受信.charAt(0)
    if (データ == "Z") {
        全列数 = 0
        全受信データ = ""
        scrollbit.clear()
        scrollbit.show()
    } else if (データ == "R") {
        if (音 == 1) {
            music.playTone(988, music.beat(BeatFraction.Sixteenth))
        }
        if (スクロール == 0) {
            表示位置 = 0
            setLED()
        } else {
            表示位置 = 0
            scrollbit.clear()
            scrollbit.show()
            スクロールスタート = 1
        }
    } else {
        列の開始位置 = parseFloat(受信.substr(1, 3))
        このデータの列数 = (受信.length - 4) / 2
        if (列の開始位置 == 0) {
            if (データ == "2" || データ == "3") {
                音 = 1
            } else {
                音 = 0
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
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("N")
})
function setLED () {
    scrollbit.clear()
    for (let カウンター = 0; カウンター <= 17; カウンター++) {
        列のデータ = 全受信データ.charAt((カウンター + 表示位置) * 2)
        if (列のデータ == "7") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 1, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (列のデータ == "6") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 1, 128)
        } else if (列のデータ == "5") {
            scrollbit.setPixel(カウンター, 0, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (列のデータ == "4") {
            scrollbit.setPixel(カウンター, 0, 128)
        } else if (列のデータ == "3") {
            scrollbit.setPixel(カウンター, 1, 128)
            scrollbit.setPixel(カウンター, 2, 128)
        } else if (列のデータ == "2") {
            scrollbit.setPixel(カウンター, 1, 128)
        } else if (列のデータ == "1") {
            scrollbit.setPixel(カウンター, 2, 128)
        }
        列のデータ = 全受信データ.charAt((カウンター + 表示位置) * 2 + 1)
        if (列のデータ == "F") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (列のデータ == "E") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (列のデータ == "D") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (列のデータ == "C") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 4, 128)
        } else if (列のデータ == "B") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (列のデータ == "A") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (列のデータ == "9") {
            scrollbit.setPixel(カウンター, 3, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (列のデータ == "8") {
            scrollbit.setPixel(カウンター, 3, 128)
        } else if (列のデータ == "7") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (列のデータ == "6") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (列のデータ == "5") {
            scrollbit.setPixel(カウンター, 4, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (列のデータ == "4") {
            scrollbit.setPixel(カウンター, 4, 128)
        } else if (列のデータ == "3") {
            scrollbit.setPixel(カウンター, 5, 128)
            scrollbit.setPixel(カウンター, 6, 128)
        } else if (列のデータ == "2") {
            scrollbit.setPixel(カウンター, 5, 128)
        } else if (列のデータ == "1") {
            scrollbit.setPixel(カウンター, 6, 128)
        }
    }
    scrollbit.show()
}
let 列のデータ = ""
let 文字データ部分 = ""
let このデータの列数 = 0
let 表示位置 = 0
let スクロールスタート = 0
let 全受信データ = ""
let 全列数 = 0
let 列の開始位置 = 0
let スクロール = 0
let 音 = 0
let 受信 = ""
let データ = ""
bluetooth.startUartService()
scrollbit.clear()
scrollbit.show()
データ = ""
受信 = ""
音 = 0
スクロール = 0
列の開始位置 = 0
全列数 = 0
全受信データ = ""
スクロールスタート = 0
basic.forever(function () {
    if (スクロールスタート != 0) {
        if (全列数 > 表示位置) {
            setLED()
            表示位置 += 1
        } else {
            basic.showString("X")
            スクロールスタート = 0
            表示位置 = 0
            scrollbit.clear()
            scrollbit.show()
        }
    }
    basic.pause(50)
})
