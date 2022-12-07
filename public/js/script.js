const nameElement = document.querySelector(".nameEl");
const imgElement = document.querySelector(".imgEl");
nameElement.style.display = "none";
imgElement.style.display = "none";

document.querySelector("#btnGenerate").addEventListener("click", () => {
  getName();
  getImage();
});

async function getName() {
  const conFetch = await fetch("/dinoname");
  const data = await conFetch.json();
  const nameDinosaur = data[0].join(" ");
  console.log(nameDinosaur);
  document.querySelector(".nameDinosaur").textContent = nameDinosaur;

  if (nameDinosaur) {
    nameElement.style.display = "block";
  }
}

async function getImage() {
  const conFetch = await fetch("/dinoimage");
  const data = await conFetch.json();
  const imgDinosaur = data.hits[Math.floor(Math.random() * data.hits.length)];
  const imgSrc = imgDinosaur.webformatURL;
  console.log(imgDinosaur);

  // if there's the image, so remove an img it
  if (document.querySelector("#imgsrc") !== null) {
    document.querySelector("#imgsrc").remove();
  }

  const image = document.createElement("img");
  image.id = "imgsrc";
  image.setAttribute("src", `${imgSrc}`);
  image.setAttribute("width", 300);
  image.setAttribute("height", 300);
  document.querySelector(".imgDinosaur").appendChild(image);

  if (imgElement) {
    imgElement.style.display = "block";
  }
}
