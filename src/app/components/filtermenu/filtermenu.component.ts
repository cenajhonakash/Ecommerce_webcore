import { Component, OnInit } from '@angular/core';
import { SharedDatService } from 'src/app/services/sharedDataService';
@Component({
  selector: 'app-filtermenu',
  templateUrl: './filtermenu.component.html',
  styleUrls: ['./filtermenu.component.css']
})
export class FiltermenuComponent implements OnInit {
  isExpanded: any = false;
  categories: string[] = ["All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware",
    "All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware",
    "All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware",
    "All", "Electronics", "Mobile & Tabs", "Fashion", "Beauty", "Home & Kitchen", "Kids & Baby", "Study Items", "Hardware"];
  slicedCategory: string[] = [];
  defaultLinkTitle = "view more";
  expand: any = true

  constructor(private _sharedDatService: SharedDatService) { }

  ngOnInit(): void {
    this.slicedCategory = this.categories.slice(0, 9)
  }
  onClick() {
    console.log(this.expand)
    if (this.expand) {
      this.defaultLinkTitle = "view less"
      this.slicedCategory = this.categories
      this.expand = false
    } else {
      this.defaultLinkTitle = "view more"
      this.slicedCategory = this.categories.slice(0, 9)
      this.expand = true
    }
    console.log(this.slicedCategory)
  }

  onMenuClick(category: any) {
    console.log('menu cliecked' + category)
    this._sharedDatService.sendMessage(category);
  }
}
