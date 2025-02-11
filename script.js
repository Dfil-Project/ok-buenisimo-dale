function addMessageAs(role, msg) {
    var _a;
    var newRow = document.createElement("p");
    newRow.classList.add("message-" + role);
    newRow.innerText = msg;
    (_a = document.getElementById("chat")) === null || _a === void 0 ? void 0 : _a.appendChild(newRow);
}
var wordPool = ["ok", "buenisimo", "listo", "dale"];
function generateAnswer() {
    var response = shuffle(wordPool).join(" ");
    addMessageAs("llm", capitalizeFirstLetter(response));
}
function shuffle(array) {
    var _a;
    var newArray = array.slice();
    var currentIndex = newArray.length;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        var randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        _a = [
            newArray[randomIndex],
            newArray[currentIndex],
        ], newArray[currentIndex] = _a[0], newArray[randomIndex] = _a[1];
    }
    return newArray;
}
function handleNewMessage(msg) {
    addMessageAs("user", msg);
    setTimeout(function () {
        generateAnswer();
    }, 1000);
}
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
