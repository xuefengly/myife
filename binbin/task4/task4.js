var text = document.getElementById('text');
var leftIn = document.getElementById('left_in');
var leftOut = document.getElementById('left_out');
var rightIn = document.getElementById('right_in');
var rightOut = document.getElementById('right_out');
var section = document.getElementById('section');

//左侧入
leftIn.addEventListener('click',function(){
  if(text.value == ''){
    alert('请输入一个数字');
  }else if(!isNaN(text.value)){
    var newLi = document.createElement('li');
    // console.log(newLi);
    var textNode = document.createTextNode(text.value);
    newLi.appendChild(textNode);
    section.insertBefore(newLi,section.firstChild);
  }else{
    alert('类型错误，请输入数字！');
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
    section.insertBefore(newLi,null);
  }else{
    alert('类型错误，请输入数字！');
  }
});

//左侧出
leftOut.addEventListener('click',function(){
  var firstRemove = section.children[0];
  // console.log(firstRemove);
  section.removeChild(firstRemove);
  alert(firstRemove.innerHTML);
});

//右侧出
rightOut.addEventListener('click',function(){
  var lastRemove = section.children[section.children.length-1];
  // console.log(lastRemove);
  section.removeChild(lastRemove);
  alert(lastRemove.innerHTML);
});

//点击删除(运用事件代理/委托)
section.addEventListener('click',function(){
  // for(var i = 0;i<section.children.length;i++){
  //   section.removeChild(event.target);
  // }
  if(event.target.nodeName.toLowerCase() == 'li'){
    section.removeChild(event.target);
  }
});






// 为什么不能用value全局变量直接代替text.value？
//在事件代理删除中，为什么for循环的方法虽然可以实现删除，可是出错？
