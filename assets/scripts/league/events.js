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

const onDeleteLeague = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.leagueDestroy(id)
    .then(() => ui.deleteLeagueSuccess(id))
    .catch(ui.deleteLeagueFailure)
}

const onUpdateLeague = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  const id = $(event.target).data('id')
  api.leagueUpdate(data, id)
    .then(ui.updateLeagueSuccess)
    .catch(ui.updateLeagueFailure)
}

const onClearLeague = function (event) {
  event.preventDefault()
  ui.clearLeagues()
}

module.exports = {
  onLeagueCreate,
  onGetLeagues,
  onDeleteLeague,
  onUpdateLeague,
  onClearLeague
}
