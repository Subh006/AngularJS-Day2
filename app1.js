var app = angular.module('myApp1',[]);

app.controller('myController1',['$scope', ($scope)=>{

    $scope.visible=false;
    $scope.show=() => {
        $scope.visible=true;
    }

    $scope.employees = [
        {
            fname:"Subhajeet",
            lname:"Mohanty",
            salary:28000
        },
        {
            fname:"Ankita",
            lname:"Swain",
            salary:15000
        },
        {
            fname:"Priyanka",
            lname:"Priyadrsinee",
            salary:25000
        },
        {
            fname:"Subhankar",
            lname:"Mohanty",
            salary:55000
        }
    ]
}]);