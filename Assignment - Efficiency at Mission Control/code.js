function StartTheCountdown()
        {
            //Purpose of this function is to start the countdown

            //Declaring variables
            var countdown = 10; //What will be displayed to user
            var timer = 1000; //Used to keep track of time, 1000 = 1 second as we're using milliseconds
            
            //For loop to increment the timer down by one each time it goes through the loop
            for (var i = 1; i < 12; i++)
            {
                //Use the set timeout function for countdown
                setTimeout(() => {
                    //If/else statements to handle coloring text
                    if (countdown > 7)
                    {
                        //Make text green for countdown if between 7 and 10, not including 7
                        document.getElementById("CountdownDisplay").style.color = "green";
                    }
                    else if (countdown <=7 && countdown > 3)
                    {
                        //Make text orange for countdown if between 3 and 7, not including 3
                        document.getElementById("CountdownDisplay").style.color = "orange";
                    }
                    else if (countdown <=3 && countdown > -1)
                    {
                        //Make text red for countdown if between -1 and 3, not including -1
                        document.getElementById("CountdownDisplay").style.color = "red";
                    }

                    //Alter textbox to display time left
                    if (countdown == 0)
                    {
                        //Add blastoff to text when countdown hits zero
                        document.getElementById("CountdownDisplay").innerHTML = "The time left is: " + countdown + ". Blastoff!";
                    }
                    else
                    {
                        //Otherwise display regular message for remaining time
                        document.getElementById("CountdownDisplay").innerHTML = "The time left is: " + countdown;
                    }

                    //Increment the countdown and continue the timeout function
                    countdown = countdown - 1;
                }, timer * i)
            }
        }