import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  submitForm(formData: any) {
    return this.apollo.mutate({
      mutation: gql`
        mutation SubmitForm($name: String!, $email: String!) {
          submitForm(name: $name, email: $email) {
            success2
          }
        }
      `,
      variables: {
        name: formData.name,
        email: formData.email
      }
    });
  }
}
