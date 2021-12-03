var odd = function(a){
    var b = [];
    for(i=0; i<a.length; i++)
    {
       
        if(a[i]%2!==0)
        {
            b.push(a[i]);
        }
    }

    return b;

}

console.log(odd([4,5,6,7,8]))