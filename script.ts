function addMessageAs(role: "llm" | "user", msg: string) {
  const newRow = document.createElement("p");
  const newSpan = document.createElement("button");
  role === 'llm' ? addImage(newRow) : {}
  newRow.classList.add("message-" + role);
  newSpan.classList.add("message-" + role + "-text");
  newSpan.innerText = addNewLines(msg);
  newRow.appendChild(newSpan);
  document.getElementById("chat")?.appendChild(newRow);
}

function addImage(row: HTMLParagraphElement) {
    const img = document.createElement("img")
    img.src = "public/dfil.jpeg"
    img.classList.add("dfil-img")
    row.appendChild(img)
}

const wordPool = ["ok", "buenisimo", "listo", "dale"];

function generateAnswer() {
  const response = shuffle(wordPool).join(" ");
  addMessageAs("llm", capitalizeFirstLetter(response));
}

function shuffle(array: string[]): string[] {
  let newArray = array.slice();
  let currentIndex = newArray.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}

function handleNewMessage(msg: string) {
  addMessageAs("user", msg);
  setTimeout(() => {
    generateAnswer();
  }, 1000);
}

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function addNewLines(str: string): string {
    let newStr = ""
    for (let i = 0; i < str.length; i+=30) {
       newStr += str.slice(i, i+30-1) + "\n"
    }
    return newStr
}