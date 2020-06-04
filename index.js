document.getElementById("get").addEventListener("click", function clickGetHandler(){
    var xhr = new  XMLHttpRequest();

    xhr.onreadystatechange = function() {
        console.log("this: ", this);
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("demo").innerHTML = this.responseText;
        }
      };

    xhr.open("GET", "http://10.24.0.2:49160/", true);
    
    xhr.send();

    console.log("get");
});