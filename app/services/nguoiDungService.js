class NguoiDungService {

    layNguoiDung() {
        return axios.get('http://5dbacba23ec5fb0014319410.mockapi.io/api/service')
    }
    themNguoiDung(nv) {
        return axios.post('http://5dbacba23ec5fb0014319410.mockapi.io/api/service', nv);
    }
    xoaNguoiDung(id) {
        return axios.delete(
            `http://5dbacba23ec5fb0014319410.mockapi.io/api/service/${id}`
        )

    }
    layNguoiDungId(id) {
        return axios.get(
            `http://5dbacba23ec5fb0014319410.mockapi.io/api/service/${id}`);
    }
    capnhatNguoiDung(id, nv) {
        return axios.put(
            `http://5dbacba23ec5fb0014319410.mockapi.io/api/service/${id}`, nv
        );
    }
}