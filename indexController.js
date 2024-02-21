window.indexController = function($scope,$http){
    $scope.title = "Đây là trang danh sách nhân viên"

    const apiPost = 'http://localhost:3000/post'

    $http.get(apiPost)
    .then(function(response){
        if(response.status == 200){
            $scope.listPost = response.data
        }
    })
    $scope.deletePost = function(id){
        let confirm = window.confirm("Bạn có muốn xoá không")
        if(confirm){
            $http.delete(`${apiPost}/${id}`)
            .then(function(response){
                if(response.status == 200){
                    alert("Xoá thành công")
                }
            })
        }
    }
}