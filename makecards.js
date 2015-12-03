//To generate new cards:
a=//replace this text with json content
//and run with node.

//node fs is required.
// install with: npm install node-fs

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
        stream.write("\nQ:\t" + question + "\n");
        if (answer){
          stream.write("\nA:\t" + answer   + "\n\n");
        }else {
          stream.write("\nMultiple answers:\n");
          for (var elem in ans) {
            if (ans.hasOwnProperty(elem)) {
              stream.write("\t- " + currentObject.answers[elem]+"\n");
            }
          }
        };
      };
    };
  stream.end();
});
