let height = prompt("How high does Mario have to get over to get to jump to the flagpole? ")

printPyramid(height);

function printPyramid(height) {
    let n = height;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
      for (let k = -1; k < i; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string)
}

