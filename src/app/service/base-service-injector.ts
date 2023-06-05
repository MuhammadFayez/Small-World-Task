import { Component, Injector } from '@angular/core';
import { URLz } from '../enums/url.enum';
import { HttpServiceParam } from '../interfaces/http-service-param';
import { HttpService } from './http.service';

// In Base Class append all the properties / methods with _ (underscore)

// # 1 SOLID PRINCIPLE (Single Responsibility Principle)
// 1. Single responsibility principle: a class should have one, and only one, reason to change;
// 2. When you only want to Inject a Service
@Component({template: ''})
export abstract class BaseServiceInjector{
  _http: HttpService;

  // Enum Global Property for HTML Template
  URLz = URLz; // For Template
  param: HttpServiceParam = {}; // Override this Property for Default Behaviour of HTTP Request

  constructor(public injector: Injector) {
    this._http = injector.get(HttpService);
  }


}
