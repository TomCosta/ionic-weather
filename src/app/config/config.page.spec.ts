import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigPage } from './config.page';

describe('ConfigPage', () => {
  let component: ConfigPage;
  let fixture: ComponentFixture<ConfigPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
