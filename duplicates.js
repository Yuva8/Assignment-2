var duplicates = function(a){

    var b = [];
    a.sort();
    var c;
   // console.log(a)
    for (i =0;i<a.length;i++){
        if(a[i] !== c){
            b.push(a[i]);
            c = a[i];
            
        } 
    }return b
    
}
console.log (duplicates ([1,3,5,8,1,3]))