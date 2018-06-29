import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ReferenceDocComponent } from './reference-doc/reference-doc.component';
import { ExecutiveSummaryComponent } from './executive-summary/executive-summary.component';
import { AnalysisRecommendationComponent } from './analysis-recommendation/analysis-recommendation.component';
import { PlatformReviewChecklistComponent } from './executive-summary/platform-review-checklist/platform-review-checklist.component';
import { PlatformHealthComponent } from './executive-summary/platform-health/platform-health.component';
import { MonitoringComponent } from './introduction/monitoring/monitoring.component';
import { AnalysisConstraintsComponent } from './introduction/analysis-constraints/analysis-constraints.component';
import { TopologyDataTrafficComponent } from './analysis-recommendation/topology-data-traffic/topology-data-traffic.component';
import { ServerPerfComponent } from './analysis-recommendation/server-perf/server-perf.component';
import { HwInfoComponent } from './reference-doc/hw-info/hw-info.component';
import { ServerCpuLoadComponent } from './reference-doc/server-cpu-load/server-cpu-load.component';
import { AuthGuard } from './auth-guard.service';

const appRoutes: Routes = [
  { path: '', 
    //canActivateChild: [AuthGuard], 
    component: IntroductionComponent, children: [
    { path: 'IntroductionComponent/Monitoring', component: MonitoringComponent },
    { path: 'IntroductionComponent/Analysis and Constraints', component: AnalysisConstraintsComponent }
  ] },
  { path: 'execSummary', component: ExecutiveSummaryComponent, children: [
    { path: 'Platform Health', component: PlatformHealthComponent },
    { path: 'Platform Review Checklist', component: PlatformReviewChecklistComponent }
  ] },
 // { path: 'keyAction', component: PlatformHealthComponent },
  {
    path: 'analysisRecommendation', component: AnalysisRecommendationComponent, children: [
    { path: 'Topology Considerations', component: TopologyDataTrafficComponent },
    { path: 'Server Performance', component: ServerPerfComponent }        
  ] },
    {
    path: 'referenceDoc', component: ReferenceDocComponent, children: [
    { path: 'Server List', component: HwInfoComponent },
    { path: 'Server CPU Load', component: ServerCpuLoadComponent }        
  ] },
    //  { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
  //  { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
  // { path: 'not-found', component: PageNotFoundComponent },
 // { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
//  { path: '**', redirectTo: '/not-found' }
{ path: '**', component: IntroductionComponent }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}