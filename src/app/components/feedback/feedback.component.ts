import { Component, OnInit } from '@angular/core';
import { Feedback } from '../../data/model/Feedback';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { emailDomainValidator } from '../../validators/email.validator';
import { badWordsValidator } from '../../validators/badwords.validator';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent implements OnInit {
  //feedback: Feedback = new Feedback('','',2,'','');
  feedbackForm!: FormGroup;
  
  constructor() {
  }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl('',[Validators.required, Validators.email, emailDomainValidator('@gmail.com')]),
      phoneNumber: new FormControl('',[Validators.pattern('[0-9]{10}')]),
      rate: new FormControl(8,[Validators.min(0),Validators.max(10)]),
      feedbackTitle:new FormControl('',[Validators.required]),
      feedback:new FormControl('',[Validators.required, badWordsValidator(['spam','bitch','fuck'])])
    });
  }

  submitFeedback(){
    //console.log("Feedback form [submit]: ",this.feedback)
    console.log("Feedback form [submit]: ",this.feedbackForm.value)  
  }


  
}
