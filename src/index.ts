class School {
  public directions: string[] = [];

  addDirection(direction: string): void {
    this.directions.push(direction);
  }
}

const school = new School();

school.addDirection("Front-End");
school.addDirection("Back-End");
school.addDirection("Design");

// console.log(school.directions);

// --------------------------------------------- //

class Direction {
  public levels: number[] = [];
  private _name: string;

  constructor(name: string) {
    this._name = name;
    // console.log(`Direction created with name ${this._name}`);
  }

  get name(): string {
    // console.log(`Name is ${this._name}`);
    return this._name;
  }

  addLevel(level: number): void {
    this.levels.push(level);
    // console.log(`Current level is ${this.levels}`);
  }
}

const direction = new Direction("Bob");
// console.log(direction.name);
direction.addLevel(10);
direction.addLevel(20);

// --------------------------------------------- //

class Level {
  public groups: string[] = [];
  private _name: string;
  private _program: string;

  constructor(name: string, program: string) {
    this._name = name;
    this._program = program;
    console.log(`Name is ${this._name} lead of ${this._program}`);
  }

  get name(): string {
    return this._name;
  }

  get program(): string {
    return this._program;
  }

  addGroup(group: string): void {
    this.groups.push(group);
    console.log(`Groups ${this.groups}`);
  }
}

const level = new Level("John", "Program Startup");
level.addGroup("Group1");
level.addGroup("Group2");
level.addGroup("Group3");

// --------------------------------------------- //

class Group {
  private _students: any = [];
  public directionName: string;
  public levelName: string;

  constructor(directionName: string, levelName: string) {
    this.directionName = directionName;
    this.levelName = levelName;
    console.log(
      `Direction name is ${this.directionName}. Level name is ${this.levelName}`
    );
  }

  get students(): string[] {
    return this._students;
  }

  addStudent(student: string): void {
    this._students.push(student);
    console.log(`Added students by name ${this._students}`);
  }

  showPerformance(): any {
    const sortedStudents = this._students.sort(
      (a: any, b: any) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    console.log(`Students showed performance ${sortedStudents}`);

    return sortedStudents;
  }
}

// --------------------------------------------- //

class Student {
  grades: any = {};
  private attendance: boolean[] = [];
  public firstName: string;
  public lastName: string;
  public birthYear: number;

  constructor(firstName: string, lastName: string, birthYear: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    console.log(`Student: ${this.fullName}. Birth year is ${this.birthYear}`);
  }

  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value: string) {
    [this.lastName, this.firstName] = value.split(" ");
    console.log(`Full name is ${this.fullName}`);
  }

  get age(): number {
    const calculateAge = new Date().getFullYear() - this.birthYear;
    console.log(`Age of ${this.fullName} is ${calculateAge}`);

    return calculateAge;
  }

  setGrade(subject: string, grade: number): void {
    this.grades[subject] = grade;
    console.log(`Grade for ${this.fullName} in ${subject}: ${grade}`);
  }

  markAttendance(present: boolean): void {
    this.attendance.push(present);
    console.log(
      `Attendance for ${this.fullName} ${present ? "present" : "absent"}`
    );
  }

  getPerformanceRating(): number {
    const gradeValues: number[] = Object.values(this.grades);

    if (gradeValues.length === 0) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) /
      gradeValues.length;

    const attendancePercentage: number =
      (this.attendance.filter((present: boolean) => present).length /
        this.attendance.length) *
      100;

    const performanceRating: number = (averageGrade + attendancePercentage) / 2;
    console.log(
      `Performance rating for ${this.fullName} is ${performanceRating}`
    );

    return performanceRating;
  }
}

const student = new Student("Snow", "John", 1998);
student.setGrade("Programming", 90);
student.markAttendance(true);
console.log(student.getPerformanceRating());
