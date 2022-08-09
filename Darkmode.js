// primeiro faz a verificação se no Local Storage do User qual o modo preferido dele
const { log } = console; 
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
// verificação da cor do sistema + a cor preferida da plataforma 
const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
function VerificaDarkMode(){
  if(prefersColorScheme.matches) {
    $("#darkSwitch").prop( "checked", true )
    document.body.setAttribute("data-theme", "dark")
    log('Tema do sistema é escuro')
  }
  if(localStorage.getItem("darkSwitch") === "dark"){
    document.body.setAttribute("data-theme", "dark")
    $("#darkSwitch").prop( "checked", true )
  }

}