window.updateController = function($scope, $http, $location, $routeParams){
    $scope.title = "Đây là trang sửa bài viêt"

    const apiPost = "http://localhost:3000/post"
    let idPost = $routeParams.id;

    $http.get(`${apiPost}/${idPost}`)
    .then(function(response){
        if (response.status == 200) {
            let date = new Date(response.data.ngay_sinh)
            $scope.post = {
                ho_ten: response.data.ho_ten,
                sdt: response.data.sdt,
                email: response.data.email,
                chuc_vu: response.data.chuc_vu,
                ngay_sinh: date,
            }
        }
    })

    $scope.updatePost = function(){
        let formatDate = $scope.post.ngay_sinh.toISOString().split('T')[0];
        let newPost = {
            ho_ten: response.data.ho_ten,
                sdt: response.data.sdt,
                email: response.data.email,
                chuc_vu: response.data.chuc_vu,
                ngay_sinh: date,
        }
        // console.log(newPost);
        $http.put(`${apiPost}/${idPost}`, newPost)
        .then(function(response){
            if (response.status == 200) {
                alert("sửa thành công")
                $location.path('/list-employee')
            }
        })
    }
}