
<script type="text/javascript">
function ISBN13toISBN10(isbn13) {var start = isbn13.substring(3, 12);var sum = 0;var mul = 10;var i;for(i = 0; i < 9; i++) {sum = sum + (mul * parseInt(start[i]));mul -= 1;}var checkDig = 11 - (sum % 11);if (checkDig == 10) {checkDig = "X";} else if (checkDig == 11) {checkDig = "0";}return start + checkDig;}document.getElementById("isbn10_{{ isbn }}").innerHTML='<a href="http://www.amazon.com/dp/' + ISBN13toISBN10("{{ isbn }}") +'" title="Amazon" target="_blank" class="{{ site.button-classes }}">Amazon</a>';
</script>

