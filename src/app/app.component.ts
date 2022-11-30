import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Bonjour';
    isAdmin:boolean = true;

    changeAdmin(): void {
        if (this.isAdmin==false){
            this.isAdmin = true;
        }else {
            this.isAdmin = false;
        }
    }

    //03.2 - Les Customs Directives
    isShowMovies:boolean=true;
    
    showMovies(): void {
        this.isShowMovies = !this.isShowMovies;
    }
}
