// compteur de temps
let temps = 0;
setInterval(() => {
  temps += 0.01;
}, 10);
/* variable */
// zombie
let zombiekill = 0;
const viee = document.querySelector(".vie");
const zombiehurl = new Audio("./assets/Sound/Mobs/Monster/zombie.hurl.mp3");
const zombiedead = new Audio("./assets/Sound/Mobs/Monster/zombie.dead.mp3");
let healtzombie = 18;
let topzombie = 30;
let leftzombie = 50;
// object du joueur
let vie = 9;
let block = 0;
let woodpickaxe = 0;
let stonepickaxe = 0;
// position du joueur
let topsteveleft = 0;
let leftsteveleft = 0;
// vairiable pour la gravité
let topstevelefttr = 0;
let leftstevelefttr = 0;
let stevegravityun = 0;
let stevegravitydeux = 0;
let stevegravitytrois = 0;
let stevegravityquatre = 0;
let stevegravitycing = 0;
let underleftsteveleft = "." + topstevelefttr + "n" + leftstevelefttr;
let lettresous = "jsp";
let garvités = "rien";
const steveleft = document.querySelector(".steveleft");
steveleft.style.setProperty("--topsteveleft", 0);
const zombie = document.querySelector(".mobszombie");
/* position du zombie */
zombie.style.top = topzombie + "%";
zombie.style.left = leftzombie + "%";
/* craft */
let classblock = "qqch";
/* poser des block */
document.body.addEventListener("contextmenu", (e) => {
  if (block > 0) {
    if (e.target.textContent === "b") {
    } else {
      e.target.textContent = "b";
      e.target.style.background = "black";
      block -= 1;
    }
  }
  e.preventDefault();
});

/* casser des block */
document.body.addEventListener("click", (e) => {
  // casser un block
  if (e.target.textContent === "b") {
    block += 1;
    e.target.textContent = "";
    e.target.style.background = "transparent";
  }
  // tuer zombie
  if (e.target === zombie) {
    healtzombie -= 1;
    zombiedead.play();
    if (healtzombie === 0) {
      block += 10;
      e.target.remove();
      zombiekill = 1;
    }
  }
});

// hulement zombie
setInterval(() => {
  if (zombiekill === 0) {
    zombiehurl.play();
  }
}, 10000);

