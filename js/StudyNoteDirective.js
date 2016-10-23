/**
 * Created with JetBrains WebStorm.
 * User: yj
 * Date: 16-10-22
 * Time: 下午8:11
 * To change this template use File | Settings | File Templates.
 */
lbt.directive("studyNote",["Constant",function(Constant){
    var tplPath = Constant.tplUrl;
    var imgPath = Constant.imgPath;
    return {
        restrict: "E",
        scope: {
            content: "="
        },
        replace: false,
//        templateUrl: tplPath + "StudyNoteTemplate.html",
        template:
            "<dl ng-class='{\"content-list\":true,\"mt10\":$index!=0}' ng-repeat='note in innerNoteList'>"+
            "    <dt class='title ft16'>{{($index + 1) + \"、\" + note.title}}</dt>"+
            "    <dd class='note-wrap ft14'>"+
            "        <div class='note' ng-repeat='item in note.items'>"+
            "            <div class='txt' ng-if='item.showStyle==\"txt\"'>{{item.specContent}}</div>"+
            "            <div class='img' ng-if='item.showStyle==\"img\"'>"+
            "                <img src='{{item.specContent}}' width='100%'>"+
            "            </div>"+
            "        </div>"+
            "    </dd>"+
            "</dl>",
        require: "ngModel",
        link: function($scope,element,attrs,ngModelController){
            ngModelController.$render = function(){
                $scope.innerNoteList = [];
                var specImgPath = imgPath + $scope.content.dirName;
                angular.forEach($scope.content.noteList,function(data1,index1,array){
                    $scope.innerNoteList.push({
                        "title": data1.title,
                        "items": []
                    });
                    angular.forEach(data1.items,function(data2,index2,array){
                        $scope.innerNoteList[index1].items.push({
                            "showStyle": data2.showStyle,
                            "specContent": (data2.showStyle == "img") ? specImgPath + "/" + data2.specContent : data2.specContent
                        });
                    });
                });
            };
        }
    }
}]);