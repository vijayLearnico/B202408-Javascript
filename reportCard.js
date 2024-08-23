// You will get 5 subject marks
// You have to give a grade for each subjects
// You have to find the overall grade and mark

const tamilMark = 90;
const englishMark = 85;
const mathsMark = 60;
const scienceMark = 55;
const socialMark = 40;

// Mark >= 90 -> A
// Mark >= 75 -> B
// Mark >= 45 -> C
// Mark < 45 -> F

const overAllMark = tamilMark + englishMark + mathsMark + scienceMark + socialMark;

function gradingSystem(mark){

    if(mark >= 90){
        return 'A';
    } else if (mark >= 75){
        return 'B';
    } else if(mark >= 45){
        return 'C';
    } else{
        return 'F';
    }

}

const tamilGrade = gradingSystem(tamilMark);
const englishGrade = gradingSystem(englishMark);
const mathsGrade = gradingSystem(mathsMark);
const scienceGrade = gradingSystem(scienceMark);
const socialGrade = gradingSystem(socialMark);


console.log('Tamil Grade is :',tamilGrade)
console.log('English Grade is :',englishGrade)
console.log('Maths Grade is :',mathsGrade)
console.log('Social Grade is :',socialGrade)
console.log('Science Grade is :',scienceGrade)

// mark >= 450 -> A
// Mark >= 350 -> B
// Mark >= 300 -> C
// MArk < 300 -> E

if(overAllMark >= 450){
    console.log('Overall Grade is A');
} else if (overAllMark >= 350){
    console.log('Overall Grade is B');
} else if(overAllMark >= 300){
    console.log('Overall Grade is C');
} else{
    console.log('Overall Grade is E');
}