// calculs du jeux
setInterval(() => {
  // compteur d'objets
  document.querySelector(".comptwoodpickaxe").textContent = woodpickaxe;
  document.querySelector(".h6").textContent = block;
  document.querySelector(".comptstonepickaxe").textContent = stonepickaxe;
  // position joueur
  steveleft.style.setProperty("--topsteveleft", topsteveleft + "%");
  steveleft.style.setProperty("--leftsteveleft", leftsteveleft + "%");
  // gravités oui cest compliqué!
  topstevelefttr = topsteveleft / 10 + 3;
  leftstevelefttr = 10 - leftsteveleft / 10;
  underleftsteveleft = "n" + topstevelefttr + "n" + leftstevelefttr;
  let topstevelefttrtr = topstevelefttr - 1;
  let leftstevelefttrtr = leftstevelefttr - 1;
  lettresous = document.querySelector("." + underleftsteveleft).textContent;
  stevegravityun = document.querySelector(
    "." + "n" + topstevelefttrtr + "n" + leftstevelefttrtr
  ).textContent;
  let topstevelefttrtrtr = topstevelefttr - 2;
  let leftstevelefttrtrtr = leftstevelefttr - 1;
  lettresous = document.querySelector("." + underleftsteveleft).textContent;
  stevegravitydeux = document.querySelector(
    "." + "n" + topstevelefttrtrtr + "n" + leftstevelefttrtrtr
  ).textContent;
  let topstevelefttrtrtrtr = topstevelefttr - 3;
  lettresous = document.querySelector("." + underleftsteveleft).textContent;
  stevegravitytrois = document.querySelector(
    "." + "n" + topstevelefttrtrtrtr + "n" + leftstevelefttr
  ).textContent;
  let leftstevelefttrtrtrtr = leftstevelefttr + 1;
  stevegravityquatre = document.querySelector(
    "." + "n" + topstevelefttrtrtr + "n" + leftstevelefttrtrtrtr
  ).textContent;
  stevegravitycing = document.querySelector(
    "." + "n" + topstevelefttrtr + "n" + leftstevelefttrtrtrtr
  ).textContent;
  // joueur mort si zombie à les memes coordonnees
  if (topsteveleft === topzombie) {
    if (leftsteveleft === leftzombie) {
      if (zombiekill === 0) {
        vie -= 1;
      }
    }
  }
  if (topsteveleft + 10 === topzombie) {
    if (leftsteveleft === leftzombie) {
      if (zombiekill === 0) {
        vie -= 1;
      }
      D;
    }
  }
  if (vie == 0) {
    document.body.innerHTML = `
    <div id="divdead">
    <h1 class="h1">
    you are dead
    </h1>
    <button class="button">
    delete world and restart
    </button>
    </div>
    `;
    document.querySelector("button").addEventListener("click", () => {
      window.location.reload();
    });
  }
  if (vie == 1) {
    viee.innerHTML =
      "&#9829; &#9825; &#9825; &#9825; &#9825; &#9825; &#9825; &#9825; &#9825;";
  }
  if (vie == 2) {
    viee.innerHTML =
      "&#9829; &#9829; &#9825; &#9825; &#9825; &#9825; &#9825; &#9825; &#9825;";
  }
  if (vie == 3) {
    viee.innerHTML =
      "&#9829; &#9829; &#9829; &#9825; &#9825; &#9825; &#9825; &#9825; &#9825;";
  }
  if (vie == 4) {
    viee.innerHTML =
      "&#9829; &#9829; &#9829; &#9829; &#9825; &#9825; &#9825; &#9825; &#9825;";
  }
  if (vie == 5) {
    viee.innerHTML =
      "&#9829; &#9829; &#9829; &#9829; &#9829; &#9825; &#9825; &#9825; &#9825;";
  }
  if (vie == 6) {
    viee.innerHTML =
      "&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9825; &#9825; &#9825;";
  }
  if (vie == 7) {
    viee.innerHTML =
      "&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9825; &#9825;";
  }
  if (vie == 8) {
    viee.innerHTML =
      "&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9825;";
  }
  if (vie === 9) {
    viee.innerHTML =
      "&#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829; &#9829;";
  }
}, 200);
// gravite
setInterval(() => {
  if (lettresous == "b") {
  } else {
    if (garvités == " ") {
      garvités = 10;
      setTimeout(() => {
        topsteveleft += 10;
      }, 250);
    } else {
      topsteveleft += 10;
    }
  }
}, 500);

// déplacement
window.addEventListener("keypress", (e) => {
  if (e.key == "d") {
    if (stevegravityun === "b") {
    } else {
      if (stevegravitydeux === "b") {
      } else {
        leftsteveleft += 10;
      }
    }
  }
  if (e.key == "a") {
    if (stevegravityquatre === "b") {
    } else {
      if (stevegravitycing === "b") {
      } else {
        leftsteveleft -= 10;
      }
    }
  }
  if (e.key == " ") {
    if (stevegravitytrois === "b") {
    } else {
      topsteveleft -= 10;
    }
  }
  garvités = e.key;
});

/* craft button */
window.addEventListener("keypress", (e) => {
  if (e.key === "e") {
    document.querySelector(".guiinventory").style.top = "0%";
    document.querySelector(".woodpickaxe").style.left = "5%";
    document.querySelector(".stonepickaxe").style.left = "5%";
  }
  if (e.key === "q") {
    document.querySelector(".guiinventory").style.top = "-1000%";
    document.querySelector(".woodpickaxe").style.left = "-100%";
    document.querySelector(".stonepickaxe").style.left = "-100%";
  }
});
// craft wood pickaxe
document.querySelector(".woodpickaxe").addEventListener("click", () => {
  if (block > 4) {
    block -= 5;
    woodpickaxe += 1;
  } else {
    alert("pas asser de block");
  }
});
// craft stone pickaxe
document.querySelector(".stonepickaxe").addEventListener("click", () => {
  if (block > 1) {
    if (woodpickaxe > 2) {
      block -= 2;
      woodpickaxe -= 3;
      stonepickaxe += 1;
      alert("VOUS AVEZ FINIT LE JEUX!!! En " + temps + "s");
    } else {
      alert("pas assez de wood pickaxe !");
    }
  } else {
    alert("pas asser de block");
  }
});
