// -------------------------------------- Chapter 17 to 20 ---------------------------------

// ------ Ques 1 

for(var i = 1;i<=10;i++) 
{
    console.log(i)
}

// ------ Ques 2 

for(var i = 1;i<=12;i++) 
{
    console.log("Muhammad faizan")
}

// ------ Ques 3 

for (var i=0;i<=4;i++) 
{

}

// ------ Ques 4 

for(var text=1;text<=100;text++) 
{
    console.log("WELCOME TO YOU..")
}

// ------ Ques 5 

for(var i=3;i>=1;i--) 
{
    console.log("Iteration " + i)
}

// ------ Ques 6 

var arr = [1,2,3,4,5,6];

var arrlength = arr.length;

console.log(arrlength);

// ------ Ques 7 

var variableName = "flag" + " , " + true;

console.log(variableName);

// ------ Ques 8 

var pets = ["Cat","Dog","Horse","Lion","Birds"];

for(var i=0;i<pets.length;i++) 
{
    console.log(pets[i])
}

// ------ Ques 9 

for (var i = 1; i <= 10; i++) 
{
    console.log(i);
    if (i === 1) 
    {
      alert(i);
      break;
    }
}

// ------ Ques 10  

var userName = ["sahil","faizan","mudassir","moiz","absar"];

var enterUsername = prompt("Enter First Name.");

for(var i = 0; i <= userName.length; i++) 
{
    if(enterUsername === "sahil") 
    {
        alert("WELCOME..");
    }
    else if(enterUsername === "faizan") 
    {
        alert("WELCOME..");
    }
    else if (enterUsername === "mudassir") 
    {
        alert("WELCOME..");
    }
    else if (enterUsername === "moiz") 
    {
        alert("WELCOME..");
    } 

    else if (enterUsername === "absar") 
    {
        alert("WELCOME..");
    } 

    else 
    {
        alert("Please write correct user name")
    }
}

// ------ Ques 11 

var matchFound = false;
var list =   ["Cat","Dog","Frog"]
var userInput = prompt("Enter Input");

for (var i = 0; i < list.length; i++) 
{
  if (userInput === list[i]) 
  {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (matchFound) 
{
  alert("Match not found");
}

// ------ Quest 12 

var firstArr = ["a", "b", "c", "d", "e", "f"]; 
var secondArr = [1, 2, 3, 4, 5, 6];

for(var i = 0; i < firstArr.length; i++) 
{
    var firstAlpha = firstArr[i]; 

    for(var k = 0; k < secondArr.length; k++) 
    {
        var secondAlpha = secondArr[k];

        console.log(firstAlpha + secondAlpha);
    }
}

// --------------------------------------------- End ----------------------------------------------