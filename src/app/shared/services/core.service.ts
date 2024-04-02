import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, lastValueFrom, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cinema } from "../interfaces/cinema";
import { PageData } from "../interfaces/page-data";
import { IScreen } from "../interfaces/screen";
import { Movie } from "../interfaces/movie";
import { Screening, ScreeningRequestData } from "../interfaces/screening";
import { Booking, BookingRequestData } from "../interfaces/booking";

@Injectable({providedIn: "root"})
export class CoreService {
  private apiUrl = environment.appUrl;
  
  constructor(private http: HttpClient) {
  }
  
  public getAllCinemas(): Promise<PageData<Cinema>> {
    return lastValueFrom(this.http.get<PageData<Cinema>>(`${this.apiUrl}/cinemas`));
  }

  public createCinema(cinema: Cinema): Promise<Cinema> {
    return lastValueFrom(this.http.put<Cinema>(`${this.apiUrl}/cinemas`, cinema));
  }

  public getAllCinemaScreens(cinemaId: number): Promise<PageData<IScreen>> {
    return lastValueFrom(this.http.get<PageData<IScreen>>(`${this.apiUrl}/cinemas/${cinemaId}/screens`));
  }
  public createCinemaScreen(cinemaId: number, screen: IScreen): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${this.apiUrl}/cinemas/${cinemaId}/screens`, screen));
  }

  public getAllMovies(): Promise<PageData<Movie>> {
    return lastValueFrom(this.http.get<PageData<Movie>>(`${this.apiUrl}/movies`));
  }
  
  public createMovie(movie: Movie): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${this.apiUrl}/movies`, movie));
  }

  public getAllScreenings(cinemaId: number): Promise<PageData<Screening>> {
    return lastValueFrom(this.http.get<PageData<Screening>>(`${this.apiUrl}/cinemas/${cinemaId}/screenings`));
  }
  
  public createScreening(screening: ScreeningRequestData): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${this.apiUrl}/cinemas/${screening.cinemaId}/screens/${screening.screenId}/screenings`, screening));
  }

  public getAllBookings(): Promise<PageData<Booking>> {
    return lastValueFrom(this.http.get<PageData<Booking>>(`${this.apiUrl}/bookings`));
  }
  
  public createBooking(data: BookingRequestData): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${this.apiUrl}/bookings`, data));
  }
}