import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
// import {Student} from "../model/Student";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentApi: any = 'https://eregistrar-restpi.herokuapp.com/eregistrar/api/student';

    constructor(private httpClient: HttpClient) {
    }

    getStudentList(): Observable<any> {
        return this.httpClient
            .get(this.studentApi + '/list');
    }

    addStudent(body): Observable<any> {
        return this.httpClient
            .post(this.studentApi + '/add', body);
    }

}
