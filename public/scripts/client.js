console.log('js');

var app = angular.module('PetApp', []);

app.controller('PetController', ['$http', function($http) {
    console.log('Pet controller has been loaded');
    var self = this;
    self.owners = [];
    self.ownersStrings = [];

function concatNames(owners) {
    owners.forEach(function(nameObj, i) {
         ownersStrings.push(response.first_name + ' ' + response.last_name);
    });
}

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