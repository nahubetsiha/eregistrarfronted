import {Component, OnInit} from '@angular/core';
import {Student} from '../../model/Student';
import {StudentService} from '../../services/student.service';

@Component({
    selector: 'app-list-student',
    templateUrl: './list-student.component.html',
    styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

    // private student: Student;
  allStudents: Student[];
  studentLength: number;

    constructor(private studentService: StudentService) {
    }

    ngOnInit() {
        this.listAllStudents();
    }

    listAllStudents() {
        this.studentService.getStudentList().subscribe(
            res => {
                this.allStudents = res;
                this.studentLength = res.length;
            }
        );
    }

}
