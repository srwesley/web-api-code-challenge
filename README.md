# Web Api Code Challenge

Created a quiz with 10 questions and multi-choice answers. How it should function is that once you get to the main page, you hit the start button under the main display, which will start the timed quiz. The questions will also generate randomly each time the user starts the quiz as well.

Up in the upper right corner, it displays the time remaining in seconds, at which it starts at 100, and counts down from there. The goal is to answer all questions correctly, which will display on a hidden banner element under the container holding the questions and answers, if the correct or wrong answer was selected.

If a question is answered incorrectly, 10 seconds get docked from the countdown clock, as well as getting a correct answer gets 10 points, and getting an incorrect answer takes away 10 points. The user loses if the countdown timer reaches 0 before they have gone through all the questions.

If the user does finish the quiz in time before the countdown timer runs out, it will display a page indicating how many points they've earned, and then instructs them to enter in their initials in a form field, which not only submits the user's initials and point count to the local storage, but the page will change to a high score list, showing the high scores of each user who did the quiz.

Under the high score list, there are buttons to either clear the high score list, or to go back to the main page that started up where the user can start up the quiz again. The main page also has a link to go to the high score list as well, versus having to go all the way through the quiz to see the high scores.

This was a more difficult project, and there are some hiccups in the code. As no matter what I could think to try with the javascript code, each time I selected the correct answer to a question, the "wrong" banner would pop up below and also it would treat it as if I did answer incorrectly as dock from the time and add negative points to the score. Somewhere in the code for checking if the answer is correct, it's not actually taking the right answer into account.

As well too, for the high score page, in the list of scores, even after entering the initials, it doesn't display the initials or scores.

When I have the time, I'll definitely go back in and further look into it to see where it went wrong.