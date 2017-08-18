const caller = require('./caller')

console.log('..::RUNNING DEMO SCENARIO::..\n')
;(async () => {
  try {
    await aSecond()
    console.log('STEP 1/6: authenticating admin bob')
    await aSecond()
    let token = await caller.authenticateAndGetToken('adminbob', 'bobby2017!')
    console.log('\n')

    await aSecond()
    console.log('STEP 2/6: calling service 1 with our new and shiny jwt token')
    await aSecond()
    await caller.service1Endpoint(token)
    console.log('\n')

    await aSecond()
    console.log('STEP 3/6: now calling service 2 with the same token')
    await aSecond()
    await caller.service2Endpoint(token)
    console.log('\n')

    await aSecond()
    console.log('STEP 4/6: now calling service 1 again but with an altered token')
    await aSecond()
    await caller.service1Endpoint_withAlteredToken(token)
    console.log('\n')

    await aSecond()
    console.log('STEP 5/6: authenticating simple bob (lacking role admin)')
    await aSecond()
    let simpleBobToken = await caller.authenticateAndGetToken('bob', 'bobby2017!')
    console.log('\n')

    await aSecond()
    console.log('STEP 6/6: calling service 1 with simple bob´s jwt token')
    await aSecond()
    await caller.service1Endpoint_withUserLackingRole(simpleBobToken)
    console.log('\n')
  } catch (err) {
    console.log(err)
    console.log('demo failed')
  }
})()

function aSecond () {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000)
  })
}
