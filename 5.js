function bahoStatistikasi(ballar) {
  const natija = { alo: 0, yaxshi: 0, qoniqarli: 0, qoniqarsiz: 0 };
  for (const b of ballar) {
    if (b >= 86) natija.alo++;
    else if (b >= 71) natija.yaxshi++;
    else if (b >= 56) natija.qoniqarli++;
    else natija.qoniqarsiz++;
  }
  return natija;
}

bahoStatistikasi([92, 75, 60, 45, 88, 71]);
