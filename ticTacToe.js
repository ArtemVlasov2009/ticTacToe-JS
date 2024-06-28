const buttons = document.querySelectorAll('.button')
let currentPlayer = 'X'
let checkVictory = 0


for (let count = 0; count < buttons.length; count++) {
    let button = buttons[count]
    button.addEventListener(type= 'click',

        listener =function(event){
            if(currentPlayer == 'X'){   
                if(button.value != "X" && button.value != "O"){
                    button.textContent = "X"
                    button.value = "X"
                    currentPlayer = "O"
                }
            }
            else if(currentPlayer == 'O'){   
                if(button.value != "X" && button.value != "O"){
                    button.textContent = "O"
                    button.value = "O"
                    currentPlayer = "X"
                }
            }
            if(checkVictory == 0){
                //1 2 3
                //4 5 6
                //7 8 9
                if(document.getElementById("1").value == "X" && document.getElementById("2").value == "X" && document.getElementById("3").value == "X"){
                    console.log(1)
                    document.getElementById('1').style.backgroundColor = '#009600'
                    document.getElementById('2').style.backgroundColor = '#009600'
                    document.getElementById('3').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                
                if(document.getElementById("4").value == "X" && document.getElementById("5").value == "X" && document.getElementById("6").value == "X"){
                    document.getElementById('4').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('6').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("7").value == "X" && document.getElementById("8").value == "X" && document.getElementById("9").value == "X"){
                    document.getElementById('7').style.backgroundColor = '#009600'
                    document.getElementById('8').style.backgroundColor = '#009600'
                    document.getElementById('9').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("1").value == "X" && document.getElementById("4").value == "X" && document.getElementById("7").value == "X"){
                    document.getElementById('1').style.backgroundColor = '#009600'
                    document.getElementById('4').style.backgroundColor = '#009600'
                    document.getElementById('7').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("2").value == "X" && document.getElementById("5").value == "X" && document.getElementById("8").value == "X"){
                    document.getElementById('2').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('8').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("3").value == "X" && document.getElementById("6").value == "X" && document.getElementById("9").value == "X"){
                    document.getElementById('3').style.backgroundColor = '#009600'
                    document.getElementById('6').style.backgroundColor = '#009600'
                    document.getElementById('9').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("1").value == "X" && document.getElementById("5").value == "X" && document.getElementById("9").value == "X"){
                    document.getElementById('1').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('9').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("3").value == "X" && document.getElementById("5").value == "X" && document.getElementById("7").value == "X"){
                    document.getElementById('3').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('7').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("1").value == "O" && document.getElementById("2").value == "O" && document.getElementById("3").value == "O"){
                    console.log(1)
                    document.getElementById('1').style.backgroundColor = '#009600'
                    document.getElementById('2').style.backgroundColor = '#009600'
                    document.getElementById('3').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                
                if(document.getElementById("4").value == "O" && document.getElementById("5").value == "O" && document.getElementById("6").value == "O"){
                    document.getElementById('4').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('6').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("7").value == "O" && document.getElementById("8").value == "O" && document.getElementById("9").value == "O"){
                    document.getElementById('7').style.backgroundColor = '#009600'
                    document.getElementById('8').style.backgroundColor = '#009600'
                    document.getElementById('9').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("1").value == "O" && document.getElementById("4").value == "O" && document.getElementById("7").value == "O"){
                    document.getElementById('1').style.backgroundColor = '#009600'
                    document.getElementById('4').style.backgroundColor = '#009600'
                    document.getElementById('7').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("2").value == "O" && document.getElementById("5").value == "O" && document.getElementById("8").value == "O"){
                    document.getElementById('2').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('8').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("3").value == "O" && document.getElementById("6").value == "O" && document.getElementById("9").value == "O"){
                    document.getElementById('3').style.backgroundColor = '#009600'
                    document.getElementById('6').style.backgroundColor = '#009600'
                    document.getElementById('9').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("1").value == "O" && document.getElementById("5").value == "O" && document.getElementById("9").value == "O"){
                    document.getElementById('1').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('9').style.backgroundColor = '#009600'
                    checkVictory = 1
                }
                if(document.getElementById("3").value == "O" && document.getElementById("5").value == "O" && document.getElementById("7").value == "O"){
                    document.getElementById('3').style.backgroundColor = '#009600'
                    document.getElementById('5').style.backgroundColor = '#009600'
                    document.getElementById('7').style.backgroundColor = '#009600'
                    checkVictory = 1
                }    
            }
            if(checkVictory == 1){
                console.log(2)
                function stopTouchButton(){
                    for (let countt = 0; countt < buttons.length; countt++) {
                        buttons[countt].disabled = true
                    }           
                }
                stopTouchButton()
            }
            })
}