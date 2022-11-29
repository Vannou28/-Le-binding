import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
   
    pDisplayAge = '';

    user = {
        name : 'Doe',
        firstName : 'John',
        age : 25,
        quote : '',
        photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
        description : "superbe portrait d'un Lego"
    }
    

    ageShow() :void {
        if (this.pDisplayAge === 'block') { 
            this.pDisplayAge = 'none'; 
          } else {
            this.pDisplayAge = 'block'
          }
    }

}
