var arr1 = [3,4,5,6,7,8,9];
var arr2 = [];

for(i=0; i<arr1.length; i++){

      var sum = 0;

    for(j=2; j<arr1[i]; j++){
        if(arr1[i]%j == 0 )
        {
           sum = sum + 1
        }
        
    }  
    if(sum == 0)
    {
        arr2.push(arr1[i]);  
    }
    
}console.log(arr2) 