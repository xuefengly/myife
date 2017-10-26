var text = document.getElementById('text');
var leftIn = document.getElementById('left_in');
var leftOut = document.getElementById('left_out');
var rightIn = document.getElementById('right_in');
var rightOut = document.getElementById('right_out');
var section = document.getElementById('section');

//左侧入
leftIn.addEventListener('click',function(){
  if(text.value == ''){//input里为空格时
    alert('请输入一个数字');
  }else if(!isNaN(text.value)){//输入的为数字时
    var newLi = document.createElement('li');
    // console.log(newLi);
    var textNode = document.createTextNode(text.value);
    newLi.appendChild(textNode);//把input文本添加到li里
    section.insertBefore(newLi,section.firstChild);//把li添加为ul的第一个子元素
  }else{
    alert('类型错误，请输入数字！');//输入的不是数字
  }
});

//右侧入
rightIn.addEventListener('click',function(){
    if(text.value == ''){
    alert('请输入一个数字');
  }else if(!isNaN(text.value)){
    var newLi = document.createElement('li');
    // console.log(newLi);
    var textNode = document.createTextNode(text.value);
    newLi.appendChild(textNode);
    section.insertBefore(newLi,null);//把li添加为ul的最后一个子元素
  }else{
    alert('类型错误，请输入数字！');
  }
});

//左侧出
leftOut.addEventListener('click',function(){
  var firstRemove = section.children[0];//获取ul的第一个子元素
  // console.log(firstRemove);
  section.removeChild(firstRemove);//删除第一个子元素
  alert(firstRemove.innerHTML);
});

//右侧出
rightOut.addEventListener('click',function(){
  var lastRemove = section.children[section.children.length-1];//获取ul的最后一个子元素
  // console.log(lastRemove);
  section.removeChild(lastRemove);
  alert(lastRemove.innerHTML);
});

//点击删除(运用事件代理/委托)
section.addEventListener('click',function(){
  // for(var i = 0;i<section.children.length;i++){
  //   section.removeChild(event.target);
  // }
  if(event.target.nodeName.toLowerCase() == 'li'){//判断点击元素是li
    section.removeChild(event.target);
  }
});






//1. 为什么不能用value全局变量直接代替text.value？
//2.在事件代理删除中，为什么for循环的方法虽然可以实现删除，可是出错？
/*回答2：猜想:用for遍历了ul的所有li,但是里面执行的跟li没有关系，只是限定删除点击元素，而且因为for循环执行多次（然而第一次已经删除，所以出错）。*/
