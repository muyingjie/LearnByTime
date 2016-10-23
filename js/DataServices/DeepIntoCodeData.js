/**
 * Created with JetBrains WebStorm.
 * User: yj
 * Date: 16-10-22
 * Time: 下午2:48
 * To change this template use File | Settings | File Templates.
 */
lbt.service("DeepIntoCodeData",[function(){
    return {
        "name": "编码的奥秘",
        "chapters": [{
            "name":"二进制",
            "content":{
                "dirName": "DeepIntoCode",
                "noteList": [{
                    "title": "二进制介绍",
                    "items": [{
                        showStyle: "txt",
                        specContent: "二进制具体内容"
                    },{
                        showStyle: "img",
                        specContent: "aaa.png"
                    }]
                }]
            }
        }]
    };
}]);