/*
*****
*****
*****
*****
*****
*/ 

function printRowAndColumRows(number) {
  for (let row = 1; row <= number; row++) {
    let starPattern = "";
    for (let colum = 1; colum <= number; colum++) {
      starPattern += "*";
    }
    console.log(starPattern);
  }
}

// printRowAndColumRows(5);


/*
*
**
***
****
*****
*/ 

function printIncreaseRow(number) {
  for (let row = 1; row <= number; row++) {
    let starPattern = "";
    for (let colum = 1; colum <= row; colum++) {
      starPattern += "*";
    }
    console.log(starPattern);
  }
}

// printIncreaseRow(5);


/*
     *
    **
   ***
  ****
 *****
******
*/ 
function printSpaceAndRow(number) {
  for (let row = 1; row <= number; row++) {
    let spacedStarPattern = "";
    let spaces = number - row;
    for (let space = 1; space <= spaces; space++) {
      spacedStarPattern += " ";
    }
    for (let star = 1; star <= row; star++) {
      spacedStarPattern += "*";
    }
    console.log(spacedStarPattern);
  }
}

// printSpaceAndRow(6);


/*
     *
    ***
   *****
  *******
 *********
***********
*/ 


function printStar2xMinus1 (number){
    for(let row =1 ;row<=number;row++){
        let starPattern = "";
        let spaces = number-row
        for(let space = 1;space<=spaces;space++){
            starPattern += " ";
        }
        for(let star=1;star<=2*row-1;star++){
            starPattern += "*";
        }
        console.log(starPattern)
    }
}

// printStar2xMinus1(6)



/*
*****
****
***
**
*
*/ 
function starReversePyramid(number) {
  for (let row = 1; row <= number; row++) {
    let starPattern = "";
    for (let star = number; star >= row; star--) {
      starPattern += "*";
    }
    console.log(starPattern);
  }
}

// starReversePyramid(5);