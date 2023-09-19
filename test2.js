function viewChange(){
  if(document.getElementById('sample')){
      id = document.getElementById('sample').value;
      if(id == 'selected_jpn'){
          document.getElementById('jp').style.display = "";
          document.getElementById('en').style.display = "none";
      }else if(id == 'selected_en'){
          document.getElementById('jp').style.display = "none";
          document.getElementById('en').style.display = "";
      }
      else if(id == 'selected_all'){
          document.getElementById('jp').style.display = "";
          document.getElementById('en').style.display = "";
      }
  }

window.onload = viewChange;
}