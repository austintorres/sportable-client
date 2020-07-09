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
  $('#league-create-msg').hide()
  $('#view-all-leagues-button').attr('disabled', true)
  $('#clear-leagues-button').show()
  $('.content').append(leaguesHtml)
  $('#view-leagues-msg').text('Here are your created leagues!')
}

const getLeaguesFailure = function () {
  $('form').trigger('reset')
  $('#view-leagues-msg').text('Failed to get your leagues!')
  $('#view-leagues-msg').show().removeClass().addClass('failure')
}

const updateLeagueSuccess = function (id) {
  $('form').trigger('reset')
  $('#update-league-msg').text('Update successful!')
}

const updateLeagueFailure = function () {
  $('form').trigger('reset')
  $('#update-league-msg').text('Uh oh. Something went wrong!')
}

const deleteLeagueSuccess = function (id) {
  $('#view-leagues-msg').hide()
  $('#del-league-msg').text('League was deleted!')
  $('.remove-league').show()
  $(`[data-id="${id}"]`).remove()
  console.log('Delete was successful!')
}

const deleteLeagueFailure = function () {
  $('form').trigger('reset')
  $('#view-leagues-msg').text('Failed to delete!')
  $('#view-leagues-msg').show().removeClass().addClass('failure')
}

const clearLeagues = function () {
  $('#clear-league-msg').text('Leagues have been cleared!')
  $('#view-leagues').show()
  $('.content').empty()
  $('#league-create-msg').hide()
  $('#view-leagues-msg').hide()

}

module.exports = {
  createLeagueSuccess,
  createLeagueFailure,
  getLeaguesSuccess,
  getLeaguesFailure,
  updateLeagueSuccess,
  updateLeagueFailure,
  deleteLeagueSuccess,
  deleteLeagueFailure,
  clearLeagues
}
