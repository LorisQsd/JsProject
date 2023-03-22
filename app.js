const BMIData = [
  { name: "Maigreur", color: "blue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée !", color: "orange", range: [30, 35] },
  { name: "Obésité sévère !!", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide !!!", color: "purple", range: 40 },
];

const buttonBMI = document.querySelector("#submit");

// Add eventListener on click and exec the function handleForm
buttonBMI.addEventListener("click", handleForm);

function handleForm(e) {
  // preventDefault on submit button
  e.preventDefault();

  calculateBMI();
}

function calculateBMI() {
  const weight = document.querySelector("#weight").value;
  const height = document.querySelector("#height").value;
  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
  const result = document.querySelector("#result");
  const advice = document.querySelector("#advice");

  if (!weight || !height || weight <= 0 || height <= 0) {
    result.textContent = `Wops`;
    advice.textContent = `Renseignez correctement votre taille et votre poids.`;
    advice.style.color = "red";

    return;
  }

  showResult(bmi);
};

function showResult(bmi) {
  const rank = BMIData.find(data => {
    if (bmi >= data.range[0] && bmi < data.range[1]) return data;
    else if (typeof data.range === "number" && bmi >= data.range) return data;
  });

  result.textContent = bmi;
  advice.textContent = `Vous êtes en : ${rank.name}`
  advice.style.color = `${rank.color}`;
};