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

function start() 
    {
        //This function will disable the Start button and enable the Stop button
        document.getElementById("startButton").disabled = true;
        document.getElementById("stopButton").disabled = false;
    }
        
function stop() 
    {
        //This function will disable the Stop button and enable the Start button
        document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = true;
    }

function sound(src) 
    {
        //This function creates an audio element to attach to the document and connects it to the parameter, a sound file
        this.sound = document.createElement("audio");
        this.sound.src = src;

        //.play will cause the sound to play when called
        this.play = function() {
            this.sound.play();
        }
    }

function playSpaceStationSound()
    {
        //This function will play the sound effect of space stations when called
        mySound = new sound("./Sounds/us-lab-background.mp3");
        mySound.play();
    }