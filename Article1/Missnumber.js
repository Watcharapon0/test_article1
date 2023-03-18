const Missnumber = (li1,li2)=>{
    var mn = [];

    for (let i =0;i <li1.length; i++){
        if(!li2.includes(li1[i])){
            mn.push(li1[i]);
        }
    }
    for (let i =0;i <li2.length; i++){
        if(!li1.includes(li2[i])){
            mn.push(li2[i]);
        }
    }




    return mn;
}
const li1 = [1, 24, 32, 15, 60, 45];
const li2 = [24, 32, 15, 56, 60, 78, 92, 33, 1, 45];
const mn = Missnumber(li1, li2);
console.log(mn);