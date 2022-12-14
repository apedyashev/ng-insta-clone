import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Post {
  id: string
  name: string
  image_url: string
}

export interface PicsumImage {
  id: string
  author: string
  download_url: string
  width: number
  height: number
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private cardBoxSize = 304;
  // API is here: https://picsum.photos/
  private postsUrl = 'https://picsum.photos';
  // private postsUrl = 'https://api.punkapi.com/v2/beers';
  private postsCache!: Observable<Post[]>;

  constructor(private http: HttpClient) { }

  getPosts(id?: string): Observable<Post[]> {

    this.postsCache = this.http.get<PicsumImage[]>(id ? `${this.postsUrl}/id/${id}/${this.cardBoxSize}` : `${this.postsUrl}/v2/list?page=2&limit=100`)
      .pipe(
        map((response: PicsumImage[]) => {
          return response.map(({id, author: name, download_url, width, height}) => {

            const imageUrl = download_url.replace(`${width}/${height}`, `${this.cardBoxSize}`)
           return {id,  name, image_url: imageUrl}
          })
        }),
        tap(_ => this.log('fetched heimagesroes')),
        catchError(this.handleError<Post[]>('getHeroes', []))
      );

    return this.postsCache
  }

  getPostById(id: string): Observable<Post | undefined> {
    let p = this.postsCache?.pipe(
      map(txs => txs.find(txn => String(txn.id) === id))
    )
    if (!p) {
      this.getPosts(id);
      p = this.postsCache?.pipe(
        map(txs => txs.find(txn => String(txn.id) === id))
      )
    }
    return p
    // .map(movies => movies.find(movie => movie.id == id));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PostService message with the MessageService */
  private log(message: string) {
    console.log(message)
    // this.messageService.add(`HeroService: ${message}`);
  }
}
