import { Component, OnInit,Injectable, inject } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-personal-information-form',
  templateUrl: './personal-information-form.component.html',
  styleUrls: ['./personal-information-form.component.scss']
})
export class PersonalInformationFormComponent implements OnInit {
  formData = {
    name: '' ,
    email: '' 
  };

  constructor(private apollo: Apollo) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submitForm() {
    const mutation = gql`
      mutation SubmitFormData($name: String!, $email: String!) {
        submitFormData(name: $name, email: $email) {
          success
          message
        }
      }
    `;

    this.apollo.mutate({
      mutation,
      variables: {
        name: this.formData.name,
        email: this.formData.email as string
      }
    }).subscribe((result: any) => {
      console.log('Form submission result:', result);
      // Handle response here
    }, (error: any) => {
      console.error('Error submitting form:', error);
    });
  }
}


