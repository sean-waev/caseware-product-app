# ProductApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Assignment Rubric

1. Project Setup (10 points)

Create a new Angular project using Angular CLI (ng new product-app).
Set up a clean folder structure following best practices.
Initialize a Git repository and make an initial commit.
2. Component & Data Binding (30 points)

Create a ProductCardComponent that displays product details (name, price, description).
```
this component is complete in the folder `src/app/product-card`
```
Accept a product object via @Input().
Add a button that emits an event (@Output()) when clicked.
3. Service & Data Handling (30 points)

Create a ProductService that provides product data (hardcoded or from a mock JSON file).
Fetch and display products in a ProductListComponent.
Use Observable (RxJS) in ProductService for asynchronous data fetching.
4. Routing & Navigation (30 points)
Set up Angular routing with the following paths:
/products → Displays ProductListComponent.
/products/:id → Displays ProductDetailComponent.
Clicking a product in ProductListComponent should navigate to /products/:id and display its details.


## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
