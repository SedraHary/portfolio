function daty(){
    var today = new Date();
    //format de la date
    var forme = {weekday:"long",year:"numeric",month:"long",day:"2-digit"};
    //conversion en date francais
    var date= today.toLocaleDateString("fr-FR", forme);
    //format heure
    var heure = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
    //combinaison date et heure
    var dateEtHeure=date+" "+heure;
    //mettre majuscule le début des mots
    var dateEtHeure=dateEtHeure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    const daty=document.getElementById('time').innerHTML=dateEtHeure;
}
//mouvement seconde
setInterval('daty()',1000);


const txtAnim=document.querySelector('h2');

new Typewriter(txtAnim,{
    loop:true
})
.typeString('Hello!')
.pauseFor(2000)
.deleteAll()
.typeString('Salama!')
.pauseFor(2000)
.deleteAll()
.typeString('Bonjour!')
.pauseFor(2000)
.start()