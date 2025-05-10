/* Utility to clear 'active' class from color buttons */
function clearActiveButtons() {
  document.querySelectorAll('.color-button').forEach(btn => {
    btn.classList.remove('active');
  });
}

function applySkinImage(name, btn) {
  document.getElementById("skin-layer").src = `assets/images/${name}.png`;
  clearActiveButtons();
  btn.classList.add("active");
}

function applyEyeImage(name, btn) {
  document.getElementById("eyes-layer").src = `assets/images/${name}.png`;
  clearActiveButtons();
  btn.classList.add("active");
}

function selectHairType(type) {
  const longColor = document.getElementById("Long_hair_color");
  const shortColor = document.getElementById("Short_hair_color");
  const longOutline = document.getElementById("Long_hair_outline");
  const shortOutline = document.getElementById("Short_hair_outline");
  const hairLayer = document.getElementById("hair-color-layer");

  if (type === "long") {
    longColor.style.display = "block";
    longOutline.style.display = "block";
    shortColor.style.display = "none";
    shortOutline.style.display = "none";
  } else {
    longColor.style.display = "none";
    longOutline.style.display = "none";
    shortColor.style.display = "block";
    shortOutline.style.display = "block";
  }

  hairLayer.style.display = "none";
  hairLayer.src = "";
  clearActiveButtons();
}

function applyHairColor(color, btn) {
  const img = document.getElementById("hair-color-layer");
  const prefix = getSelectedHairPrefix();
  img.src = `assets/images/${prefix}hair_${color}.png`;
  img.style.display = "block";
  clearActiveButtons();
  btn.classList.add("active");
}

function getSelectedHairPrefix() {
  const longColor = document.getElementById("Long_hair_color");
  return longColor.style.display === "block" ? "Long" : "Short";
}

function applyBlouse(name, btn) {
  const img = document.getElementById("blouse-layer");
  img.src = `assets/images/${name}.png`;
  img.style.display = "block";
  document.getElementById("blouse-outline").style.display = "block";
  clearActiveButtons();
  btn.classList.add("active");
}

function applySkirt(name, btn) {
  const img = document.getElementById("skirt-layer");
  img.src = `assets/images/${name}.png`;
  img.style.display = "block";
  document.getElementById("skirt-outline").style.display = "block";
  clearActiveButtons();
  btn.classList.add("active");
}

function resetCharacter() {
  location.reload();
}

function saveCharacterAsImage() {
  if (typeof html2canvas === 'undefined') {
    alert("Please wait until the tools are fully loaded...");
    return;
  }
  html2canvas(document.getElementById("character")).then((canvas) => {
    const link = document.createElement("a");
    link.download = "my-character.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
