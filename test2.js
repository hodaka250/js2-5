function changelang() {
  if(document.getElementById("change"));{
    id = document.getElementById('change').value;
    if (id == "selected_jpn") {
      //文字1を表示
      document.getElementById("t1").style.display = "";
      document.getElementById("t2").style.display = "none";

    } else if (id == "selected_en") {
      document.getElementById("t1").style.display = "none";
      document.getElementById("t2").style.display = "";

    } else if (id == "selected_all") {
      document.getElementById("t1").style.display = "";
      document.getElementById("t2").style.display = "";
     }
  }
window.onload = changelang;
}