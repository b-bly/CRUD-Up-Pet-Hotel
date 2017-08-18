console.log('js');

var app = angular.module('PetApp', []);

app.controller('PetController', ['$http', function($http) {
    console.log('Pet controller has been loaded');
    var self = this;
    self.owners = [];

    self.postOwner = function() {
        $http({
            method: 'POST',
            url: '/pets',
            data: self.newOwner
        }).then(function(response) {
            console.log(response)
            self.getOwners();    //will need get function call
        });
    }

    self.getOwners = function(){
        $http({
            method: 'GET',
            url: '/pets',
        }).then(function (response){
            console.log(response);
            console.log(response.data);
            self.owners = response.data;
        });

    };
    
}]);