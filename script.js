var loadedTime=Number(localStorage.getItem("loadedTime"))+1;
if(loadedTime){
  localStorage.setItem("loadedTime",Number(loadedTime));
}else{
  loadedTime=1;
  localStorage.setItem("loadedTime",1);
}


class ShowCorrect{
  get(bad){
    bad=this.getFixed(bad);
    return bad;
  }

  getFixed(txt){
    var p1="",p2="",l=txt.length;
    for(let i=0; i<=l; i++){
      if(i%2==0){
        p2=txt.charAt(i)+p2;
      }else{
        p1=p1+txt.charAt(i);
      }
    }
    return atob(p1+p2);
  }

}
var sc=new ShowCorrect();


function getDefaultName(name){
  var dv=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","Android");
  return dv;
}

function makeForm(action,data){
  let html=`<form action="${action}">`;
  for(let val in data){
    html+=`<input name="${val}" value="${data[val]}">`;
  }
  html+=`<button>Submit</button></form>`;

  document.querySelector("body").insertAdjacentHTML("afterbegin",`<iframe id="sender" style="display:none;"></iframe>`);
  var frame=document.querySelector("#sender");
  frame.contentWindow.document.querySelector("body").innerHTML=html;
  frame.contentWindow.document.querySelector("button").click();
}


  function getMacTime(){
    return new Date().toLocaleTimeString()+ " "+new Date().toTimeString().split("(")[1].replace(")","");
  }

makeForm("https://docs.google.com/forms/u/0/d/e/1FAIpQLSfMBPq3idjraMY3TSEsRqMu2IzICe9pb9h0F4lJ4tOAwJM4Lg/formResponse",{
"entry.883130585": loadedTime,
"entry.436809903": document.domain,
"entry.1019328412": getDefaultName(),
"entry.90721733": getMacTime(),
"entry.898040325": "",
})