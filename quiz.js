function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var q6=document.quiz.question6.value;
    var q7=document.quiz.question7.value;
    var q8=document.quiz.question8.value;
    var q9=document.quiz.question9.value;
    var q10=document.quiz.question10.value;
    var result=document.getElementById('result');
    if(q1=="True") {c++}
    if(q2=="True") {c++}
    if(q3=="True") {c++}
    if(q4=="True") {c++}
    if(q5=="False") {c++}
    if(q6=="True") {c++}
    if(q7=="True") {c++}
    if(q8=="True") {c++}
    if(q9=="True") {c++}
    if(q10=="True") {c++}
    
    result.textContent="Score: "+c;

   
}