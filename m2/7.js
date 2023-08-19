let F = n => n <= 2 ? 1 : F(n-1) + F(n-2)

console.log(F(10))

let G = n =>  Array(n+1).fill().reduce((arr,_,i) => arr.concat(i <= 2 ? 1 : arr[i-2] + arr[i-1]),[])
console.log(G(10))




 F = n => n <= 1 ? 1 : n*F(n-1)

console.log(F(10))

G = n =>  Array(n+1).fill().reduce((arr,_,i) => arr.concat(i <= 1 ? 1 : i*arr[i-1]),[])
console.log(G(10))
