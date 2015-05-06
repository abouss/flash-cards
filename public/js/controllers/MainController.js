app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
    //$scope.flashCards = whateverName;
    //console.log(FlashCardsFactory.getFlashCards());

    FlashCardsFactory.getFlashCards().then(function (flashcards) {
        $scope.flashCards = flashcards;
    });

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];


    $scope.getCategoryCards = function (category) {

        FlashCardsFactory.getFlashCards(category).then(function (flashcards) {
            $scope.flashCards = flashcards;

        });
        $scope.chosenCategory = category;

    };

    $scope.answerQuestion = function (answer, flashCard) {
        if (!flashCard.answered) {
            flashCard.answered = true;
            flashCard.answeredCorrectly = answer.correct;


            (answer.correct) ? ScoreFactory.correct +=1 : ScoreFactory.incorrect +=1;
        }
    }
});