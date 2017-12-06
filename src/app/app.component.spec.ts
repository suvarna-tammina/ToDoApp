import { ComponentFixture,TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: AppComponent }
        ])
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });
  it('should create component', () => expect(comp).toBeDefined() );
   it(`should have as title "My Sample Application"`,  ()=> {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(comp.title).toEqual('My Sample Application');
  });
  it('should display the header text "My Sample Application"', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.textContent).toContain('My Sample Application');
  });
  
 
  
 
 
});
