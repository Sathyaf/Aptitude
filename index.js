var i = 0;
    var correctCount = 0 ;
    //initialize the first question
    generate(0);
    // generate from json array data with index
    function generate(index) {
        document.getElementById("question").innerHTML = jsonData[index].q;
        document.getElementById("optt1").innerHTML = jsonData[index].opt1;
        document.getElementById("optt2").innerHTML = jsonData[index].opt2;
        document.getElementById("optt3").innerHTML = jsonData[index].opt3;
    }
    
    function checkAnswer() {
        if (document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer) {
           correctCount++;
        }
        if (document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer) {
            correctCount++;
        }
        if (document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer) {
            correctCount++;
        }
        // increment i for next question
        i++;
        if(jsonData.length-1 < i){
            document.write("<body style='background-color:white;'>");
            document.write("<div style='color:navy;font-size:18pt;margin-top:17rem;text-align:center;'>Your score is : "+correctCount+"</div>");
            document.write("</body>");
        }
        // callback to generate
        generate(i);
    }