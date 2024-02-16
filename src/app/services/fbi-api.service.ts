import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FbiApiService {
  private apiUrlList = 'https://api.fbi.gov/wanted/v1/list'
  private apiUrlSingle = 'https://api.fbi.gov/@wanted-person/'

  constructor(private http: HttpClient) { }

  getFugitives(): Observable<any> {
    return this.http.get<any>(this.apiUrlList)
  }

  getFugitivesByFilter(page: number, sex: string, ageMin: number, ageMax: number, hair: string, eyes: string): Observable<any> {
    const params = { page, sex, age_min: ageMin, age_max: ageMax, hair, eyes };
    return this.http.get(this.apiUrlList, { params }).pipe(
      tap((data: any) => {
        console.log('Total:', data.total);
        console.log('Page:', data.page);
        console.log('Fugitives data:', data.items);
      })
    );
  }

  getFugitiveById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrlSingle}${id}`)
  }

}
