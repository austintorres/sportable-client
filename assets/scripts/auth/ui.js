'use strict'

const store = require('./../store')

const createSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up was successful!')
  $('#message').show().removeClass().addClass('success')
  console.log('createSuccess')
  $('#sign-in').show()
  $('#sign-up').hide()
  $('#member-switch').hide()
  $('#sign-out').hide()
}

const createFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign up failed!')
  $('#message').show().removeClass().addClass('failure')
  console.log('createFailure')
}

const signInSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('You are now signed in as, ' + response.user.email)
  $('#message').show().removeClass().addClass('success')
  store.user = response.user
  $('#sign-out').show()
  $('#welcome-msg').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#sign-in-msg').hide()
  $('#non-member-switch').hide()
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in failed!')
  $('#message').show().removeClass().addClass('failure')
}

const signOutSuccess = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('You have signed out!')
  $('#message').show().removeClass().addClass('success')
  store.user.token = null
  $('#sign-up').show()
  $('#member-switch').show()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
}

const signOutFailure = function (response) {
  console.log(response)
  $('form').trigger('reset')
  $('#message').text('Sign out failed!')
  $('#message').show().removeClass().addClass('failure')
}

const changePwSuccess = function (response) {
  console.log(changePwSuccess)
  $('form').trigger('reset')
  $('#message').text('Password was changed successfully!')
  $('#message').show().removeClass().addClass('success')
}

const changePwFailure = function () {
  console.log(changePwFailure)
  $('form').trigger('reset')
  $('#message').text('Password change was unsuccessful!')
  $('#message').show().removeClass().addClass('failure')
}

module.exports = {
  createSuccess,
  createFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePwSuccess,
  changePwFailure
}
