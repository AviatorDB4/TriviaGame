//Questions array
var questions = [
    {
        question: "What year did the Arizona Diamondbacks win the World Series?",
        choices: ["1998", "2001", "2007", "2011"],
        correctAnswer: 1
    },
    {
        question: "What year did Blazing Saddles come out?",
        choices: ["1974", "1969", "1979", "1967"],
        correctAnswer: 0
    },
    {
        question: "What year did the Beatles album Rubber Souls get released",
        choices:["1963", "1964", "1965", "1966"],
        correctAnswer: 2
    },
    {
        question: "What is Metallica's most popular song?",
        choices:["One", "Fuel", "For Whom the Bell Tolls", "Nothing Else Matters"],
        correctAnswer: 3
    },
    {
        question: "What was the date of Randy Johnson's perfect game for the Arizona Diamondbacks?",
        choices:["May 18th, 2004", "September 1st, 2001", "January 23rd, 1998", "June 6th, 2002"],
        correctAnswer: 0
    },
    {
        question: "What is the name of the biggest Dota 2 tournament that takes place every August?",
        choices:["The League Championship Series", "ESL One", "The International", "Epicenter"],
        correctAnswer: 2
    },
    {
        question: "Who punches Adam Sandler in Happy Gilmore during the celeberty golf tournament?",
        choices:["Bob Barker", "David Letterman", "Arnold Palmer", "Vin Scully"],
        correctAnswer: 0
    },
    {
        question: "What year was Welcome to My Nightmare by Alice Cooper released?",
        choices:["1971", "1981", "1975", "1980"],
        correctAnswer: 2
    },
    {
        question: "Who said: 'You miss 100% of the shots you dont take'?",
        choices:["Michael Scott", "Wayne Gretzky", "It's Michael Scott", "Probably Michael Scott"],
        correctAnswer: 1
    },
    {
        question: "Which of the following airplanes is a WWII Fighter?",
        choices:["B-29", "F-4 Phantom", "Mig-21", "P-51 Mustang"],
        correctAnswer: 3
    },
    ];
    console.log(questions)
//variables for questions, answers and quizOver
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () 
{

    //timer function for 60s
    var count = 60;
    var counter = setInterval(timer, 1000);

    function timer()
    {
        count = count - 1;
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }
        document.getElementById("timer").innerHTML = count + " seconds";
    }
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizQ").hide();

    // On clicking next, display the next question
    $(this).find(".next-button").on("click", function () 
    {
        if (!quizOver) 
        {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) 
            {
                $(document).find(".quizQ").text("Please select an answer");
                $(document).find(".quizQ").show();
            } else 
                {
                $(document).find(".quizQ").hide();

                if (value == questions[currentQuestion].correctAnswer) 
                {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) 
                {
                    displayCurrentQuestion();
                } else 
                {
                    displayScore();
                    
                    $(document).find(".next-button").text("Play Again?");
                    quizOver = true;
                }
            }
        } else 
        { 
            quizOver = false;
            $(document).find(".next-button").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

//Current question and the choices
function displayCurrentQuestion() 
{

    console.log("Test");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) 
    {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() 
{
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() 
{
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() 
{
    $(document).find(".result").hide();
};