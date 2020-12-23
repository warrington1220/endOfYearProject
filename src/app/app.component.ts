import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'endOfYearProject';

  myForm: FormGroup;
  baseWriteURL = "https://braxos-tools.azurewebsites.net/api/NewLight?code=QaTrEl6lGe6/sRc/yuzM/QngkZ/XvOp2ni0ecvLKMtf7CKRhph8IMQ=="

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      red: '',
      green: '',
      blue: '',
      x: '',
      y: ''
    })
    //this.myForm.valueChanges.subscribe(console.log)
  }

  pushLight() {
    var returnData = this.myForm.value
    console.log(this.myForm.value)
    this.http
      .post<any>(this.baseWriteURL, { schedule: returnData})
      .subscribe((response) => {
        console.log(response);
      });
  }
}
