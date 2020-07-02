const store = require('./../store')
const leaguesTemplate = require('../templates/league.handlebars')

const createLeagueSuccess = function (response) {
  store.leagues = response.leagues
  console.log(response)
  $('form').trigger('reset')
  $('#league-create-msg').text('Your league created successfully!')
  console.log('createLeagueSuccess')
}

const createLeagueFailure = function () {
  $('#league-create-msg').text('Could not create league! Please try again!')
  $('#league-create-msg').show().removeClass().addClass('failure')
}

const getLeaguesSuccess = function (data) {
  store.leagues = data.leagues
  console.log(data)
  const leaguesHtml = leaguesTemplate({ leagues: data.leagues })
  $('.content').append(leaguesHtml)
  $('#')
}

const getLeaguesFailure = function () {
  $('form').trigger('reset')
  $('#view-leagues-msg').text('Failed to get your leagues!')
  $('#view-leagues-msg').show().removeClass().addClass('failure')
}

const deleteLeagueSuccess = function (id) {
  $(`[data-id="${id}"]`).remove()
  console.log('League Was Deleted')
}

const deleteLeagueFailure = function () {
  $('form').trigger('reset')
  $('#view-leagues-msg').text('Failed to delete!')
  $('#view-leagues-msg').show().removeClass().addClass('failure')
}

module.exports = {
  createLeagueSuccess,
  createLeagueFailure,
  getLeaguesSuccess,
  getLeaguesFailure,
  deleteLeagueSuccess,
  deleteLeagueFailure
}
