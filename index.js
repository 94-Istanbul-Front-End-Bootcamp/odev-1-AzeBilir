
const name= "Aze Bilir";
const age= "26";




document.getElementById("myBtn").addEventListener("click", function () {
  
  document.getElementById("nameSurname").innerHTML=name;
  
  
  document.getElementById("age").innerHTML=age
  document.getElementById("myBtn").style.display = "none";}
  )

  


  var a = document.createElement('a'); 
  var link = document.createTextNode("LinkedIn Profili");
  a.appendChild(link); 
  a.href = "https://www.linkedin.com/in/aze-bilir/"; 
  document.body.appendChild(a); 
  var a = document.createElement('a'); 
  var link = document.createTextNode("GitHub Profili");
  a.appendChild(link); 
  a.href = "https://github.com/AzeBilir"; 
  document.body.appendChild(a); 
  
  


 
