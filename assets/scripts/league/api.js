const config = require('./../config')
const store = require('./../store')

// create single league
const leagueCreate = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/leagues',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      league: {
        name: data.league.name,
        sport: data.league.sport,
        description: data.league.description
      }
    }
  })
}

// delete a league
const leagueDestroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/leagues/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// get leagues
// console.log(store.user.id)
const leagueIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/leagues',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// update league
const leagueUpdate = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/leagues/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      league: {
        name: data.league.name,
        sport: data.league.sport,
        description: data.league.description
      }
    }
  })
}

module.exports = {
  leagueCreate,
  leagueDestroy,
  leagueUpdate,
  leagueIndex
}
