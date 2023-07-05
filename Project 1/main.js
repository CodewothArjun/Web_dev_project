function palindrome() {
  var N = document.getElementById("nume").value;
  var M = N; // STORE VALUE OF N TO M FOR CHECK PALINDROME IN LAST
  var rev = 0;
  var rem;
  while (N > 0) {
    rem = N % 10;
    rev = rev * 10 + rem;
    N = Math.floor(N / 10);
  }

  if (rev == M) {
    document.getElementById("output").innerHTML = M + " is palindrome number.";
  } else {
    document.getElementById("output").innerHTML =
      M + " is not palindrome number.";
  }
}
