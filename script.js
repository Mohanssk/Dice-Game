function rollDice(){
    var d_num1 = Math.floor(Math.random()*6)+1;
    var d_num2 = Math.floor(Math.random()*6)+1;
    
    let img_src1="./images/dice"+d_num1+".png";
    let img_src2="./images/dice"+d_num2+".png";

    document.querySelector(".img1").setAttribute("src",img_src1);
    document.querySelector(".img2").setAttribute("src",img_src2);

    if(d_num1 > d_num2){
        document.querySelector("h4").innerHTML = "Player 1 Wins ";
    }
    else if(d_num1 === d_num2){
        document.querySelector("h4").innerHTML = "Match Draws";
    }
    else{
        document.querySelector("h4").innerHTML = "Player 2 Wins ";
    }
}