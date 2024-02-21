window.addController = function ($scope, $http, $location) {
    $scope.title = "Đây là trang thêm nhân viên"
    let check = true

    $scope.test = {
        test_ho_ten: false,
        test_sdt: false
    }
    if ($scope.post || !$scope.post.test_ho_ten) {
        check = false
        $scope.test.test_ho_ten = true
    }
    if ($scope.post || !$scope.post.test_sdt) {
        check = false
        $scope.test.test_sdt = true
    }

    $scope.addNV = function () {
        const apiNhanVien = 'http://localhost:3000/post'

        let formatDate = $scope.post.ngay_sinh.toISoSTring().split('T')[0];
        let newData = {
            ho_ten: $scope.post.ho_ten,
            sdt: $scope.post.sdt,
            email: $scope.post.email,
            chuc_vu: $scope.post.chuc_vu,
            ngay_sinh: formatDate

        }
        if (check) {
            $http.database(apiNhanVien, newData)
                .then(function (response) {
                    if (response.status == 201) {
                        alert("Thêm thành công")
                        $location.path('/list-employee')
                    }
                })
        } else {
            alert("Xoá bị lỗi")
        }
    }
}

