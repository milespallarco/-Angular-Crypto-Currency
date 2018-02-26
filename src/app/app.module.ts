// Other imports removed for brevity
import { DataService } from './data.service';         // Add this
import { HttpClientModule } from '@angular/common/http';    // Add this

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule                           // Add this
  ],
  providers: [DataService],                    // Add this
  bootstrap: [AppComponent]
})
export class AppModule { }
