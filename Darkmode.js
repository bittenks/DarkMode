$(function (ready) {
  VerificaDarkMode()
})

function ActiveDarkMode(){
  if($("#darkSwitch").is(':checked')){
        document.body.setAttribute("data-theme", "dark")
        localStorage.setItem("darkSwitch", "dark");
    }
    else{
        document.body.removeAttribute("data-theme");
        localStorage.removeItem("darkSwitch");
      }
}

function VerificaDarkMode(){
  if(localStorage.getItem("darkSwitch") === "dark"){
    document.body.setAttribute("data-theme", "dark")
    $("#darkSwitch").prop( "checked", true )
  }}
