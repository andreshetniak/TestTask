import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public users: Users[];
  private totalUsers: number;
  private activeUsers: number;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Users[]>(baseUrl + 'api/Users').subscribe(result => {
      this.users = result;
    }, error => console.error(error));
  }
}

interface Users {
  id: number;
  name: string;
  active: boolean;
}
