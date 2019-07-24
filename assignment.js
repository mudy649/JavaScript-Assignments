//Variable Declare for name ,age and experince for applicant
var Name , Age , Experince , fatherName , degreeLevel;
var rollNumber;

//Get input from user to store name , age and Experince
Name = prompt ("Enter Your Name" );
Age = prompt ("Enter Your Age" );
Experince = prompt ("How many years Experince you have" );


//Check Age and Eperince for applicant 
if(Age > 19 || Age < 12 && Experince >= 1 )

{
//if  He is Eligible we will get more information about him
fatherName = prompt ("Enter Father's Name:");
degreeLevel = prompt ("Enter your Last Education");

// Assign random Employ number
rollNumber = Math.random()*1000;
rollNumber = Math.floor(rollNumber);


//Final Result of Application 
alert("//////**************CONGRATULATION*****************/////\n"+
    "Name:"+Name+"\n"+"Age:"+Age +"\n"+"Experince:"+Experince+"\n"+"Fathers Name:"+ fatherName+ "\n"+"Education:"+degreeLevel +"\n"+"EmployId:"+rollNumber);
}

//If He is not Eligible
else
{alert("Sorry! You are not Eligible");}
