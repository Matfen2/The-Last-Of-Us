import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardDirective } from '../card.directive';
import { MainComponent } from './main/main.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TlouComponent } from './tlou/tlou.component';
import { CharactersComponent } from './characters/characters.component';
import { FactionsComponent } from './factions/factions.component';
import { InfectesComponent } from './infectes/infectes.component';
import { SerieTvComponent } from './serie-tv/serie-tv.component';
import { AmericanDreamsComponent } from './american-dreams/american-dreams.component';
import { RouterModule, Routes } from '@angular/router';
import { ShowLigthComponent } from './show-ligth/show-ligth.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'tlou/:id', component: TlouComponent },
  { path : 'serieTv', component: SerieTvComponent },
  { path: 'factions', component: FactionsComponent },
  { path: 'infectes', component: InfectesComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'showLigth', component: ShowLigthComponent },
  { path: 'americanDreams', component: AmericanDreamsComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    CardDirective,
    MainComponent,
    SubscribeComponent,
    TlouComponent,
    CharactersComponent,
    FactionsComponent,
    InfectesComponent,
    SerieTvComponent,
    AmericanDreamsComponent,
    ShowLigthComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }
