'use strict'

const authEvents = require('./auth/events')
const leagueEvents = require('./league/events')

$(() => {
  // EVENTS
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#member-switch').on('click', authEvents.onToggleSignIn)
  $('#create-league').on('submit', leagueEvents.onLeagueCreate)
  $('#view-all-leagues-button').on('click', leagueEvents.onGetLeagues)
  $('.content').on('click', '.remove-league', leagueEvents.onDeleteLeague)
  $('.content').on('submit', '.update-league-form', leagueEvents.onUpdateLeague)
  $('#clear-leagues-button').on('click', leagueEvents.onClearLeague)
  // USER DOCS
  $('#sign-up').show()
  $('#sign-in').hide()
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#non-member-switch').hide()
  // HTML DOCS
  $('#sign-in-msg').hide()
  $('#welcome-msg').hide()
  $('#create-league').hide()
  $('#view-all-leagues-button').hide()
  $('#clear-leagues-button').hide()
})
