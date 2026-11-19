function uzunlikBoyichaSarala(s) {
  return s
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(" ");
}

uzunlikBoyichaSarala("javascript veb va html"); 