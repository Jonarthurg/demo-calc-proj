//Jonathan Garcia

const body = document.querySelector("body") //body of the HTML Document


const calcBodyJS = body.querySelector("calcBody") //parent div that input, and every button are listed in.


const inputDivJS = body.querySelector("inputDiv") //div that holds the input tag for user input


const inputJS = body.querySelector("input").value //numerical value of the users input (used for calculations)



/*                                    ALL VARIABLES CONTAINING ROWS/DIVS                                      */



const rowOneJS = body.querySelector("#rowOne") //first row/div containing the following buttons: "C","CE","%","/"


const rowTwoJS = body.querySelector("#rowTwo") //second row/div containing the following buttons: "7","8","9","X"


const rowThreeJS = body.querySelector("#rowThree") //third row/div containing the following buttons: "4","5","6","-"


const rowFourJS = body.querySelector("#rowFour") //fourth row/div containing the following buttons: "1","2","3","+"


const rowFiveJS = body.querySelector("#rowFour") //fifth row/div containing the following buttons: "0",".","="




/*                               VARIABLES CONTAINING BUTTONS IN ROW ( ONE )                                     */


const clearAllJS = body.querySelector("#clearAllJS")

const clearLastEntryJS = body.querySelector("#clearLastEntry")

const modulusJS = body.querySelector("#modulus")

const divideJS = body.querySelector("#divide")




/*                               VARIABLES CONTAINING BUTTONS IN ROW ( TWO )                                     */


const sevenJS = body.querySelector("#seven")

const eightJS = body.querySelector("#eight")

const nineJS = body.querySelector("#nine")

const multiplyJS = body.querySelector("#multiply")





/*                               VARIABLES CONTAINING BUTTONS IN ROW ( THREE )                                   */


const fourJS = body.querySelector("#four")

const fiveJS = body.querySelector("#five")

const sixJS = body.querySelector("#six")

const subtractJS = body.querySelector("#subtract")





/*                               VARIABLES CONTAINING BUTTONS IN ROW ( FOUR )                                   */


const oneJS = body.querySelector("#one")

const twoJS = body.querySelector("#two")

const threeJS = body.querySelector("#three")

const additionJS = body.querySelector("#addition")




/*                               VARIABLES CONTAINING BUTTONS IN ROW ( FIVE )                                   */


const zeroJS = body.querySelector("#zero")

const decimalJS = body.querySelector("#decimal")

const equalsJS = body.querySelector("#equals")








/*                     addEventListeners  W/ corresponding functions directly below each                         */




clearAllJS.addEventListener("click", clearAllFunction)

function clearAllFunction(){



}








console.log(zeroJS.innerHTML)









