module.exports = function multiply(first, second) {
  // your solution
  let f = first.split('').reverse();
  let s = second.split('').reverse();
  let mult = [];
  for (let i = 0; i < f.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let m = f[i] * s[j];
      mult[i + j] = (mult[i + j]) ? mult[i + j] + m : m;
    }
  } 
  for (let k = 0; k < mult.length; k++) {
    let n = mult[k] % 10;
    let ten = Math.floor(mult[k] / 10);
    mult[k] = n;
    if (mult[k + 1]) {
      mult[k+1] += ten;
    } else if (ten != 0) {
      mult[k + 1] = ten;
    }
  }
    
  return mult.reverse().join('');
}
