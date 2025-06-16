function solution(noAkun, nominal) {
  let totalDebit = 0;
  let totalKredit = 0;

  console.log("# Akun # Debit # Kredit");

  for (let i = 0; i < noAkun.length; i++) {
    let debit = 0;
    let kredit = 0;

    if (i === 0) {
      debit = nominal[i];
    } else if (i === noAkun.length - 1) {
      kredit = nominal[i];
    } else {
      kredit = nominal[i];
    }

    totalDebit += debit;
    totalKredit += kredit;

    console.log(noAkun[i] + " – " + debit + " – " + kredit);
  }

  let status = "Not Balance";
  if (totalDebit === totalKredit) {
    status = "Balance";
  }

  console.log("# Total # " + totalDebit + " # " + totalKredit + " (" + status + ")");
}

console.log("Contoh 1:");
solution([111, 211, 201], [200000, 50000, 150000]);

console.log("\nContoh 2:");
solution([111, 201], [100000, 120000]);