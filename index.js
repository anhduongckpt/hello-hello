function anagram(s) {
    // Write your code here
    let dem = 0;
    let check = 0;
    let lens = s.length;
    if(lens % 2 !== 0) return -1;
    else {
       let arr1 = s.slice(0, lens / 2).split("");
       let arr2 = s.slice(lens /2, lens).split("");
       for(let i = 0; i < lens / 2; i++){
           for(let j = 0; j < lens/ 2; j++){
               if(arr1[i] === arr2[j]){
                   check ++;
                   arr2[j] = "$";
               }
           }
       }
       dem = lens / 2 - check;
    }
    return dem; 
}
console.log(anagram("xaxbbbxx"));