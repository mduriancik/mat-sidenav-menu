import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-page1',
  template: '<b>Test Page 1</b>'
})
export class TestPage1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-test-page2',
  template: '<b>Test Page 2</b>'
})
export class TestPage2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-test-page3',
  template: '<b>Test Page 3</b>'
})
export class TestPage3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

@Component({
  selector: 'app-test-page',
  template: '<b>Test Page {{ id }}</b>'
})
export class TestPageComponent implements OnInit {

  id: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params) => {
        this.id = params.get('id');
      }
    );
  }
}
