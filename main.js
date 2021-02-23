const banglaBtn=document.getElementById('banglaBtn')
 const englishBtn=document.getElementById('englishBtn')
 const ictBtn=document.getElementById('ictBtn')
 const totalBtn=document.getElementById('totalBtn')



 banglaBtn.addEventListener('click',function(){;
  gradePoint();

})
englishBtn.addEventListener('click',function(){
  gradePoint2();

})
ictBtn.addEventListener('click',function(){
  gradePoint3();

})

totalBtn.addEventListener('click',function(){
    const input1 = document.getElementById('numberPlace').value
    const number= parseInt(input1)
    const input2 = document.getElementById('numberPlace2').value
    const number2= parseInt(input2)
    const input3 = document.getElementById('numberPlace3').value
    const number3= parseInt(input3)
    const total = number +  number2 + number3;
    document.getElementById('totalMark').innerText = total;
    console.log(total);
})

function gradePoint() {
    const input = document.getElementById('numberPlace').value
    var grade;
switch (true) {
    case (input  <=32 && input>=0):
        grade ='F'
        break;

        case (input <=39 && input  >=33):
            grade ="D"
        break;

        case (input  <=49 && input  >=40):
            grade ="C"
        break;    
        case (input  <=59 && input  >=50):
            grade ="B"
        break;

        case (input  <=69 && input >=60):
            grade ="A"
        break;

        case(input  <=79 && input  >=70):
            grade ="A"
        break;

        case (input  <=100 && input >=80):
            grade ="A+"
        break;    
        
        default:
            return 'Invalid';
}
    document.getElementById('banglaGrade').innerText = grade;
    console.log(grade);
   
    
    
}

function gradePoint2() {
    const input = document.getElementById('numberPlace2').value
    var grade;
switch (true) {
    case (input  <=32 && input>=0):
        grade ='F'
        break;

        case (input <=39 && input  >=33):
            grade ="D"
        break;

        case (input  <=49 && input  >=40):
            grade ="C"
        break;    
        case (input  <=59 && input  >=50):
            grade ="B"
        break;

        case (input  <=69 && input >=60):
            grade ="A"
        break;

        case(input  <=79 && input  >=70):
            grade ="A"
        break;

        case (input  <=100 && input >=80):
            grade ="A+"
        break;    
        
        default:
            return 'Invalid';
}
    document.getElementById('englishGrade').innerText = grade;
    console.log(grade);
}
function gradePoint3() {
    const input = document.getElementById('numberPlace3').value
    var grade;
switch (true) {
    case (input  <=32 && input>=0):
        grade ='F'
        break;

        case (input <=39 && input  >=33):
            grade ="D"
        break;

        case (input  <=49 && input  >=40):
            grade ="C"
        break;    
        case (input  <=59 && input  >=50):
            grade ="B"
        break;

        case (input  <=69 && input >=60):
            grade ="A"
        break;

        case(input  <=79 && input  >=70):
            grade ="A"
        break;

        case (input  <=100 && input >=80):
            grade ="A+"
        break;    
        
        default:
            return 'Invalid';
}
    document.getElementById('ictGrade').innerText = grade;
    console.log(grade); 
}