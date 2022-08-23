function searchImg() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let x = document.getElementsByTagName("a");

  for (let i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
      console.log(i);
    } else {
      x[i].style.display = "block";
    }
  }
}
