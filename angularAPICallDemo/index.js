var app= angular.module('myApp',[]);
app.controller("myCtrl",function($scope,$http){
    $scope.users= null

    // console.log($http.get('https://jsonplaceholder.typicode.com/users'));
    $http.get('https://jsonplaceholder.typicode.com/users')
    .then( function(res){
        // console.log(res.data)
        $scope.users=res.data
        // console.log($scope.users)
    },function(response){
        $scope.users=response.data
    })

    
        


    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(function(Response){
    //     console.log('Fetch Success');
    //     console.log(Response.data);
    // },function(Response){

    //     console.log('Fetch failed');
    // });

    
});



// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=> {
//     if(res.ok) {
//         console.log('SUCCESS');
//         return res.json();
//     } else {
//         console.log('Failed')
//     }
// })
// .then((data) => console.log(data))
// .catch(error=> console.log('Error'))
// ;  