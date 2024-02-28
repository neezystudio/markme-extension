import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Icons } from '../Icons/Icons';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent  implements OnInit{
  Iconses$!: Observable<Icons[]>;
  selectedId = 0;

  constructor(
    private service: IconsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.Iconses$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getIconses();
      })
    );
  }

}


