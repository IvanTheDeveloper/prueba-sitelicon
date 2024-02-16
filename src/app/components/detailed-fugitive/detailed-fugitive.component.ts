import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FbiApiService } from 'src/app/services/fbi-api.service';

@Component({
  selector: 'app-detailed-fugitive',
  templateUrl: './detailed-fugitive.component.html',
  styleUrls: ['./detailed-fugitive.component.scss']
})
export class DetailedFugitiveComponent implements OnInit {
  dataFugitive: any;

  constructor(private route: ActivatedRoute, private dataSource: FbiApiService) { }

  ngOnInit(): void {
    this.getFugitive();
  }

  getFugitive() {
    const fugitiveId = this.route.snapshot.paramMap.get('id') ?? ''
    this.dataSource.getFugitiveById(fugitiveId).subscribe(data => {
      this.dataFugitive = data;
    });
  }

  format(str: string): any {
    return str.replace(/<p>/g, '').replace(/<\/p>/g, '');
  }

}
