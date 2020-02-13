window.onload = function() {
  var name = document.querySelector(".content");
  var cursor = document.querySelector(".cursor");

  document.onmousemove = function(e) {
    cursor.style.left = e.clientX - 80 + "px";
    cursor.style.top = e.clientY - 80 + "px";

    name.style.setProperty("--x", e.clientX + "px");
    name.style.setProperty("--y", e.clientY + "px");
  };
};
