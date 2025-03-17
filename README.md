# Product App

This is the Angular Developer Technical Assessment Application that displays a list of products, allows users to view detailed information about each product, and includes basic navigation between pages.

Below is brief documentation on how to run the application locally.

There is also a rubric for the Assessment guidelines at the bottom to easily navigate where each guideline is addressed in the code.

There is also brief documentation in the comments within the code.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Install Prerequisites

Ensure you have the following installed on your machine:

- git

- node.js

- Angular CLI
  
you can install Angular CLI globally using npm:

```
npm install -g @angular/cli
```


## Clone the Repository

Open a terminal or command prompt.

Navigate to the directory where you want to clone the repository.

Run the following command to clone the repository:

```
git clone https://github.com/sean-waev/caseware-product-app.git
```

## Navigate to the Project Directory

```
cd caseware-product-app
```

## Install Dependencies

Install the required dependencies using npm:

```
npm install
```

## Run Development Server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/` and there you should see the angular web application.

## Assignment Rubric

Here is the brief rubric for the Assessment guidelines.

1. Project Setup (10 points)

    - Create a new Angular project using Angular CLI (ng new product-app).

    - Set up a clean folder structure following best practices.

    - Initialize a Git repository and make an initial commit.

2. Component & Data Binding (30 points)

    - Create a ProductCardComponent that displays product details (name, price, description):
    ```
    This component is complete in the folder `src/app/product-card`.
    ```
    - Accept a product object via @Input():
    ```
    Product data input is set via @Input() in 'product-list-single-pill.component.ts'
    
     on lines 11 & 12 and accepted in 'product-list.component.html' on lines 5 & 6.
    ```

    - Add a button that emits an event (@Output()) when clicked:
    ```
    The buttonClick function that emits an event (@Output()) is in 
    
    'product-card-component.ts' on line 29 and the output is the 
    
    string 'message' on line 33.
    ```

3. Service & Data Handling (30 points)

    - Create a ProductService that provides product data (hardcoded or from a mock JSON file):
    ```
    This service is complete in the file `src/app/services/product.service.ts`.
    ```

    - Fetch and display products in a ProductListComponent:
    ```
    This component is complete in the folder `src/app/product-list`.
    ```

    - Use Observable (RxJS) in ProductService for asynchronous data fetching:

    ```
    Observable (RxJS) is used in the ProductService for 
    
    asynchronous data fetching in 'product. service.ts' on line 21.
    ```

4. Routing & Navigation (30 points)

    Set up Angular routing with the following paths:

    - /products → Displays ProductListComponent.

    - /products/:id → Displays ProductDetailComponent.
    
    ```
    These routes can be found in `src/app/app.routes.ts` on lines 7 & 8.
    ```

    - Clicking a product in ProductListComponent should navigate to /products/:id and display its details:

    ```
    This is complete via navigation in 'product-list.component.html' 
    
    on line 4, the ngOnInit() in 'product-card-component.ts' on 
    
    line 21, and getProductById() in 'product.service.ts' on line 25.
    ```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
