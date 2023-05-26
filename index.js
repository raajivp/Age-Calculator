const btnEl = document.getElementById
("btn"); 
const birthdayE1 = document.
getElementById("DoB") ; 
const resultE1 = document.getElementById("result")

function calculateAge()
{
    const birthdayValue = birthdayE1.
    value; 
    if(birthdayValue === "")
    {
        alert("Please enter your birthday")
    }else
    {
    const age = getage(birthdayValue) ;

    resultE1.innerText = `You are 
    ${age} ${age>1 ? "years" : 
    "years"} old`; 
    }
}

function getage(birthdayValue)
{
    const currentDate = new Date () ;
    const birthDate = new Date (birthdayValue)
    const age  =  currentDate.getFullYear() - birthDate.getFullYear();
    console.log(age) ; 

    return age ; 
}

btnEl.addEventListener("click",
calculateAge );