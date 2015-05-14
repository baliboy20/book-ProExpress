/**
 * Created by williampaulton on 13/05/2015.
 */
console.log("Filw is seenn++++++")
mod.controller('entryformCtrl',function($scope,$http){
    $scope.name = "Alice";
    $scope.email = "alice@paulton.co.uk";
    $scope.con
    console.log(' this is going well');

    $scope.saveData = function(){
        console.log('save dtat');
        var contact = $scope.contact;
        $http.post("http://localhost:3000/listusers",{name:contact.name, email:contact.email})
            .success(function(data){
                console.log('succeeded');
            }

        )
            .error(function(err){
                console.log('post failed');
            });
    };

    $http.get("http://localhost:3000/listusers")
        .success(function(data){
        console.log("http request succcessful" + data.data);
        }).error(function(err){
        console.log("Error: request failed");
    });
    $scope.contacts = [
        {name:"naem", email:"email"},
        {name:"naem1", email:"email1"},
        {name:"naem2", email:"email2"},
        {name:"naem3", email:"email3"}
    ];

});

