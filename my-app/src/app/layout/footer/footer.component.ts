import {Component, Input, OnInit} from '@angular/core';
import {Footer} from "./footer"
import { FooterService } from './footer.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private footerService: FooterService) { }
   Footer: Footer[];
  getUrl(): void {
    this.footerService.getUrl()
      .subscribe(res => this.Footer = res);
  }
  ngOnInit() {
    this.getUrl();
    //console.log(this.Footer);
  }
}
