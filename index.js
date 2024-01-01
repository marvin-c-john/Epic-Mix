const button = document.querySelector(".button");
const columnOne = document.querySelector(".column-1");
const columnTwo = document.querySelector(".column-2");
const songContainer = document.querySelector(".song-container");

const songs = [
  "A lot Of Me",
  "Rekindle 23",
  "Act Like You Can't Think",
  "Nightmares",
  "Snooze",
  "Date Night",
  "Internet Troll",
  "Like That",
  "Slider",
  "Chopper City",
  "9x Outta 10",
  "God Slippers",
];

// const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

button.addEventListener("click", random);

function random() {
  shuffleArray(songs);
  button.style.display = "none";
  songContainer.style.display = "flex";
  songContainer.style.textAlign = "start";
  console.log(songs);
  songs.forEach(function (song) {
    const p = document.createElement("p");
    p.innerText = song;
    columnOne.append(p);
    const count = columnOne.childNodes.length;
    if (count === 7) {
      columnTwo.append(p);
    }
  });
}

function shuffleArray(array) {
  let len = array.length;

  for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
    let randIndex = Math.floor(Math.random() * (currentIndex + 1));
    var temp = array[currentIndex];
    array[currentIndex] = array[randIndex];
    array[randIndex] = temp;
  }
}
