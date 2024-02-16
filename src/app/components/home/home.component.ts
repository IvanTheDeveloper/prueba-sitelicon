import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { FbiApiService } from 'src/app/services/fbi-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fugitiveList!: any[]

  //paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator
  paginatedFugitives!: any[]
  pageSize: number = 4
  pageIndex: number = 0

  //filter
  page: any = 1
  sex!: string
  ageMin!: any
  ageMax!: any
  hair!: string
  eyes!: string

  constructor(private dataSource: FbiApiService) { }

  ngOnInit(): void {
    this.getAllFugitives();
  }

  getAllFugitives() {
    this.page = this.page ?? '';
    this.sex = this.sex ?? '';
    this.ageMin = this.ageMin ?? '';
    this.ageMax = this.ageMax ?? '';
    this.hair = this.hair ?? '';
    this.eyes = this.eyes ?? '';

    this.dataSource.getFugitivesByFilter(this.page, this.sex, this.ageMin, this.ageMax, this.hair, this.eyes).subscribe(data => {
      this.fugitiveList = data.items;
      this.paginateFugitives();
    });
  }

  paginateFugitives(): void {
    const startIndex = this.pageIndex * this.pageSize;
    this.paginatedFugitives = this.fugitiveList.slice(startIndex, startIndex + this.pageSize);
  }

  handlePage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.paginateFugitives();
  }

  applyFilter() {
    this.getAllFugitives() //refresh data
    this.pageIndex = 0
    this.paginator.pageIndex = 0
  }

  resetFields() {
    this.page = 1;
    this.sex = ''; //this is why we use 'any' type isntead of 'number'
    this.ageMin = '';
    this.ageMax = '';
    this.eyes = '';
    this.hair = '';
  }

}
