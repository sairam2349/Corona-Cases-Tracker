import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare let Email: any;

@Component({
  selector: 'app-selfassessment',
  templateUrl: './selfassessment.component.html',
  styleUrls: ['./selfassessment.component.css']
})
export class SelfassessmentComponent implements OnInit {

  assessmentForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.assessmentForm = this.formBuilder.group({
      q1: ['', Validators.required],
      q2: ['', Validators.required],
      q3: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      });
  }

  sendEmail(){
    console.log(this.assessmentForm);
    let {q1,q2,q3,email} = this.assessmentForm.value;
    let emailString = "";
    let covidString = "It doesn't mean you are having covid. Dont worry You dont need a test";
    if(q2 == "yes" || q3 == "yes"){
      covidString = "It is mandatory for you to take test";
    }
    emailString = `Hi\n\nThanks for taking the assessment from our website.\n
      1. Are you currently experiencing any of these symptoms? Choose any/all that apply \n
      Chosen Option: ${q1}\n
      2. In the last 14 days, have you been in close physical contact with someone who 
      tested positive for COVID-19?\n
      Chosen Option: ${q2}\n
      3. Have you travelled outside of Canada in the last 14 days?\n
      Chosen Option: ${q3}\n \nAssessment Result: ${covidString}`;
    console.log(emailString);
    // this.http.post('https://formspree.io/xjvaljwo', {
    //   name: 'User',
    //   replyto: email,
    //   message: emailString,
    // }, {'headers': {'Content-Type': 'application/json'}}).subscribe(response => {
    //   console.log(response);
    // })
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'coronacasestracker@gmail.com',
      Password : '4E6EF1FF7C48A3DD4D23A43E4BAB6BE83DCA',
      To : email,
      From : 'coronacasestracker@gmail.com',
      Subject : 'Assessment Results',
      Body : emailString
      }).then( message => {alert(message); } );
  }

}
