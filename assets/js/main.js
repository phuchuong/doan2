var abc = [
    'javascrip',
    'php',
    'html'
]

Array.prototype.filter2 =function(callback){
    outpush =[];
    for( var index in this){
        if (this.hasOwnProperty(index)){
           var result= callback(this[this[index],index,this]);
           if (result){
                result.push(this[index]);
           }
        }

    }
    return outpush;
}

var aaa =[

    {
        sl :5,
        name :'samsung'
    },
    {
        sl: 4,
        name: 'iphone'
    }
]


var filterCourses = aaa.filter2(function(aaa,index,Array){
    console(aaa,index,Array);
    // return aaa.sl >2;
    
});

console(filterCourses);
