import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {
  /*
  before(function () {
    cy.log(
      'Tudo aqui é executado uma unica vez ANTES de Todos os casos de testes'
    )
  })

  beforeEach(function () {
    cy.log('Tudo aqui é executado sempre ANTES de cada caso de teste')
  })

  after(function () {
    cy.log(
      'Tudo aqui é executado uma unica vez Depois de Todos os casos de testes'
    )
  })

  afterEach(function () {
    cy.log('Tudo aqui é executado sempre Depois de cada caso de teste')
  })
*/
  //comando oara os dados no json
  //  beforeEach(function () {
  //    cy.fixture('deliver').then(d => {
  //     this.deliver = d
  //  })
  // })

  it('User should be deliver', function () {
    var deliver = signupFactory.deliver()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    signup.modalContentShouldBe(expectedMessage)
  })

  it('Incorrect document', function () {
    var deliver = signupFactory.deliver()

    deliver.cpf = '973175942AA'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMesageShouldBe('Oops! CPF inválido')
  })

  it('Incorrect email', function () {
    var deliver = signupFactory.deliver()

    deliver.email = 'erika.f.com'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMesageShouldBe('Oops! Email com formato inválido.')
  })

  // teste dinamico

  context('Required Fields', function () {
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
    ]

    before(function () {
      signup.go()
      signup.submit()
    })

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        signup.alertMesageShouldBe(msg.output)
      })
    })
  })
  /*
  it('Required fields', function () {
    signup.go()
    signup.submit()
    signup.alertMesageShouldBe('É necessário informar o nome')
    signup.alertMesageShouldBe('É necessário informar o CPF')
    signup.alertMesageShouldBe('É necessário informar o email')
    signup.alertMesageShouldBe('É necessário informar o CEP')
    signup.alertMesageShouldBe('É necessário informar o número do endereço')
    signup.alertMesageShouldBe('Selecione o método de entrega')
    signup.alertMesageShouldBe('Adicione uma foto da sua CNH')
    
  })*/
})
