// *** FROM THE KUNAL KUSHWAHA PATTERNS VIDEO ***

function pattern1(num) {
  // *****
  // *****
  // *****
  // *****
  // *****

  let n = num;
  let string = "";

  for (let row = 1; row <= n; row++) {
    //   This will run till the number of rows
    for (let col = 0; col < n; col++) {
      // here the number of rows and columns are same
      // this  will run with the number of column
      string += "* ";
    }
    string += "\n";
  }
  console.log(string);
}

// pattern1(10);

function pattern2(num) {
  // *
  // **
  // ***
  // ****
  // *****
  let n = num;
  let string = "";
  for (let row = 1; row <= n; row++) {
    // for every row run the column
    for (let col = 1; col <= row; col++) {
      // here the number of columns are increasing with rows
      string += "* ";
    }
    //   when one row is printed, we need to add a newline
    string += "\n";
  }

  console.log(string);
}

// pattern2(10);

function pattern3(num) {
  // *****
  // ****
  // ***
  // **
  // *
  let n = num;
  let string = "";

  for (let rows = 1; rows <= n; rows++) {
    // this will run till the rows
    for (let cols = 1; cols <= n + 1 - rows; cols++) {
      string += "* ";
    }
    string += "\n";
  }
  console.log(string);
}

// pattern3(10);

function pattern4(num) {
  // 1
  // 1 2
  // 1 2 3
  // 1 2 3 4
  // 1 2 3 4 5

  // here we are printing the column number instead of (*)

  let n = num;
  let string = "";
  for (let row = 1; row <= n; row++) {
    // for every row run the column
    for (let col = 1; col <= row; col++) {
      // here the number of columns are increasing with rows
      string += col + " ";
    }
    //   when one row is printed, we need to add a newline
    string += "\n";
  }
  console.log(string);
}

// pattern4(10);

function pattern5(num) {
  // 1
  // 1 2
  // 1 2 3
  // 1 2 3 4
  // 1 2 3 4 5

  // here we are printing the column number instead of (*)

  let n = num;
  let string = "";
  for (let row = 1; row <= 2 * n - 1; row++) {
    // for every row run the column
    for (let col = 1; col <= row; col++) {
      // here the number of columns are increasing with rows
      string += col + " ";
    }
    //   when one row is printed, we need to add a newline
    string += "\n";
  }
  console.log(string);
}

pattern5(5);
