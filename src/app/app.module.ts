import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TooltipModule } from 'angular2-tooltips';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PopoverModule } from 'ngx-popover';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { AnalysisRecommendationComponent } from './analysis-recommendation/analysis-recommendation.component';
import { PlatformReviewChecklistComponent } from './executive-summary/platform-review-checklist/platform-review-checklist.component';
import { PlatformHealthComponent } from './executive-summary/platform-health/platform-health.component';
import { MonitoringComponent } from './introduction/monitoring/monitoring.component';
import { AnalysisConstraintsComponent } from './introduction/analysis-constraints/analysis-constraints.component';
import { TopologyDataTrafficComponent } from './analysis-recommendation/topology-data-traffic/topology-data-traffic.component';
import { ServerPerfComponent } from './analysis-recommendation/server-perf/server-perf.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroductionService } from './introduction/introduction.service';
import { ExecSummaryService } from './executive-summary/executive-summary.service';
import { AnalRecommService } from './analysis-recommendation/analysis-recommendation.service';
import { AuthGuard } from './auth-guard.service';
import { CommonTextService } from './app.service';
import { ReferenceDocComponent } from './reference-doc/reference-doc.component';
import { ServerCpuLoadComponent } from './reference-doc/server-cpu-load/server-cpu-load.component';
import { HwInfoComponent } from './reference-doc/hw-info/hw-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IntroductionComponent,
    ExecutiveSummaryComponent,
    AnalysisRecommendationComponent,
    PlatformReviewChecklistComponent,
    PlatformHealthComponent,
    MonitoringComponent,
    AnalysisConstraintsComponent,
    TopologyDataTrafficComponent,
    ServerPerfComponent,
    ReferenceDocComponent,
    ServerCpuLoadComponent,
    HwInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PopoverModule
  ],
  providers: [CommonTextService, IntroductionService, AuthGuard, ExecSummaryService, AnalRecommService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
