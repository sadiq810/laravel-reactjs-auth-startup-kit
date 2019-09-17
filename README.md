## Laravel & Reactjs Auth Startup kit

<p align="center">
<a href="https://laravel.com" target="_blank">
    <img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400">
</a>
<a href="https://reactjs.org" target="_blank">
    <img src="https://icon-library.net//images/react-icon/react-icon-29.jpg" width="150">
</a>
</p>

## About Laravel & React Auth Kit

If you want to develop Laravel Application and Frontend powered by ReactJS, 
then you will have to spend hours to create authentication logic, registration and protecting routes logics 
as Frontend Framework React communicate to your backend laravel through APIs and you will have to use Laravel
Passport for API authentication and Also you will need to protect the private routes of the react application.
<br/>
<br/>
In this kit, All the above things are already done for you like User Registration, Login, 
API authentication using passport and frontend react's routes protection. The following version of Laravel and React is used.


- [Laravel 6.0](https://laravel.com/docs).
- [React ^16.2.0](https://reactjs.org/).
- [React Router ^5.0](https://reacttraining.com/react-router/).

## Installation and Setup


- Clone the Repository or direct download it.
- Setup database connection and setup virtual host for laravel. 
- Run the following commands from the root of the project. <br/>
`composer install` <br/>
[Setup the Passport for API authentication and run the following commands](https://laravel.com/docs/6.x/passport).<br/>
`composer require laravel/passport` then <br/>
`php artisan migrate` then <br/>
`php artisan passport:install` then add the following line to the user model .<br/>
`use HasApiTokens;` and follow the passport documentation for more details.
- Now we are done with backend setup and lets move onward for the frontend and run the following commands. <br/>
`npm install` then run the following command to make the build as <br/>
`npm run dev` OR `npm run watch`



Thats all, now you can visit your link.

## Adding New Pages

To add new protected route then
- Add Navigation link to `js/components/partials/Navigation` component.
- Then create and add your page component in `js/components/pages` directory.
- Then make an entry to `js/components/Master` component, inside 

     `<Switch> .... </Switch>` block.
     
     To make a protect component route, then make entry like below
     
     `<PrivateRoute  exact path={'/URL_SEGMENT_FOR_YOUR_ROUTE'} component={NAME_OF_COMPONENT} />`
     
     To make a public component route, then make entry like below
     
     `<Route  exact path={'/URL_SEGMENT_FOR_YOUR_ROUTE'} component={NAME_OF_COMPONENT} />`

## Comment / Objection / Suggestion

If you have any comment, Objection or Suggestion, Then you are most welcome and let me know. Thanks
