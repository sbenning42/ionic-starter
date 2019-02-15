import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirstUsePageModule } from '../pages/first-use/first-use.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { SigninPageModule } from '../pages/signin/signin.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { NavProvider } from '../providers/nav/nav';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FirstUsePageModule,
    WelcomePageModule,
    SigninPageModule,
    SignupPageModule,
    TabsPageModule,
    HomePageModule,
    SettingsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NavProvider.forRoot(routes)
  ]
})
export class AppModule {}
