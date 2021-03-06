import signup  from '../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function() {
       cy.fixture('deliver').then((d) => {
          this.deliver = d
       
        })

           })

    
    
    //before(function() {

       // cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
  //  })

   // beforeEach(function() {
        // cy.log('Tudo aqui é executado uma única vez ANTES de CADA os caso de teste')
   // })
   
   // after(function() {

       // cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
   // })

   // afterEach(function() {
       // cy.log('Tudo aqui é executado uma única vez DEPOIS de CADA os caso de teste')
   // })

    
    
    it('User should be a deliver', function() {
        
      
           
           signup.go()
           signup.fillForm(this.deliver.signup)
           signup.submit()

           const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
           signup.modalContentShouldBe(expectedMessage)

           
          })

        it('Incorret document', function() {
       
            
          

           signup.go()
           signup.fillForm(this.deliver.cpf_inv)
           signup.submit()
           signup.alertMessageShouldBe('Oops! CPF inválido')
          
           })
           
         it('Incorret email', function(){
         
           signup.go()
           signup.fillForm(this.deliver.email_inv)
           signup.submit()
           signup.alertMessageShouldBe('Oops! Email com formato inválido.')
         }) 

           

        })

