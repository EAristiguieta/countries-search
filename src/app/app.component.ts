import { Component, HostListener  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./shared/components/side-bar/side-bar.component";
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideBarComponent, NgIf ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuScrolled = false

  scrollToTop(){
    document.body.scrollIntoView({behavior:"smooth"})
  }

  @HostListener("window:scroll", ["$event"])
  scrollCheck(){
    if(window.scrollY> 500){
      this.isMenuScrolled = true
    }else{
      this.isMenuScrolled = false
    }
  }

}
