// calc_array = new Array();
// var calcul=0;
// var a = 0
// var b = 0

// function $id(id)
// {
//         return document.getElementById(id);
// }
// function f_calc(id,n)
// {
//         if(n=='ce')
//         {
//                 initialiser_calc(id);
//         }
//         else if(n=='=')
//         {
//                 if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
//                 {
//                         eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
//                         calc_array[id][0] = '=';
//                         $id(id+'_resultat').value=calcul;
//                         calc_array[id][2]=calcul;
//                         calc_array[id][3]=0;
//                 }

// function byId(calc) {
//     return document.getElementById(calc);
// }

// function add(a,b){
// 	return (a) + (b);
// }

// function sub(a,b){
// 	return (a) - return (b);
// }

// function mult(a,b){
// 	return (a) * return (b);
// }

// function div(a,b){
// 	if (b>0) return (a) / (b);
// 	if (b =< 0) return a / b;
//                else return "Impossible de diviser par 0";
// }


console.log ("l'éléphant")

function camelCase(id)
{
    // console.log (id);
    // console.log (document.getElementById(id).value);
    var nombre=document.getElementById(id).value;
    console.log ("nombre:",nombre);
    document.getElementById("calc_resultat").value= calc_resultat.value+nombre;
}
//Permet d'effacer ce qu'il y a a l'écran
function supprimer(clear)
{
	document.getElementById("calc_resultat").value="";
}

//On déclare les variables pour les calculs
var a = 0;
var valeur = 0;
//var r;
//On commence les fonctions de calcul
function addition(a,valeur) 
{
	var a = document.getElementById("addition").value;
	var valeur = document.getElementById("calc_resultat").value;
	document.getElementById("calc_resultat").value = valeur + " " + a + " ";
}

//Fonction résultat
function resultat(calc_resultat) {
	// document.getElementById("calc_resultat").value=r;
	var valeur = document.getElementById("calc_resultat").value;
	var resultatFinal = eval(valeur);
	document.getElementById("calc_resultat").value = valeur + " = " + resultatFinal;
}