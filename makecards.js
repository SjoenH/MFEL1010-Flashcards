
var fs = require('fs');
var stream = fs.createWriteStream("flashcards.txt");
stream.once('open', function(fd) {
  for (var elem in a.questions) {
    if (a.questions.hasOwnProperty(elem)) {
        currentObject = a.questions[elem];
        //Getting questions and answers
        getQuestion = currentObject.question;
        question = getQuestion;//Pics out only nb-questions. Set to 2 for English.

        ans = currentObject.correct;
        answer = currentObject.answers[ans];
        //Writing to file
        stream.write(question+"\t");
        if (answer){
          stream.write(answer + "\n\n");
        }else {
          for (var elem in ans) {
            if (ans.hasOwnProperty(elem)) {
              stream.write(","+ currentObject.answers[elem]);
            }
          }
          stream.write("\n\n");
        };
      };
    };
  stream.end();
});
