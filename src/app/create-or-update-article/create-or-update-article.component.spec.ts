import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateArticleComponent } from './create-or-update-article.component';

describe('CreateOrUpdateArticleComponent', () => {
  let component: CreateOrUpdateArticleComponent;
  let fixture: ComponentFixture<CreateOrUpdateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
