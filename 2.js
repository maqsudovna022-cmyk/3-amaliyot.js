function boshJoylarniOchir(s) {
  let natija = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") natija += s[i];
  }
  return natija;
}

boshJoylarniOchir("Java Script  darsi"); "JavaScriptdarsi"
boshJoylarniOchir("  a b c  ");          