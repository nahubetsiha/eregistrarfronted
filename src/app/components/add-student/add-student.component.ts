import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StudentService} from '../../services/student.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-student',
    templateUrl: './add-student.component.html',
    styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

    studentForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private studentService: StudentService, private router: Router) {
    }

    ngOnInit() {
        this.studentForm = this.formBuilder.group({
            student: this.formBuilder.group({
                studentNumber: ['', Validators.required],
                firstName: ['', Validators.required],
                middleName: ['', Validators.required],
                lastName: ['', Validators.required],
                cgpa: ['', Validators.required],
                enrollmentDate: ['', Validators.required],
                international: [null, Validators.required]
            })
        });
    }

    addStudent() {
        this.studentService.addStudent(this.studentForm.value.student).subscribe(
            res => {
                this.studentForm.reset();
                this.router.navigate(['/list']);
            }
        );
    }

}
