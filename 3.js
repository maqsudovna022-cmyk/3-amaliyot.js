function engKatta(arr) {
  let eng = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > eng) eng = arr[i];
  }
  return eng;
}

engKatta([12, 45, 7, 23]); 
engKatta([-5, -2, -9]);    