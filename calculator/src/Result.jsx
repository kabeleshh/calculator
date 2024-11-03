import React from "react";

function Result(prop){
    const {num1,num2,operation} = prop
    let answer ;
    if(num1!=null && num2!=null && operation){
        if(operation=="add"){
            answer = parseInt(num1) +parseInt(num2);
        }
        else if(operation=="sub"){
            answer = num1 - num2;
        }
        else if(operation=="mul"){
            answer = num1 * num2;
        }
        else if(operation=="div"){
            answer = (num1 / num2).toFixed(4)
        }
    }
    return(
        <h3>Answer : {answer} </h3>
    )
}

export default Result;