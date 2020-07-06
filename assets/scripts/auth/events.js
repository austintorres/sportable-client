'use strict'

const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const onSignUp = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onSignIn = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // prevent refresh
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePw = function (event) {
  // prevent refresh
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.changePwSuccess)
    .catch(ui.changePwFailure)
}

const onToggleSignIn = function () {
  event.preventDefault()
  $('#sign-in').show()
  $('#sign-in-msg').show()
  $('#non-member-switch').show()
  $('#sign-up-msg').hide()
  $('#sign-up').hide()
  $('#member-switch').hide()
}

const onToggleSignUp = function () {
  event.preventDefault()
  $('#sign-up').show()
  $('#sign-up-msg').show()
  $('#sign-in-msg').hide()
  $('#sign-in').hide()
  $('#member-switch').hide()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut,
  onToggleSignIn,
  onToggleSignUp
}
