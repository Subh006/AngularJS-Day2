var app = angular.module('myApp',[]);

app.controller('myController',["$scope", ($scope)=>{
    
}]);

app.directive("myDirc",()=>{
    return{
        restrict:'A',
        template: "<h1>Hello Subhajeet</h1>",
        controller: 'myController'
    }
})

app.directive("myDirc2",()=>{
    return{
        restrict:'E',
        template: "<h1>This is custom directive</h1>",
        controller: 'myController'
    }
})