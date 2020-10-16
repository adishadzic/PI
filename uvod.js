let n;

function nadjiSumu(n){
    let zbroj = 0;
    for (i=1; i<=n; i++){
        zbroj += i;
    }
        return zbroj;
}

console.log(`Sum of numbers from 1 to ${n} is ${nadjiSumu(n)}`)

