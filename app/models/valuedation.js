class Valuedation {
    constructor() {}
    KiemTraDuLieu(paraInput, idReport, funcCheck, mesage) {
        let reportE = document.getElementById(idReport)
        if (funcCheck(paraInput)) {
            reportE.style.display = 'none'
            return true;
        } else {

            reportE.style.display = 'block'
            reportE.innerHTML = mesage
            return false
        }
    }
    KiemTraRong(paraInput) {
        let elem = document.getElementById(paraInput[0])
        if (elem.value == '') {
            return false
        }
        return true
    }
    KiemTraDoDaiInput(paraInput) {
        let len = document.getElementById(paraInput[0]).value.length
        if (len >= 4 && len <= 16) {
            return true

        }
        return false
    }
    KiemTraMail(paraInput) {
        let elem = document.getElementById(paraInput[0])
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (elem.value.match(mailformat)) {
            return true
        } else
            return false
    }
    kiemtranumber(paraInput) {
        let elem = document.getElementById(paraInput[0])
        var numbers = /^[0-9]+$/
        if (elem.value.match(numbers))
            return true
        return false
    }
    kiemtratrung(paraInput) {
        let ret = document.getElementById(paraInput[0]).value;
        let arrMa = [];
        paraInput[1].map(function(elem) {
            arrMa.push(elem.taiKhoan)
        })
        if (arrMa.indexOf(ret) > -1)
            return false;
        return true;
    }
}