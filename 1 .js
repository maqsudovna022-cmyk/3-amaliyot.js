function juftRaqamlarSoni(n) {
  let soni = 0;
  for (const ch of String(n)) {
    if (Number(ch) % 2 === 0) soni++;
  }
  return soni;
}

console.log(juftRaqamlarSoni(248135));
console.log(juftRaqamlarSoni(13579));