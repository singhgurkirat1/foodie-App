var foodieApp = angular.module('foodieApp',['ngRoute']);

foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/home.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('loginController',function($scope,$location) {
$scope.goToHome= function(){

	$location.url('home')
}
})
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {

var diabetic_ingredients = ['sweet','sugar','salt','chocolate','succotash','oil','cheese','chips','mayonnaise','hamburger','bacon'];


	$scope.getIngredients = function(url) {
	// Do something
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	    $http({
	        'method': 'POST',
	        'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
	        'headers': {
	            'Authorization': 'Key d81271c25189477099fbea09a27f81ee',
	            'Content-Type': 'application/json'
	        },
	        'data': data,

	    }).then(function (response) {
								var ingredients = response.data.outputs[0].data.concepts;
								$scope.ingredients = [];
						for (var i =0;i < ingredients.length;i++) {
						$scope.ingredients.push(ingredients[i].name);
						}


    		// $('.ingredients').html(list);
    		// console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        })
	}

	$scope.restaurantId = $routeParams.id;
	var restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
 id:1,
 bestDish: {
	name: 'Burger',
	image: 'https://goo.gl/WGJoqX'
           },
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'McDonald',
	address: 'The North Country Mall,NH21, Sector 117, Mohali, Punjab 140307 ',
	location: 'Chandigarh',
	category: 'Pizza',
	vote: '4.5',
	cuisines: 'Italian',
	cost: '500',
	hours: '12 Noon to 12 AM (Mon-Sun)',
 id :2,
 bestDish: {
	name: 'Corn Pizza',
	image: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/evm/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals.jpg'
           },
	image: 'https://s.aolcdn.com/hss/storage/midas/6ef7d7c8fd961347454e1f5e42206cb3/205055007/mcdonalds-sign.jpg'
},
{
	name: 'Subway',
	address: 'Ground Floor, SCO 495-496, Sector 35C, Sector 35, Chandigarh',
	location: 'Chandigarh',
	category: 'Family and friends Restaurant',
	vote: '3.9',
	cuisines: 'Indian',
	cost: '800',
	hours: '9 AM to 11 PM (Mon-Sun)',
 id:3,
 bestDish: {
	name: 'veg,non-veg',
	image: ''
					 },
	image: 'https://boygeniusreport.files.wordpress.com/2017/03/subway-restaurant-chicken.jpg?quality=98&strip=all&w=782'
},
{
	name: 'Punjab Restaurant',
	address: 'Nalagarh-Baddi Road, Nalagarh, Himachal Pradesh 174101 ',
	location: 'Nalagarh',
	category: 'Breakfast, Lunch, Dinner',
	vote: '4.2',
	cuisines: 'Indian',
	cost: '1500',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
	image: 'https://www.omnihotels.com/-/media/images/hotels/homrst/restaurants/homrst-omni-homestead-resort-jeffersons-restaurant-2.jpg'
},
{
	name: 'Pizza hut',
	address: 'SN 82,Shopping Plaza, Sector 15D, Chandigarh, 160015',
	location: 'Chandigarh',
	category: 'Pizza',
	vote: '4.4',
	cuisines: 'Italian',
	cost: '1200',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,
 bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
          },
	image: 'http://www.10deals.in/uploads/images/thumbnails/f8a5a9fb93d5d99b30fc09d5e441b74c.jpg'
}]
	$scope.restaurant = restaurants[$routeParams.id - 1];

})
//controller bnaya h....
foodieApp.controller('mainController',function($scope) {
	//what it will do.....
	$scope.restaurants = [{
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
 id:1,
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
{
	name: 'McDonald',
	address: 'The North Country Mall, NH21, Sector 117, Mohali, Punjab 140307',
	location: 'Chandigarh',
	category: 'Pizza',
	vote: '4.5',
	cuisines: 'Italian',
	cost: '500',
	hours: '12 Noon to 12 AM (Mon-Sun)',
 id :2,
	image: 'https://www.mcdonalds.com/content/dam/usa/nutrition/items/evm/h-mcdonalds-Double-Quarter-Pounder-with-Cheese-Extra-Value-Meals.png'
},
{
	name: 'Subway',
	address: 'Ground Floor, SCO 495-496, Sector 35C, Sector 35, Chandigarh',
	location: 'Chandigarh',
	category: 'Family and friend Restaurant',
	vote: '3.9',
	cuisines: 'Indian',
	cost: '800',
	hours: '9 AM to 11 PM (Mon-Sun)',
 id:3,
	image: 'http://melbourneairport.com.au/image_store/subway-eat-well-re-szied.jpg'
},
{
	name: 'Punjab Restaurant',
	address: 'Nalagarh-Baddi Road, Nalagarh, Himachal Pradesh 174101',
	location: 'Nalagarh',
	category: 'Casual Dining',
	vote: '4.2',
	cuisines: 'Indian',
	cost: '1500',
	hours: '10 AM to 12 AM (Mon-Sun)',
 id :4,
	image: 'http://www.kavach.mobi/images/Restaurants.jpg'
},
{
	name: 'Pizza hut',
	address: 'SN 82,Shopping Plaza, Sector 15D, Chandigarh, 160015',
	location: 'Chandigarh',
	category: 'Pizza',
	vote: '4.4',
	cuisines: 'Italian',
	cost: '1200',
	hours: '11 AM to 11 PM (Mon-Sun)',
 id :5,
	image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Pizza_Hut_logo.svg/1200px-Pizza_Hut_logo.svg.png'
},
]

})
