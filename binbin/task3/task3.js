/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */

function getData() {
  /*
  coding here
  */
  var source = document.getElementById('source');
  // console.log(source);
  var data = [];
  var lis = source.getElementsByTagName('li');
  for(var i = 0;i<lis.length;i++){
    var text = lis[i].innerHTML.split('空气质量：')[0];//用分割获取城市名称
    var num = lis[i].children[0].innerHTML;//获取数字
    // console.log(text);
   // console.log(num);
   data.push([text,num]);//添加入数组
  }
  // console.log(data);
  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */

  return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {
  //冒泡排序
    var temp;
    for(var i=0;i<data.length;i++){
      //开始两个互换，把数字大的换到后面，一层循环只能把最大的换到最后面
      for(var j=0;j<data.length-i-1;j++){
        //由于最后是最大已确定，所以j<data.length-i-1;
        if(data[j][1]>data[j+1][1]){
          temp = data[j];//把数字更大的数据存在temp中
          data[j] = data[j+1];//把数字更小的换到前面
          data[j+1] = temp;//把之前存的数字更大的数据换到后面
        }
      }
    }
    return data;
}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {
  var resort = document.getElementById('resort');
  for(var i=0;i<data.length;i++){
    resort.innerHTML += '<li>'+'第'+(i+1)+'名：'+data[i][0]+'空气质量: '+'<b>'+data[i][1]+'</b>'+'</li>';
    //添加进列表，待优化
  }
}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}

function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
  var sortBtn = document.getElementById('sort-btn');
  sortBtn.onclick = function(){
    btnHandle();
  };
}

init();
