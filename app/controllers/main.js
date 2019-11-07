var chucnang = new ChucNang();
var NDService = new NguoiDungService();
var valueda = new Valuedation();
NDService.layNguoiDung()
    .then(function(result) {
        chucnang.outPut(result.data);
    })
    .catch(function(e) {
        console.log(e);
    });

document.getElementById('btnThemNguoiDung').addEventListener('click', function() {
    s = ` <button class="btn btn-primary" id='themMoi'>Them</button>`;
    document.getElementsByClassName('modal-footer')[0].innerHTML = s;
    document.getElementById('themMoi').addEventListener('click', function() {

        checkForm().then(function(result) {
            if (result) {
                var values = chucnang.domFormValue()
                let nd = new NguoiDung(values[0], values[1], values[2], values[3], values[4], values[5]);
                NDService.themNguoiDung(nd)

                NDService.layNguoiDung()
                    .then(function(result) {
                        chucnang.outPut(result.data);
                    })
            }
        })
    })
})
var checkForm = function() {
    return NDService.layNguoiDung().
    then(function(result) {
        return result.data
    }).
    then(function(result) {
        let ids = chucnang.domForm();
        let check = true;
        check &= valueda.KiemTraDuLieu([ids[0]], `${ids[0]}_message`, valueda.KiemTraRong, '(*) Tài khoản không được rỗng') &&
            valueda.KiemTraDuLieu([ids[0], result], `${ids[0]}_message`, valueda.kiemtratrung, '(*) Tài khoản đã tồn tại');
        check &= valueda.KiemTraDuLieu([ids[1]], `${ids[1]}_message`, valueda.KiemTraRong, '(*) Họ tên không được rỗng');
        check &= valueda.KiemTraDuLieu([ids[2]], `${ids[2]}_message`, valueda.KiemTraRong, '(*) Mật khẩu không được rỗng');
        check &= valueda.KiemTraDuLieu([ids[3]], `${ids[3]}_message`, valueda.KiemTraRong, '(*) Email không được rỗng') &&
            valueda.KiemTraDuLieu([ids[3]], `${ids[3]}_message`, valueda.KiemTraMail, '(*) Email không hợp lệ');
        check &= valueda.KiemTraDuLieu([ids[4]], `${ids[4]}_message`, valueda.KiemTraRong, '(*) Số điện thoại không được rỗng') &&
            valueda.KiemTraDuLieu([ids[4]], `${ids[4]}_message`, valueda.kiemtranumber, '(*) Số điện thoại không đúng');
        return check;
    });

}

var taoMessage = function() {
    let a = document.getElementsByClassName('form-group');
    let ids = chucnang.domForm();
    let j = 0;
    for (let i of a) {
        let spanTag = document.createElement('span');
        spanTag.textContent = '(*) Không họp lệ';
        spanTag.style.color = 'red';
        spanTag.style.display = 'none';
        spanTag.id = `${ids[j]}_message`;
        j++;
        i.appendChild(spanTag);
    }
}
taoMessage()

function xoa(id) {
    console.log(id)
    NDService.xoaNguoiDung(id).then(function() {
        NDService.layNguoiDung()
            .then(function(result) {
                chucnang.outPut(result.data);
            })
    })
}

function sua(id) {
    document.getElementsByClassName('modal-title')[0].innerHTML = 'Sua Nguoi Dung';
    var btn = `<button class='btn btn-primary' id='capnhatND'>Cap nhat</button>`
    document.getElementsByClassName('modal-footer')[0].innerHTML = btn;
    NDService.layNguoiDungId(id).then(function(result) {
        return (result.data);
    }).then(function(data) {
        var domId = chucnang.domForm();
        document.getElementById(domId[0]).value = data.taiKhoan;
        document.getElementById(domId[1]).value = data.hoTen;
        document.getElementById(domId[2]).value = data.matKhau;
        document.getElementById(domId[3]).value = data.email;
        document.getElementById(domId[4]).value = data.SoDT;
        document.getElementById(domId[5]).value = data.maLoai;
    })
    document.getElementById('capnhatND').addEventListener('click', function() {
        var values = chucnang.domFormValue()
        let nd = new NguoiDung(values[0], values[1], values[2], values[3], values[4], values[5]);
        NDService.capnhatNguoiDung(id, nd).then(function() {
            NDService.layNguoiDung()
                .then(function(result) {
                    chucnang.outPut(result.data);
                })
        })
    })
}
document.getElementById('kiem').addEventListener('keyup',
    function() {
        var kq = [];
        NDService.layNguoiDung().then(function(result) {
            console.log('Tim kiem');
            return result.data;
        }).then(function(data) {
            kq = data.filter(function(elem) {
                return elem.hoTen.indexOf(document.getElementById('kiem').value) > -1;
            })
            chucnang.outPut(kq);
        })
    });

// }).then(function(kq) {
//     chucnang.outPut(kq);
// })