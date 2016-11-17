
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

}
