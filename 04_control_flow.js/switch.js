// SWITCH CASE syntax

//switch (key){
//    case value:
//        break;

//    default:
//        break;   
//}


const month = 3  // suppose if we use string " march " instead of 3 then then change the case name

switch(month){
    case 1: // case "jan":
        console.log("januaury");
        break;
    case 2: // case "feb":
        console.log("february");
        break;
    case 3: // case "march":
        console.log("march");
        break;
    case 4: // case "april"
        console.log("april");
        break;

    default:
        console.log("if not matched anything then it is default case match")
        break;    
}
// op = march
// break; will just break the output of the result when it is matched sincce we gave 3 so it matched with april
/// but when you do not use break other output will be shown as well
//NOTE : break will break at the point where the output is matched but still keeps the default case on whenever the output not found then the defualt will be run


// in case of string

const subject = "math"

switch(subject){

    
    case "english":
        console.log("yes the subject is english");
        break;

    case "grammar":
        console.log("yes the subject is grammar");
        break;

    case "social":
        console.log("yes the subject is social");
        break;

    case "math":
        console.log("yes the subject is math");
        break;

    case "nepali":
        console.log("yes the subject is nepali");
        break;

    default:
        console.log("none subject matched so default") 
        break;   
  
}



// year  DEFAULT CASE

const year = 7

switch(year){

    case 1: "2010"
    console.log("it is year 2010");
    break;

    case 2: "2020"
    console.log("it is year 2020");
    break;

    case 3: "2021"
    console.log("it is year 2021");
    break;

    case 4: "2022"
    console.log("it is year 2022");
    break;

    case 5: "2023"
    console.log("it is year 2023");
    break;

    case 6: "2024"
    console.log("it is year 2024");
    break;

    default:
        console.log("it is none of above it is year 2025")
        break;

}
