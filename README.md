## Application Pattern

### Files and Folder Structure
> * Top level Folders
> 4. interface
> 6. service
> 7. enums
> 13. shared (Modules / Components)
> 14. feature 
> 15. styles (injected in root style file)


### Services
#### HTTP Service 
> 1. Responsible for HTTP Request and providing instance of HttpClient
> 2. Methods provided take the args (param: Partial/<HttpServiceParam/>)
> * * gets
#### BASE Service
> 3. BaseServiceInjector Class

### Base Classes


> * Services Locally Created
> * * _http: HTTPService;
> * Common Properties Shared Between (List)
> 1. Enums
> * * URLz = URLz;
> 2. Properties
> * * param: HttpServiceParam = {};
