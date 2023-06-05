import { Component, OnInit ,ViewChild , Injector} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { HttpService } from 'src/app/service/http.service';
import { BaseServiceInjector } from 'src/app/service/base-service-injector';
import { URLz } from 'src/app/enums/url.enum';
import { MatTableDataSource } from '@angular/material/table';
import { ServerMultipleResponse } from 'src/app/interfaces/server-multiple-response';



@Component({
  selector: 'agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent extends BaseServiceInjector implements OnInit {

  displayedColumns: string[] = ['Id', 'First Name', 'Last Name', 'Email' , 'avatar'];
  public dataSource = new MatTableDataSource();


  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(injector : Injector){
    super(injector);
  }

  ngOnInit(): void {
    this.initTables();
  }


  initTables(){
    this._http.gets({
      endpoint: URLz.USERS,
      query: {
        page : this.currentPage + 1,
        per_page : this.pageSize,
      }
    }).subscribe({
     next: (res: ServerMultipleResponse) => {
        if(res.data){
          console.log(res);
          this.paginator.pageIndex = this.currentPage;
          this.dataSource.data = res.data;
          this.totalRows = res.total;
        }
      },
      error: (httpErrorResponse: HttpErrorResponse) => {
        console.log("HTTP ERROR =========>> ::::::",httpErrorResponse);
      }
    });
  }


  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.initTables();
  }


}

