// var app = angular.module('hari',['ngRoute','ngResource']);
//
// app.config(function ($routeProvider,$locationProvider){
//     $routeProvider
//         .when('/',{
//             templateUrl:'templates/index.html',
//             controller:'myFirst'
//         })
// })

var app = angular.module('hari',[])
    .controller('myFirst',function ($scope){
        $scope.name = "Bahubali"
    });













// var uploadApp = angular.module('fileUploadApp',[]);
//
// uploadApp.directive('fileModel',['$parse',function ($parse){
//     return {
//         restrict: 'A',
//         link: function (scope,element,attrs){
//             var model = $parse(attrs.fileModel);
//             var modelSetter = model.assign;
//
//             element.bind('change',function (){
//                 scope.$apply(function (){
//                     modelSetter(scope,element[0].files[0]);
//                 });
//             });
//         }
//     };
// }
// ]);