//Questions array
var triviaQuestions = [
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
        choices:["B-29", "F-4 Phantom", "Mig-21", "P-51"],
        correctAnswer: 3
    },
    ];
    console.log(triviaQuestions);

//game variables
 var currentQuestion = 0;
 var correctAnswer = 0;
 var quizEnd = false;

$(document).ready(function()
//prompt first question
{
    promptQuestion();
    $(this).find(".quiz").hide();

    //onclick
})