const Prime =(num) =>{
    if(num < 2 ){
        return false;
    }


    for(var i =2;i <= Math.sqrt(num); i++  ){
        if (num % i == 0) {
            return false;
        }
    }
    return true ;
}
console.log(Prime(19));
console.log(Prime(27));