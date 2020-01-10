import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProgramComponent } from './pages/program/program.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { PressRoomComponent } from './pages/press-room/press-room.component';
import { NewsComponent } from './pages/news/news.component';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'program', component: ProgramComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'partners', component: PartnersComponent},
  {path: 'archive', component: ArchiveComponent},
  {path: 'press-room', component: PressRoomComponent},
  {path: 'empty', component: EmptyComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
