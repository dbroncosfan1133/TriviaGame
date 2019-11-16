$(document).ready(function () {

var questions = [{
    question: "In the book Animal Farm, who teaches the sheep to chant 'four legs good, 2 legs bad?'",
    answer: ["Napoleon", "Boxer", "Squealer", "Clover"],
    name: "legs",
    correct: "Squealer",
    class: ".legs"
},{
    question: "In the book 'The Prince,' what is Machiavelli's approach to the use of cruelty?",
    answer: ["Never inflict cruelty at all", "Inflict small amounts of cruelty consistently", "Inflict all the cruelty at once, then never again", "Inflict cruelty suddenly and unpredictably"],
    name: "prince",
    correct: "Inflict all the cruelty at once, then never again",
    class: ".prince"
},{
    question: "In the book 'The Odyessy,' Menelaus is king of which city?",
    answer: ["Athens", "Argos", "Pylos", "Sparta"],
    name: "odyessy",
    correct: "Sparta",
    class: ".odyessy"
},{
    question: "Which med student's travels, before he became a Marxist icon, are detailed in the book 'The Motorcycle Diaries'?",
    answer: ["Ernesto Che Guevara", "Fidel Castro", "John Dillinger", "Hugo Chavez"],
    name: "student",
    correct: "Ernesto Che Guevara",
    class: ".student"
},{
    question: "Who is John Galt?",
    answer: ["The 6th president of the United States", "Jack the Rippers real name", "A pseudonym for Ayn Rand", "A fictional character in Atlas Shrugged"],
    name: "galt",
    correct: "A fictional character in Atlas Shrugged",
    class: ".galt"
},{
    question: "In the book '1984', what does Winston trace in the dust on the table at the end of the novel?",
    answer: ["I love Big Brother", "2+2=5", "Death to Big Brother", "Room 101"],
    name: "winston",
    correct: "2+2=5",
    class: ".winston"
},
]

var choices = ["first", "second", "third", "fourth"];

$(".startGame").on("click", function() {
    countdown(60);
    showQuestions();
});

var showQuestions = function () {
    $(".questions").empty();
    for (var i = 0; i < 6; i++) {
        $('.questions').prepend('<div class="' + questions[i].name + '"></div>');
        $(questions[i].class).append('<div class ="ques-title">' + questions[i].question + '</div>');

        for (var j = 0; j <= 3; j++) {
            $(questions[i].class).append("<input type='radio' id='choices' name='" + questions[i].name + "' value='" + questions[i].answer[j] + "'/><label for='" + choices[j] + "'>" + questions[i].answer[j] + "</label>");
        }
        $(".questions").prepend("<hr />");
        }
    }

var countdown = function(seconds) {
    var timer = setInterval(function () {
        seconds = seconds - 1;
        $("#timer").html(seconds);

        if (seconds <= 0) {
            $(".container").fadeOut(500);
            var correctAnswers = 0;
            var wrongAnswers = 0;

            for(var i = 0; i < 6; i++) {
                if($("input:radio[name='" + questions[i].name + "']:checked").val() === questions[i].correct) {
                    correctAnswers++;
                } else {
                    wrongAnswers++;
        };
    }
    alert("Times Up!!!" + "\n" + "Number Correct: " + correctAnswers + "\n" + "Number Wrong: " + wrongAnswers);
    clearInterval(timer);
    return;
}
},1000);

$("#submit").on("click", function() {   
    clearInterval(timer);
    $(".container").fadeOut(500);
})

};

var results = $("#submit").on("click", function() {
    var correctAnswers = 0;
    var wrongAnswers = 0;

    for (var i = 0; i < 6; i++) {
        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {
            correctAnswers++;
        } else {
            wrongAnswers++;
        };
    };
    countdown();
    
    alert("Number Correct: " + correctAnswers + "\n" + "Number Wrong: " + wrongAnswers);

})


})