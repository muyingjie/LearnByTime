/**
 * Created with JetBrains WebStorm.
 * User: yj
 * Date: 16-10-22
 * Time: 下午2:48
 * To change this template use File | Settings | File Templates.
 */
lbt.service("DeepIntoComputerData",[function(){
    return {
        "name": "穿越计算机的迷雾",
        "chapters": [{
            "name":"电流和电压",
            "content":{
                "dirName": "DeepIntoComputer",
                "noteList":[{
                    "title": "电流和电压的产生原理",
                    "items": [{
                        showStyle: "txt",
                        specContent: "电池的作用就像内部安了一个电泵，它促使整个线路中的电子像水流一样不停地循环流动。当\"电泵\"开始工作时，它的任务是从电线一边的原子那里夺走自由电子，并将它们送给电线另一边的原子。这样，失去电子的原子很着急，而得到电子的原子也不会因为自己的电子多了而高兴，它们都急切地想要找回电子或者扔掉包袱而重新达到稳定状态。在这种情况下，电压产生了。"
                    }]
                },{
					"title": "电压的本质",
					"items": [{
						showStyle:"txt",
						specContent:"电压是一种吸引力，是由于失去电子和希望重新得到电子而引起的。电压的存在是导致电流产生的原因"
					}]
				}]
            }
        },{
            "name":"加法机",
            "content":{
                "dirName": "DeepIntoComputer",
                "noteList":[{
                    "title": "加法机引入",
                    "items": [{
                        showStyle: "txt",
                        specContent: "考虑上进位的情况，二进制数的相加总共有8种情况"
                    },{
                        showStyle: "img",
                        specContent: "binary-addition.png"
                    },{
                        showStyle: "txt",
                        specContent: "全加器的构造如下"
                    },{
                        showStyle:"img",
                        specContent:"full-adder-structrue.png"
                    }]
                }]
            }
        }]
    };
}]);