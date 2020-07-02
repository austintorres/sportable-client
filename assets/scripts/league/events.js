const ui = require('./ui')
const api = require('./api')
const getFormFields = require('../../../lib/get-form-fields')

const onLeagueCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.leagueCreate(data)
    .then(ui.createLeagueSuccess)
    .catch(ui.createLeagueFailure)
}

const onGetLeagues = function (event) {
  event.preventDefault()
  api.leagueIndex()
    .then(ui.getLeaguesSuccess)
    .catch(ui.getLeaguesFailure)
}

module.exports = {
  onLeagueCreate,
  onGetLeagues
}
