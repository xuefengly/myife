function initial(){
  var text = document.getElementById('text');
  var leftIn = document.getElementById('left_in');
  var leftOut = document.getElementById('left_out');
  var rightIn = document.getElementById('right_in');
  var rightOut = document.getElementById('right_out');
  var sortData = document.getElementById('sort_data1');
  var sortData2 = document.getElementById('sort_data2');
  var section = document.getElementById('section');

  //左侧入
  leftIn.addEventListener('click',function(){
    if(section.children.length <= 60){
      if(text.value == ''){
        alert('请输入一个数字');
      }else if(!isNaN(text.value)){
        if(text.value >= 10 && text.value <= 100){
          var newLi = document.createElement('li');
          // console.log(newLi);
          newLi.style.height = text.value*2+'px';
          section.insertBefore(newLi,section.firstChild);
        }else{
          alert('请输入10~100之间的数字');
        }
      }else{
        alert('类型错误，请输入数字！');
      }
    }else{
      alert('队列数量不能超过60');
    }
  });

  //右侧入
  rightIn.addEventListener('click',function(){
    if(section.children.length <= 60){
      if(text.value == ''){
        alert('请输入一个数字');
      }else if(!isNaN(text.value)){
        if(text.value >= 10 && text.value <= 100){
          var newLi = document.createElement('li');
          newLi.style.height = text.value*2+'px';
          section.insertBefore(newLi,null);
        }else{
          alert('请输入10~100之间的数字');
        }
      }else{
        alert('类型错误，请输入数字！');
      }
    }else{
      alert('队列数量不能超过60');
    }
  });

  //左侧出
  leftOut.addEventListener('click',function(){
    var firstRemove = section.children[0];
    // console.log(firstRemove);
    section.removeChild(firstRemove);
    alert(parseInt(firstRemove.style.height));
  });

  //右侧出
  rightOut.addEventListener('click',function(){
    var lastRemove = section.children[section.children.length-1];
    // console.log(lastRemove);
    section.removeChild(lastRemove);
    alert(parseInt(lastRemove.style.height));
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

  //排序
  sortData.addEventListener('click',function(){
    var lis = section.getElementsByTagName('li');
    var temp;
    for(var i = 0;i<lis.length-1;i++){
      for(var j = 0;j<lis.length-i-1;j++){
        // console.log(parseInt(lis[i].style.height));
        // console.log(parseInt(lis[i+1].style.height));
        if(parseInt(lis[j].style.height) > parseInt(lis[j+1].style.height)){
          temp = lis[j].style.height;
          lis[j].style.height = lis[j+1].style.height;
          lis[j+1].style.height = temp;
        }
      }
    }
  });
}
window.addEventListener('load',initial);




// 为什么不能用value全局变量直接代替text.value？
//在事件代理删除中，为什么for循环的方法虽然可以实现删除，可是出错？
