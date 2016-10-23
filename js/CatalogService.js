/**
 * Created with JetBrains WebStorm.
 * User: yj
 * Date: 16-10-22
 * Time: 下午2:21
 * To change this template use File | Settings | File Templates.
 */
lbt.service("CatalogService",["DeepIntoComputerData","DeepIntoCodeData",function(DeepIntoComputerData,DeepIntoCodeData){
    var args = [].slice.call(arguments,0);
    function getCatalogData(){
        var catalogData = [];
        angular.forEach(args, function(data,index,array){
            catalogData[index]=data;
        });
        return catalogData;
    }
    return {
        getCatalogData: getCatalogData
    };
}]);