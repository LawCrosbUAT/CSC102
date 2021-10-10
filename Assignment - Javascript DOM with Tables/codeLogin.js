function checkCreds() //This function will take in the input from the form and evaluate it according to the assignment requirements
{
    //Create variables to take in and store info the user input into the form.
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var badgeNumber = document.getElementById("badgeNumber").value;

    var fullName = firstName + " " + lastName; //Performing double concatination to get first and last name together

    //Using an if statement to evaluate information from the form
    if (fullName.length > 20 || fullName.length < 2) //First, check if the name is valid and is less than 20 characters.
    {
        //If the name is greater than 20 characters long or is too short to be a name, display invalid message
        document.getElementById("loginStatus").innerHTML = "Input invalid. Full name has either too many or too few characters.";
    }
    else if (badgeNumber >= 1000 || badgeNumber < 0) //Second, check to see if badge number is 3 or less digits and is positive
    {
        //If the badge number is too big or negative, display invalid message
        document.getElementById("loginStatus").innerHTML = "Input invalid. Badge Number has more than three digits or is negative.";
    }
    else //If they pass both above statements, grant access to MissionControl.html
    {
        alert("Access Granted. Welcome " + fullName + "!");
        location.replace("MissionControl.html");
    }


}