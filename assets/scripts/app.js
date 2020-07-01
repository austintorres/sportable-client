'use strict'

const authEvents = require('./auth/events')

$(() => {
  // EVENTS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#member-switch').on('click', authEvents.onToggleSignIn)
  // USER DOCS
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#non-member-switch').hide()
  // HTML DOCS
  $('#sign-in-msg').hide()
  $('#welcome-msg').hide()
})
