
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

map:function(arr,fn){
    var newarr =[] ;
    for(var i =0; i<arr.length;i++){
        newarr.push(fn(arr[i],i,arr));
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

fill:function(array,value,star,end){
    newarr = array;
    if(star===undefined){
        star = 0;
    }
    if(end===undefined){
        end=array.length;
    }
    for(var i =star; i<end;i++){
        newarr[i]=value;
    }
    return newarr;
}
}
