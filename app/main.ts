// import { platformNativeScriptDynamic } from "nativescript-angular/platform";

// import { AppModule } from "./app.module";

// platformNativeScriptDynamic().bootstrapModule(AppModule);



import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './app.module';
import { ThemeConfig } from '@yape/ns-theme';

ThemeConfig.setRoot('ns-yape');

platformNativeScriptDynamic().bootstrapModule(AppModule);