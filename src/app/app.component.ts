import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'a11y-p1';
  public yesNoAnswer: string = 'no';
  public form: FormGroup = null;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      yesNoAnswer: [null]
    })
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
