class StudentDetails {
    constructor(name, roll_no, studentClass, section, marks) {
        this.name = name;
        this.roll_no = roll_no;
        this.studentClass = studentClass;
        this.section = section;
        this.marks = marks;
    }
  
    printReportCard() {
        const totalMarks = Object.values(this.marks).reduce((acc, curr) => acc + curr, 0);
        const totalSubjects = Object.keys(this.marks).length;
        const percentage = (totalMarks / (totalSubjects * 100)) * 100;
  
        console.log('+--------------------+');
        console.log('|     REPORT CARD    |');
        console.log('+--------------------+');
        console.log(`| Name     - ${this.name} |`);
        console.log(`| Roll no. - ${this.roll_no}      |`);
        console.log(`| Class    - ${this.studentClass}       |`);
        console.log(`| Section  - ${this.section}       |`);
  
        // Print individual subject marks without a loop
        console.log(`| Science  - ${this.marks.science}      |`);
        console.log(`| Maths    - ${this.marks.maths}      |`);
        console.log(`| S.Sc     - ${this.marks.social_science}      |`);
        console.log(`| English  - ${this.marks.english}      |`);
        console.log(`| Hindi    - ${this.marks.hindi}      |`);
  
        console.log(`| Percentage - ${percentage.toFixed(1)} %|`);
        console.log('+--------------------+');
    }
  }
  
  // Create an object and use the method to print the report card
  const student = new StudentDetails('Huzaifa', 16, 'X', 'A', {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
  });
  
  student.printReportCard();
  