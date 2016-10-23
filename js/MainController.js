/**
 * Created with JetBrains WebStorm.
 * User: yj
 * Date: 16-10-22
 * Time: 下午2:22
 * To change this template use File | Settings | File Templates.
 */
lbt.controller("MainController", ["$scope","CatalogService", function($scope,CatalogService){
    $scope.catalogData = CatalogService.getCatalogData();
    $scope.catalogData[0].chapters[0].active = true;
    $scope.curNote = $scope.catalogData[0].chapters[0].content;
    $scope.animateData={
        slide:false
    };
    $scope.fnSwipeLeft = function(e,catalogIndex,chapterIndex){
        $scope.animateData.slide = false;
        if(catalogIndex == undefined || chapterIndex == undefined){
            return;
        }
        angular.forEach($scope.catalogData,function(data1,index1){
            angular.forEach(data1.chapters,function(data2,index2){
                $scope.catalogData[index1].chapters[index2].active = false;
            });
        });
        $scope.curNote = $scope.catalogData[catalogIndex].chapters[chapterIndex].content;
        $scope.catalogData[catalogIndex].chapters[chapterIndex].active = true;
    };
    $scope.fnSwipeRight=function(e){
        $scope.animateData.slide = true;
    };
}]);