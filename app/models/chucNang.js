class ChucNang {
    outPut(arr) {
        let content = '';
        if (arr) {
            arr.map(function(elem, index) {
                content += `
            <tr id=${elem.taikhoan}>
            <td>${index}</td>
            <td>${elem.taiKhoan}</td>
            <td>${elem.matKhau}</td>
            <td>${elem.hoTen}</td>
            <td>${elem.email}</td>
            <td>${elem.SoDT}</td>
            <td>${elem.maLoai}</td>
            <td>
                <button class='btn btn-primary' data-toggle="modal" data-target="#myModal" onclick='sua(${elem.id})' >Sua</button>
                <button class='btn btn-danger' onclick='xoa(${elem.id})'>Xoa</button>
            </td>
            </tr>
            `
            });
        }
        document.getElementById('tblDanhSachNguoiDung').innerHTML = content;
    }
    domFormValue() {
        return [
            document.getElementById('TaiKhoan').value,
            document.getElementById('HoTen').value,
            document.getElementById('MatKhau').value,
            document.getElementById('Email').value,
            document.getElementById('SoDienThoai').value,
            document.getElementById('loaiNguoiDung').value

        ]
    }
    domForm() {
        return [
            document.getElementById('TaiKhoan').id,
            document.getElementById('HoTen').id,
            document.getElementById('MatKhau').id,
            document.getElementById('Email').id,
            document.getElementById('SoDienThoai').id,
            document.getElementById('loaiNguoiDung').id
        ]
    }
}