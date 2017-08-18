const request = require('superagent')

const caller = {}
module.exports = caller

caller.authenticateAndGetToken = function (username, password) {
  return new Promise((resolve, reject) => {
    request
      .post('localhost:5000/token')
      .send({ username: username, password: password })
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .end(function (err, res) {
        if (err) {
          return reject(err)
        } else {
          const token = res.body.access_token
          console.log(
            '> user authenticated successfully and received a jwt token'
          )
          return resolve(token)
        }
      })
  })
}

caller.service1Endpoint = function (token) {
  return new Promise((resolve, reject) => {
    request
      .get('localhost:5001/api/values')
      .set('Authorization', `Bearer ${token}`)
      .end(function (err, res) {
        if (err) {
          return reject(err)
        } else {
          console.log('> service 1 returned', res.body)
          return resolve()
        }
      })
  })
}

caller.service2Endpoint = function (token) {
  return new Promise((resolve, reject) => {
    request
      .get('localhost:5002/')
      .set('Authorization', `Bearer ${token}`)
      .end(function (err, res) {
        if (err) {
          return reject(err)
        } else {
          console.log('> service 2 returned', res.text)
          return resolve()
        }
      })
  })
}

caller.service1Endpoint_withAlteredToken = function (token) {
  return new Promise((resolve, reject) => {
    request
      .get('localhost:5001/api/values')
      .set('Authorization', `Bearer ${token}alteration`)
      .end(function (err, res) {
        if (err) {
          const status = err.status
          if (status === 401) {
            console.log(`> service 1 returned a 401 Unauthorized, which makes sense`)
            return resolve(status)
          } else {
            return reject('error but not a 401, hmm...? this is wrong!')
          }
        } else {
          return reject('this function should have received a 401')
        }
      })
  })
}

caller.service1Endpoint_withUserLackingRole = function (token) {
  return new Promise((resolve, reject) => {
    request
      .get('localhost:5001/api/values')
      .set('Authorization', `Bearer ${token}`)
      .end(function (err, res) {
        if (err) {
          const status = err.status
          if (status === 403) {
            console.log(`> service 1 now returned a 403 Forbidden, which makes sense`)
            return resolve(status)
          } else {
            return reject('error but not a 403 Forbidden, hmm...? this is wrong!')
          }
        } else {
          return reject('this function should have received a 403')
        }
      })
  })
}
