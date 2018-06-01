import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClientService } from './http-client.service';
import { Observable } from 'rxjs/Observable';
import { LookupData, CategoryData, SubCategoryData, Data, Employees, EmployeeData} from '../services/service-models/lookup';

@Injectable()
export class LookupService {
  constructor(private http: HttpClientService) { }

  public getData(): Observable<LookupData> {
    return this.http.get(`${environment.apiEndpoint}/lookup/data`);
  }
  public getEmployeeData(): Observable<Employees> {
    return this.http.get(`${environment.apiEndpoint}/lookup/employee`);
  }
  
}
