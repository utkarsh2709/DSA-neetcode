var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const n = s.length; 
    const arr = new Array(26).fill(0);
    for(let i=0; i<n; i++){
        arr[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        arr[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
    }
    for(let i=0; i<26; i++){
        if(arr[i] !== 0){
           return false;
        }
    }
    return true;
};