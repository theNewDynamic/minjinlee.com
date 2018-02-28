<script type="text/javascript">
  function ISBN13toISBN10(isbn13) {
    var start = isbn13.substring(3, 12);
    var sum = 0;
    var mul = 10;
    var i;
    for (i = 0; i < 9; i++) {
      sum = sum + (mul * parseInt(start[i]));
      mul -= 1;
    }
    var checkDig = 11 - (sum % 11);
    if (checkDig == 10) {
      checkDig = "X";
    } else if (checkDig == 11) {
      checkDig = "0";
    }
    return start + checkDig;
  }
  var isbn10 = document.getElementsByClassName("isbn10_{{ . | safeJS }}");
  for(var i = 0; i < isbn10.length; i++) {
    switchIsbn(isbn10[i])
  }
</script>
