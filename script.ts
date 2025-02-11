function addMessageAs(role: 'llm' | 'user', msg: string) {
  const newRow = document.createElement("p");
  newRow.classList.add("message-" + role)
  newRow.innerText = msg;
  document.getElementById("chat")?.appendChild(newRow);
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
    addMessageAs("user", msg)
    setTimeout(() => {
        generateAnswer()
    }, 1000)
}

function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
