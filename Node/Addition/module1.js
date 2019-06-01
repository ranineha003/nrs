console.log('Module');

module.exports = {
    add: function (arr) {
       // var arr=[10,20,30];
       var sum=0;
        for(var i=0; i<arr.length;i++)
        sum=sum+(+arr[i]);
        return sum;
    },
}
