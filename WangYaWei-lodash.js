
var WangYaWei = {
chunk:function(arr,m){
 var newarr = [];
 var temp = [];
    for(var i = 0; i< arr.length; i++){
    var j = i % m
    temp.push(arr[i])
    if( j == m-1 || i == arr.length - 1){
    newarr.push(temp)
    j = 0
    temp = [];
    }      
  }
    return newarr
},

compact:function(arr){
    var newarr = [];
    for( var i = 0; i < arr.length; i ++ ){
        if( arr[i] ){
            newarr.push(arr[i]);
        }
    }
    return newarr;
},

concat: function(arr) {
    var newarr = arguments[0];
    //将arr数组赋予newarr数组
    for (var i = 1; i < arguments.length; i++) {
      if (typeof(arguments[i]) === 'object') {
        for (var j = 0; j < arguments[i].length; j++) {
          newarr.push(arguments[i][j]);
        }
      }else {
        newarr.push(arguments[i]);
      }
    }
    return newarr;
  },

difference:function(arr,values){
    var newarr = [];
    newarr = arr;
    for( var i =0; i<arr.length; i++){
        for( var j = 0; j<values.length; j++){
            if(arr[i] == values[j]){
                arr.splice(i,1);
            }
        }
    }
    return newarr;
},

map:function(arr,fn){
    var newarr =[] ;
    for(var i =0; i<arr.length;i++){
        newarr.push(fn(arr[i],i,arr));
    }
    return newarr;
},

flatten: function(arr, isDeep) {
    var newarr = [];
    if (isDeep === true) {
      return GuanYu.flattenDeep(arr);
      //如果isDeep为true，则调用flattenDeep函数处理
    }else {
      for (var i = 0; i < arr.length; i++) {
        if ((arr[i].length !== undefined) && (typeof(arr[i]) === 'object')) {
          for (var j = 0; j < arr[i].length; j++) {
            newarr.push(arr[i][j]);
            //如果没有定义则将其遍历后push入newarr数组
          }
        }else {
          newarr.push(arr[i]);
        }
      }
    }
    return newarr;
  },


flattenDeep: function(arr) {
    var newarr = [];
    var juc = false;
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i].length === undefined) || (typeof(arr[i]) !== 'object')) {
        newarr.push(arr[i]);
        //判断遍历时的值是否为数组，将其push入newarr数组中
      }else {
        for (var j = 0; j < arr[i].length; j++) {
          newarr.push(arr[i][j]);
          juc = true;
          //是数组的话将其遍历推入
        }
      }
    }
    if (juc) {
      return GuanYu.flattenDeep(newarr);
      //如果上面数组中还存在数组，递归处理
    }
    return newarr;
  },

drop:function(arr,n){
    var newarr = [];
    if(n===undefined){
        n=1;
    }
    for(var i =n; i<arr.length;i++){
        newarr.push(arr[i]);
        
    }
    return newarr;
},


dropRight:function(arr,n){
    var newarr = [];
    if(n===undefined){
        n=1;
    }
    for(var i = 0; i < (arr.length-n); i++){
        newarr.push(arr[i]);
    }
    return newarr;
},

after:function(n,func){
    var runningTimes = 0;
    return function(arg){
        runningTimes ++;
        if(runningTimes > n){
            return func(arg);//当rn大于n的时候跳出此函数，Alert
        }
    }
},

fill: function(arr, value, start, end) {
    var newarr = arr;
    if (start === undefined) {
      start = 0;
    }
    if (end === undefined) {
      end = arr.length;
    }
    for (var i = start; i < end; i++) {
      newarr[i] = value;
    }
    return newarr;
  },

slice:function(start,end){
    var result = []
    if(start === undefined){
        start = 0
    }
    if(end = undefined){
        end = this.length
    }
    for(var i = start ;i< end; i++){
        result.push(this[i])
    }
    return result
},

head: function(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    return arr[0];
  },

fromPairs: function(arr) {
    var newobj = {};
    for (var i = 0; i < arr.length; i++) {
      newobj[arr[i][0]] = arr[i][1];
      //将数组的对应赋予对象的属性与值
    }
    return newobj;
  },

initial: function(arr) {
    var newarr = [];
    arr.pop();
    newarr = arr;
    return newarr;
    //将规定的数组最后一位删除
  },

initial: function(arr) {
    var newarr = [];
    arr.pop();
    newarr = arr;
    return newarr;
    //将规定的数组最后一位删除
  },

}
