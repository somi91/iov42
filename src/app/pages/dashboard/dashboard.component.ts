import { Component } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';
import { CoreService } from 'src/app/shared/services/core.service';
import { Cinema } from 'src/app/shared/interfaces/cinema';
import { PageData } from 'src/app/shared/interfaces/page-data';
import { DEFAULT_DIALOG_CONFIG, Dialog, DialogModule } from '@angular/cdk/dialog';
import { CreateEditCinemaComponent } from './create-edit-cinema/create-edit-cinema.component';
import { lastValueFrom } from 'rxjs';
import { CreateCinemaScreenDD, CreateEditCinemaScreenComponent } from './create-edit-cinema-screen/create-edit-cinema-screen.component';
import { IScreen } from 'src/app/shared/interfaces/screen';
import { Movie } from 'src/app/shared/interfaces/movie';
import { CreateEditMovieComponent } from './create-edit-movie/create-edit-movie.component';
import { SelectedScreen } from 'src/app/shared/interfaces/selected-screen';
import { CreateEditScreeningComponent, CreateScreeningDD } from './create-edit-screening/create-edit-screening.component';
import { Screening } from 'src/app/shared/interfaces/screening';
import { Booking } from 'src/app/shared/interfaces/booking';
import { CreateEditBookingComponent } from './create-edit-booking/create-edit-booking.component';

@Component({
  selector: 'app-cinemas',
  standalone: true,
  imports: [DialogModule, NgFor, DatePipe],
  providers: [
    {provide: DEFAULT_DIALOG_CONFIG, useValue: {hasBackdrop: true, width: "60hw"}}
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export default class DashboardComponent {

  public pageData?: PageData<Cinema>;
  public moviePageData?: PageData<Movie>;

  public selectedCinemaScreen?: SelectedScreen;
  public selectedMovie?: Movie;
  public screeningData?: PageData<Screening>;
  public selectedScreening?: Screening;
  public bookingData?: PageData<Booking>;
  
  constructor(private coreSrv: CoreService, private dialog: Dialog) {}

  ngOnInit() {
    this.loadCinemas();
    this.loadMovies();

    this.loadScreenings();
    this.loadBookings();
  }
  public selectScreen(cinema: Cinema, screen: IScreen) {
    this.selectedCinemaScreen = {
      cinemaId: cinema.id,
      screenId: screen.id,
    }
    this.loadScreenings();
  }
  public selectMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.loadScreenings();
  }

  public async createNew() {
    const dialogRes = await lastValueFrom(this.dialog.open(CreateEditCinemaComponent).closed);
    this.loadCinemas();    
  }

  public async loadScreens(cinemaId: number) {
    const screensData = await this.coreSrv.getAllCinemaScreens(cinemaId);
    this.updateCinemaScreens(cinemaId, screensData.content);
  }

  public async addScreen(cinema: Cinema) {
    const dialogRes = await lastValueFrom(this.dialog.open(CreateEditCinemaScreenComponent, {
      data: {
        cinemaId: cinema.id,
        name: cinema.name
      } as CreateCinemaScreenDD
    }).closed);
    this.loadScreens(cinema.id);
  }

  public async createNewMovie() {
    const dialogRes = await lastValueFrom(this.dialog.open(CreateEditMovieComponent).closed);
    this.loadMovies();
  }
  public async loadMovies() {
    this.moviePageData = await this.coreSrv.getAllMovies();
  }

  public async loadScreenings() {
    if(this.selectedCinemaScreen?.cinemaId) {
      this.screeningData = await this.coreSrv.getAllScreenings(this.selectedCinemaScreen?.cinemaId);
    }
  }

  public async createNewScreening() {
    if(!this.selectedCinemaScreen || !this.selectedMovie) {
      return;
    }
    const dialogRes = await lastValueFrom(this.dialog.open(CreateEditScreeningComponent, {
      data: {
        ...this.selectedCinemaScreen,
        movieId: this.selectedMovie.id
      } as CreateScreeningDD
    }).closed);
    this.loadScreenings();
  }

  public async createNewBooking() {
    const dialogRes = await lastValueFrom(this.dialog.open(CreateEditBookingComponent, {
      data: {
        screeningId: this.selectedScreening?.id
      }
    }).closed);
    this.loadBookings();
  }

  public selectScreening(screening: Screening) {
    this.selectedScreening = screening;
  }
  public async loadBookings() {
    this.bookingData = await this.coreSrv.getAllBookings();
  }

  private updateCinemaScreens(cinemaId: number, screens: IScreen[]) {
    if(this.pageData) {
      const index: number = this.pageData.content.findIndex((val: Cinema) => val.id === cinemaId);
      if(index > 0) {
        const cinema: Cinema = {...this.pageData.content.at(index)} as Cinema;
        cinema.screens = screens;
        this.pageData.content.splice(index, 1, cinema);
      }
    }
  }

  private async loadCinemas() {
    this.pageData = await this.coreSrv.getAllCinemas();
  }

}
