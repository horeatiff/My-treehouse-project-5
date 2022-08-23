function searchImg() {
  const input = document.getElementById("search").toLowerCase();
  const imageAnchor = document.getElementsByTagName("a");

  for (let i = 0; i < imageAnchor.length; i++) {
    if (!imageAnchor[i].innerHTML.toLowerCase().includes(input)) {
      imageAnchor[i].style.display = "none";
    } else {
      imageAnchor[i].style.display = "block";
    }
  }
}
