import { MatButtonModule } from '@angular/material/button';
import { PokeApiService } from './services/pokeapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { TypePipe } from './pypes/type.pipe';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    TypePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    ChartsModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
