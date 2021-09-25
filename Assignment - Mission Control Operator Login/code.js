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
                    else if (countdown <=7 && countdown > 4)
                    {
                        //Make text orange for countdown if between 4 and 7, not including 4
                        document.getElementById("CountdownDisplay").style.color = "orange";
                    }
                    else if (countdown <=4 && countdown > -1)
                    {
                        //Make text red for countdown if between -1 and 4, not including -1
                        document.getElementById("CountdownDisplay").style.color = "red";
                    }

                    //Alter textbox to display time left
                    if (countdown == 0)
                    {
                        //Add blastoff to text when countdown hits zero
                        document.getElementById("CountdownDisplay").innerHTML = "Warning Less than ½ way to launch, time left = " + countdown + ". Blastoff!";
                    }
                    else if (countdown < 5)
                    {
                        //If the message is less than 5 seconds, change what it reads as per the Fleet Admirals request
                        document.getElementById("CountdownDisplay").innerHTML = "Warning Less than ½ way to launch, time left = " + countdown;
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