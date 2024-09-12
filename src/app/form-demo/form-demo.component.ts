import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-demo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-demo.component.html',
  styleUrl: './form-demo.component.css',
})
export class FormDemoComponent {
  text_display_form = new FormControl("You can't edit this");
  text_editable_form = new FormControl('You can edit this');

  form_not_submitted = true;

  complex_form = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    company: new FormControl(''),
  });

  update_text_display_form() {
    this.text_display_form.setValue(this.text_display_form.value + '!');
  }

  submit_complex_form() {
    this.form_not_submitted = false;
  }

  isFormInvalid() {
    return (
      this.complex_form.get('first_name')?.value?.length == 0 ||
      this.complex_form.get('last_name')?.value?.length == 0 ||
      this.complex_form.get('company')?.value?.length == 0
    );
  }
}
