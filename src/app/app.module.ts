import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MueblesComponent } from './Mueble/muebles.component';
import { OficinaComponent } from './Oficina/oficina.component';
import { TiposMaderasComponent } from './Maderas/maderas.component';
import { DormitorioComponent } from './Dormitorio/dormitorio.component';
import { CocinaComponent } from './Cocina/cocina.component';
import { LivingComponent } from './Living/living.component';

@NgModule({
  declarations: [
    AppComponent,
    MueblesComponent,
    OficinaComponent,
    TiposMaderasComponent,
    DormitorioComponent,
    CocinaComponent,
    LivingComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot([
      {
        path: 'Muebles',
        component: MueblesComponent
      },
      {
        path: 'Cocina',
        component: CocinaComponent
      },
      {
        path: 'Dormitorio',
        component: DormitorioComponent
      },
      {
        path: 'Living',
        component: LivingComponent
      },
      {
        path: 'Maderas',
        component: TiposMaderasComponent
      },
      {
        path: 'Oficina',
        component: OficinaComponent
      }
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
