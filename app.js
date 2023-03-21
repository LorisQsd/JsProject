const BMIData = [
  { name: "Maigreur", color: "blue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

const buttonBMI = document.querySelector("#calcul");
const waiting = "En attente d'un résultat"
buttonBMI.addEventListener("click", calculateBMI);

// IMC = poids en kg / taille² en m
function calculateBMI() {
  // Récupérer les valeurs saisies dans les champs de formulaire
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const bmi = weight / (height * height) * 10000;

  // Vérifier que les valeurs sont des nombres
  if (weight && height) {
    document.getElementById("result").innerHTML = bmi.toFixed(2);

    if (bmi <= BMIData[0].range[1]) {
      document.querySelector("#advice").innerHTML = `Vous êtes en : ${BMIData[0].name}`;
      document.querySelector("#advice").style.color = BMIData[0].color;
    } else if (bmi <= BMIData[1].range[1]) {
      document.querySelector("#advice").innerHTML = `Vous êtes en : ${BMIData[1].name}`;
      document.querySelector("#advice").style.color = BMIData[1].color;
    } else if (bmi <= BMIData[2].range[1]) {
      document.querySelector("#advice").innerHTML = `Vous êtes en : ${BMIData[2].name}`;
      document.querySelector("#advice").style.color = BMIData[2].color;
    } else if (bmi <= BMIData[3].range[1]) {
      document.querySelector("#advice").innerHTML = `Vous êtes en : ${BMIData[3].name}`;
      document.querySelector("#advice").style.color = BMIData[3].color;
    } else if (bmi <= BMIData[4].range[1]) {
      document.querySelector("#advice").innerHTML = `Vous êtes en : ${BMIData[4].name}`;
      document.querySelector("#advice").style.color = BMIData[4].color;
    } else if (bmi > BMIData[5].range) {
      document.querySelector("#advice").innerHTML = `Vous êtes en : ${BMIData[5].name}`;
      document.querySelector("#advice").style.color = BMIData[5].color;
    } else {
      document.querySelector("#advice").innerHTML = waiting;
    }
  } else if (!weight || !height) {
    document.getElementById("result").innerHTML = `Wops`;
    document.querySelector("#advice").innerHTML = `Remplissez correctement les inputs`;
  }

}