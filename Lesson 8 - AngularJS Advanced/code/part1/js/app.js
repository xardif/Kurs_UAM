angular.module('myapp', ['ui.router']).config(function($stateProvider) {
	$stateProvider
	.state('default', {
    url: '',
		templateUrl: "partials/list.html",
    controller: 'UsersListCtrl'
  })
	.state('users', {
		url: "/users",
		controller: 'UsersListCtrl',
		templateUrl: "partials/list.html"
	})
	.state('user', {
		url: "/user/:userId",
		controller: 'UserCtrl',
		templateUrl: "partials/user.html"
	})
	.state('user.comments', {
		url: "/comments",
		controller: 'CommentsCtrl',
		templateUrl: "partials/comments.html"
	});
});
