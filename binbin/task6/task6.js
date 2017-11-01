function initial(){
  var text = document.getElementById('text');
  var leftIn = document.getElementById('left_in');
  var leftOut = document.getElementById('left_out');
  var rightIn = document.getElementById('right_in');
  var rightOut = document.getElementById('right_out');
  var sortData = document.getElementById('sort_data1');
  var sortData2 = document.getElementById('sort_data2');
  var section = document.getElementById('section');
  var add = document.getElementById('add');
  var searchText = document.getElementById('search_text');
  var search = document.getElementById('search');
/*
  //检测输入
  function test(){
    var value = text.value;
    if(section.children.length <= 60){
      if(value == ''){
        alert('请输入一个数字');
        return false;
      }else if(!isNaN(value)){
        if(value >= 10 && value <= 100){
          return value;
        }else{
          alert('请输入10~100之间的数字');
          return false;
        }
      }else{
        alert('类型错误，请输入数字！');
        return false;
      }
    }else{
      alert('队列数量不能超过60');
      return false;
    }
  }
  */
  //添加
  // console.log(value);
  add.addEventListener('click',function(){
    var newLi = document.createElement('li');
    newLi.innerHTML = text.value;
    section.insertBefore(newLi,section.firstChild);
  });

  //查询
  search.addEventListener('click',function(){
    var lis = section.getElementsByTagName('li');
    for(var i=0;i<lis.length;i++){
      lis[i].style.backgroundColor = 'red';
    }
    var sText = searchText.value;
    // console.log(sText);
    var pattern = new RegExp(sText,'g');
    for(i=0;i<lis.length;i++){
      if(pattern.test(lis[i].innerHTML)){
        lis[i].style.backgroundColor = '#39f114';
      }
      // console.log(lis[i].innerHTML);
    }
  });

  //文本框/输入框得到焦点，清除数据
  searchText.addEventListener('focus',function(){
    searchText.value = '';
  });

  text.addEventListener('focus',function(){
    // console.log(text.value);
    text.value = '';
  });

  //左侧入
  leftIn.addEventListener('click',function(){
    // var num = test();
    // var newLi = document.createElement('li');
    // // console.log(newLi);
    // newLi.style.height = value*2+'px';
    // section.insertBefore(newLi,section.firstChild);
    alert('暂时取消使用！');
  });

  //右侧入
  rightIn.addEventListener('click',function(){
    // var num = test();
    // var newLi = document.createElement('li');
    // newLi.style.height = value*2+'px';
    // section.insertBefore(newLi,null);
    alert('暂时取消使用！');
  });

  //左侧出
  leftOut.addEventListener('click',function(){
    var firstRemove = section.children[0];
    // console.log(firstRemove);
    section.removeChild(firstRemove);
    // alert(parseInt(firstRemove.style.height));
  });

  //右侧出
  rightOut.addEventListener('click',function(){
    var lastRemove = section.children[section.children.length-1];
    // console.log(lastRemove);
    section.removeChild(lastRemove);
    // alert(parseInt(lastRemove.style.height));
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
    // var lis = section.getElementsByTagName('li');
    // var temp;
    // for(var i = 0;i<lis.length-1;i++){
    //   for(var j = 0;j<lis.length-i-1;j++){
    //     // console.log(parseInt(lis[i].style.height));
    //     // console.log(parseInt(lis[i+1].style.height));
    //     if(parseInt(lis[j].style.height) > parseInt(lis[j+1].style.height)){
    //       temp = lis[j].style.height;
    //       lis[j].style.height = lis[j+1].style.height;
    //       lis[j+1].style.height = temp;
    //     }
    //   }
    // }
    alert('暂时取消使用！');
  });

}
window.addEventListener('load',initial);

/*优化*/
//怎么添加遍历所有li，没有匹配到时弹出‘没有匹配值’？

/*问题*/
// 为什么不能用value全局变量直接代替text.value？
//在事件代理删除中，为什么for循环的方法虽然可以实现删除，可是出错？
