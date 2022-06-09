class Calculator{   
constructor(previousOperandText, currentOperandText){ //constructor that takes in all inputs. it also stores all our functions.

 this.previousOperandText = previousOperandText //variables that we'll use throughout the class
 this.currentOperandText = currentOperandText
 this.clear()
}

clear(){

this.currentOperand = ""  //default values for our calculator
this.previousOperand = ""
this.operation = undefined

}


delete(){

this.currentOperand = this.currentOperand.toString().slice(0, -1)

}

appendNumber(number){ //adds numbers to the screen

if(number === "." && this.currentOperand.includes(".")) return

this.currentOperand = this.currentOperand.toString() + number.toString() // appends the value(as a string), from the button to currentOperand 
//toString so that the numbers dont get added, but appended                                                                        

}


chooseOperation(operation){ 
     
    if(this.currentOperand === "") return //if we have a number in the previous div, but no input in the current div, this line will return out of this function
  
    if(this.previousOperand !==""){ // if both currentOperand and previousOperand have values, and we click an operator, this will allow us to calculate the two, moving it to previous operand

        this.compute()
    }
this.operation = operation
this.previousOperand = this.currentOperand // sets previousOperand to the value of currentOperand, inorder to clear the currentOperand and make space for another number
this.currentOperand = ""




}

compute(){ // does the math for us 

let computation
const prev = parseFloat(this.previousOperand) // converts the previousOperand string into a number we can use for operations
const current = parseFloat(this.currentOperand) 

if(isNaN(prev) || isNaN(current)) return // evaluates if prev or current are empty, and stops executing, here if either are emppty.

switch(this.operation){

    case '+':
        computation = prev + current
        break

    case '-':
            computation = prev - current
        break           

    case '*':
                computation = prev * current
        break

    case '÷':
        computation = prev / current
        break

    default: break


}

this.currentOperand = computation // stores our answers back into currentOperand
this.operation = undefined // leaves operation back in its original state (undefined)
this.previousOperand = "" //clears out our previousOperand, also leaving it back in its orignal state(empty)
   

}


// getDisplayNum(number){

//     const floatNumber = parseFloat(number) //converts number (string) into an actual 
//     if(isNaN(floatNumber)) reutrn //exit code block, because its cant edit anything but a number
//     return floatNumber.toLocaleString('en') //takes our float number and applies a "local"(en) format to it.

// }


updateDisplay(){


this.currentOperandText.innerText = this.currentOperand //saves the value of currentOperand(appendNumber) into the variable that has access to our current-operand Div.

// if(this.operation != equalsButton.innerText){


// this.previousOperandText.innerText = `${this.previousOperand} ${this.operation} `

//  }
this.previousOperandText.innerText = this.previousOperand //saves the value of previousOperand(appendNumber) into the variable that has access to our previous-operand Div.
  



}


}




const numberButtons = document.querySelectorAll('[data-number]') //selecting all elements that match the data attribute ([]) data-number and stores them into a node list.

const operationButtons = document.querySelectorAll('[data-operation]') // selects all elements that match data attribute([]) data-operation and stores them into a node list.

const equalsButton = document.querySelector('[data-equals]') //selecting an element that matches the data attribute ([]) data-equals.

const deleteButton = document.querySelector('[data-delete]') //selecting an element that matches the data attribute ([]) data-delete.

const allClearButton = document.querySelector('[data-all-clear]') //selecting an element that matches the data attribute ([]) data-all-clear.

const previousOperandText = document.querySelector('[data-previous-operand]') //selecting an element that matches the data attribute ([]) data-previous-operand.

const currentOperandText = document.querySelector('[data-current-operand]') //selecting an element that matches the data attribute ([]) data-current-operand.

const darkMode = document.querySelector('#darkMode')



const calculator = new Calculator(previousOperandText,currentOperandText) //create a new calc, and and pass it the two elements to have access to the divs




numberButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText) // takes the value inside each button that calls this method when clicked and passes it to the appendNumber function as an argument.
        calculator.updateDisplay() //
    } )
}) 

operationButtons.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation (button.innerText) // takes the value inside each button that calls this method when clicked and passes it to the chooseOperation function as an argument.
        calculator.updateDisplay() //
    } )
}) 





equalsButton.addEventListener('click', button => {
calculator.compute()
calculator.updateDisplay()



})


allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})




deleteButton.addEventListener('click', button => {

    calculator.delete()
    calculator.updateDisplay()

})


// darkMode.addEventListener('click', button => {

    
    

// })
