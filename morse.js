document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById("morseCode").value = ""
  const morse = {}
  morse.decode = (m) => {
    const lib = { ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0", ".-.-.-": ".", "--..--": ",", ".----.": "'", "-.-.--": "!", "...---...": "SOS", "-....-": "-" }
    const arr = m
      .split("   ")
      .map(v => v
        .split(" ")
        .map(w => lib[w])
        .join("")
      )
      .join(" ")
    return arr.trim()
  }

  morse.encode = (m) => {
    const lib = { "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--", "z": "--..", "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----", ".": ".-.-.-", ",": "--..--", "'": ".----.", "!": "-.-.--", "SOS": "...---...", "-": "-....-" }
    const arr = m
      .split(" ")
      .map(v => v
        .split("")
        .map(w => lib[w.toLowerCase()])
        .join(" ")
      )
      .join("   ")
    return arr
  }
  document.getElementById("submit").addEventListener("click", ()=>{
    let oldText = document.getElementById("morseCode").value
    let newText = ""
    let checked = document.getElementById("encorDec").checked
    if (checked) {
      newText = morse.encode(oldText)
    } else {
      newText = morse.decode(oldText)
    }
    document.getElementById("morseCode").value = newText
  });
})
