
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
}
}