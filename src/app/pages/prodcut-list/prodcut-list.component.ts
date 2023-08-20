import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs';
import { SharedDatService } from 'src/app/services/sharedDataService';

@Component({
  selector: 'app-prodcut-list',
  templateUrl: './prodcut-list.component.html',
  styleUrls: ['./prodcut-list.component.css']
})
export class ProdcutListComponent implements OnInit, OnDestroy {
  isAlive = true;
  constructor(private _sharedDatService: SharedDatService) { }

  ngOnInit(): void {
    this._sharedDatService.onMessage()
      .pipe(takeWhile(() => this.isAlive)).subscribe(message => {
        console.log(message)
      });
  }
  
  ngOnDestroy(): void {
    this.isAlive = false
  }
}
