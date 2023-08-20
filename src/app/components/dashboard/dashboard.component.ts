import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isAdmin: any = false;
  isMale: any = false;
  isExpanded: any = false;
  categories: string[] = ["All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware",
    "All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware",
    "All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware",
    "All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware"];
  slicedCategory: string[] = [];
  defaultLinkTitle = "showMore";
  expand: any = true
  ngOnInit(): void {
    this.slicedCategory = this.categories.slice(0, 9)
  }
  onClick() {
    if (this.expand) {
      this.defaultLinkTitle = "showLess"
      this.slicedCategory = this.categories
      this.expand = false
    } else {
      this.defaultLinkTitle = "showMore"
      this.slicedCategory = this.categories.slice(0, 9)
      this.expand = true
    }
  }
}
