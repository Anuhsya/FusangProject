import { MatButtonModule, MatCheckboxModule, MatInputModule,
   MatExpansionModule, MatCardModule, MatTooltipModule, MatTabsModule, MatSelectModule, MatDialogModule, 
   MatDividerModule, MatMenuModule, MatToolbarModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule, MatExpansionModule, MatCardModule,
    MatTooltipModule, MatTabsModule, MatRadioModule, MatSelectModule, MatDialogModule, MatDividerModule, MatMenuModule, MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatAutocompleteModule,
     MatExpansionModule, MatCardModule, MatTooltipModule, MatTabsModule, MatRadioModule, MatSelectModule, MatDialogModule,
      MatDividerModule, MatMenuModule,  MatToolbarModule]
})
export class MaterialModule {
}
