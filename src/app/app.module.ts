import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ConceptComponent } from './concept/concept.component';
import { EcoComponent } from './eco/eco.component';
import { DoublechainsComponent } from './doublechains/doublechains.component';
import { InfraComponent } from './infra/infra.component';
import { FeaturesComponent } from './features/features.component';
import { AppsComponent } from './apps/apps.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import {MatButtonModule, MatGridListModule, MatIconModule, MatSlideToggleModule} from '@angular/material';
import { InfraTitleComponent } from './infra-title/infra-title.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ConceptComponent,
    EcoComponent,
    DoublechainsComponent,
    InfraComponent,
    FeaturesComponent,
    AppsComponent,
    ServicesComponent,
    TeamComponent,
    RoadmapComponent,
    InfraTitleComponent,
    FooterComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
