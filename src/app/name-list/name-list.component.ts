import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Icons } from '../Hero/icon';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.scss']
})
export class NameListComponent  implements OnInit{
  Icons$!: Observable<Icons[]>;
  selectedId = 0;

  constructor(
    private service: Icons,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.Icons$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getIcons();
      })
    );
  }

}


