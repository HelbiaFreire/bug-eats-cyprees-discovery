var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
  deliver: function () {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

    var data = {
      name: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: '1199999999',
      address: {
        postalcode: '69043003',
        street: 'Rua Pitimbu',
        number: '8',
        datails: 'Ap 5',
        district: 'Alvorada',
        city_state: 'Manaus/AM'
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg'
    }

    return data
  }
}
