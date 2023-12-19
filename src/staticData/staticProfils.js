// Generate Table Data
function createTable(id, Day, Sub1, Sub2, Sub3, Sub4) {
    return { id, Day, Sub1, Sub2, Sub3, Sub4 };
  }
  
  const tablechild1 = [
    createTable(
      0,
      'Monday',
      'Algorythm',
      'Maths',
      'Physics',
      'Algo',
    ),
    createTable(
      1,
      'Tuesday',
      'Physics',
      'Maths',
      'Science',
      'Math',
    ),
    createTable(
    2,
    'Wednesday',
    'Sport',
    'Maths',
    'Science',
    'Electronics',),
    createTable(
      3,
      'Thursday',
      'Sport',
      'Islam',
      'History',
      'Science',
    ),
    createTable(
      4,
      'Friday',
      'Sport',
      'Maths',
      '///',
      '///',
    ),
    createTable(5, 'Saturday',
    'Sport',
    'Maths',
    '///',
    '///',),
  ];
  const tablechild2 = [
    createTable(
      0,
      'Monday',
      'English',
      'Science',
      'History',
      'Art',
    ),
    createTable(
      1,
      'Tuesday',
      'Science',
      'History',
      'English',
      'Geography',
    ),
    createTable(
      2,
      'Wednesday',
      'Maths',
      'Geography',
      'Art',
      'Music',
    ),
    createTable(
      3,
      'Thursday',
      'Maths',
      'Art',
      'Science',
      'Music',
    ),
    createTable(
      4,
      'Friday',
      'Science',
      'Art',
      '///',
      '///',
    ),
    createTable(
      5,
      'Saturday',
      'Maths',
      'Art',
      '///',
      '///',
    ),
  ];
  const tablechild3 = [
    createTable(
      0,
      'Monday',
      'Physics',
      'Chemistry',
      'Biology',
      'Computer Science',
    ),
    createTable(
      1,
      'Tuesday',
      'Chemistry',
      'Biology',
      'Physics',
      'Environmental Science',
    ),
    createTable(
      2,
      'Wednesday',
      'Biology',
      'Environmental Science',
      'Physics',
      'Computer Science',
    ),
    createTable(
      3,
      'Thursday',
      'Biology',
      'Environmental Science',
      'Chemistry',
      'Computer Science',
    ),
    createTable(
      4,
      'Friday',
      'Biology',
      'Environmental Science',
      '///',
      '///',
    ),
    createTable(
      2,
      'Saturday',
      'Biology',
      'Environmental Science',
      '///',
      '///',
    ),
  ];
  

  // Generate Order Data
function createAbsences(id, date, name, time, teacher, subject) {
    return { id, date, name, time, teacher, subject };
  }
  
  const abschild1 = [
    createAbsences(
      0,
      '16 Mar, 2019',
      'Elvis Presley',
      '12h-13h',
      'XXXX',
      'Algo',
    ),
    createAbsences(
      1,
      '16 Mar, 2019',
      'Paul McCartney',
      '8h-9h',
      'XXXX',
      'Math',
    ),
    createAbsences(2, '16 Mar, 2019', 'Tom Scholz', '11h-12h', 'XXXX', 'React'),
    createAbsences(
      3,
      '16 Mar, 2019',
      'Michael Jackson',
      'Gary, IN',
      'XXXX',
      'Mechanics',
    ),
    createAbsences(
      4,
      '15 Mar, 2019',
      'Bruce Springsteen',
      'Long Branch, NJ',
      'XXXX',
      'Electronics',
    ),
   ];
  const abschild2 = [
    createAbsences(
      0,
      '17 Mar, 2019',
      'John Lennon',
      '14h-15h',
      'XXXX',
      'Physics',
    ),
    createAbsences(
      1,
      '17 Mar, 2019',
      'Ringo Starr',
      '9h-10h',
      'XXXX',
      'Biology',
    ),
    createAbsences(2, '17 Mar, 2019', 'George Harrison', '13h-14h', 'XXXX', 'Chemistry'),
    createAbsences(
      3,
      '17 Mar, 2019',
      'Paul McCartney',
      '15h-16h',
      'XXXX',
      'Computer Science',
    ),
    createAbsences(
      4,
      '16 Mar, 2019',
      'Bruce Springsteen',
      '16h-17h',
      'XXXX',
      'Music',
    ),
   ];
  const abschild3 = [
    createAbsences(
      0,
      '18 Mar, 2019',
      'Elvis Presley',
      '10h-11h',
      'XXXX',
      'Mathematics',
    ),
    createAbsences(
      1,
      '18 Mar, 2019',
      'Paul McCartney',
      '11h-12h',
      'XXXX',
      'Art',
    ),
    createAbsences(2, '18 Mar, 2019', 'Tom Scholz', '12h-13h', 'XXXX', 'History'),
    createAbsences(
      3,
      '18 Mar, 2019',
      'Michael Jackson',
      '13h-14h',
      'XXXX',
      'English',
    ),
    createAbsences(
      4,
      '17 Mar, 2019',
      'Bruce Springsteen',
      '14h-15h',
      'XXXX',
      'Geography',
    ),
   ];
   



export const childrenProfiles =[
    {
        id:0,
        informations:{
            id: 0,
            name: 'Ahmed',
            classe: 'Bac Technique',
        },
        schedule:tablechild1,
        absences:abschild1,

    },
    {
        id:1,
        informations:{
            id: 1,
            name: 'Yassmin',
            classe: '3eme',
        },
        schedule:tablechild2,
        absences:abschild2,


    },
    {
        id:2,
        informations:{
            id: 2,
            name: 'Salwa',
            classe: '2eme Eco',
        },
        schedule:tablechild3,
        absences:abschild3,


    },

]



//find profile by name 
export const findChildProfile= (name)=>{
    return childrenProfiles.find((profile)=>{
            return profile.informations.name === name
    })
}