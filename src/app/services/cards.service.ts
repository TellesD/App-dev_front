import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,  tap } from 'rxjs/operators';
import { CardModule } from '../module/card.module';
import { TagModule } from '../module/style.module';
import { ArchModule } from '../module/arch.module';
import { MaterialModule } from '../module/material.module';
import { UserModule } from '../module/user.module';
import { Platform } from '@ionic/angular';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

var TOKEN_KEY;
 
@Injectable({
  providedIn: 'root'
})


export class Cardservice {

  authenticationState = new BehaviorSubject(false);
  
  constructor(
    private http: HttpClient, private storage: Storage, private plt: Platform,
  ) {
   
  }

 //cards
getCards (): Observable<CardModule[]> {
  return this.http.get<CardModule[]>('http://192.168.0.114:3000/cards/showCard',)
    .pipe(

    );
}

addCard (card: CardModule): Observable<CardModule> {
  return this.http.post<CardModule>('http://192.168.0.114:3000/cards/createCard', card, httpOptions).pipe(
  );
}
getFavCards (): Observable<CardModule[]> {
  return this.http.get<CardModule[]>('http://192.168.0.114:3000/cards/showFavCard',)
    .pipe(

    );
}

//style
getTags (): Observable<TagModule[]> {
  return this.http.get<TagModule[]>('http://192.168.0.114:3000/cards/showTags')
    .pipe(

    );
}
addSTag (tag: TagModule): Observable<TagModule> {
  return this.http.post<TagModule>('http://192.168.0.114:3000/cards/createTag', tag, httpOptions).pipe(
  );
}
//arch
getArch (): Observable<ArchModule[]> {
  return this.http.get<ArchModule[]>('http://192.168.0.114:3000/cards/showArch')
    .pipe(
   
    );
}
addArch (arch: ArchModule): Observable<ArchModule> {
  return this.http.post<ArchModule>('http://192.168.0.114:3000/cards/createArch', arch, httpOptions).pipe(
  );
}
//material
getMaterials (): Observable<MaterialModule[]> {
  return this.http.get<MaterialModule[]>('http://192.168.0.114:3000/cards/showMaterials')
    .pipe(

    );
}
addMaterial (tag: MaterialModule): Observable<MaterialModule> {
  return this.http.post<MaterialModule>('http://192.168.0.114:3000/cards/createMaterial', tag, httpOptions).pipe(
  );
}
//likes
putLikes (id:string): Observable<string> {

  return this.http.put<string>(`http://192.168.0.114:3000/cards/likecard/${id}`, httpOptions);
   
}
//user
addUser (user: UserModule): Observable<UserModule> {
  return this.http.post<UserModule>('http://192.168.0.114:3000/users/create', user, httpOptions).pipe(
  );


}

login (user: UserModule): Observable<UserModule> {
 const token =  this.http.post<UserModule>('http://192.168.0.114:3000/users/auth', user, httpOptions);
 return this.storage.set(TOKEN_KEY, token).then(() => {
  this.authenticationState.next(true);
});
  
  }
  
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
    
    
  }
  
  isAuthenticated() {
    return this.authenticationState.value;
  }
//day 
getDay (): Observable<CardModule[]> {
  return this.http.get<CardModule[]>('http://192.168.0.114:3000/cards/showCard',)
    .pipe(

    );
}
 






























  // getHero(id: number): Observable<Hero> {
  //   // TODO: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  /** GET hero by id. Will 404 if id not found */
  /*getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

    /** PUT: update the hero on the server */
  /*updateHero (hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  

  /** DELETE: delete the hero from the server */
  /*deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  /*searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
/*private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
} */}
