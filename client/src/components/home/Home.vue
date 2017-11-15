<template>  
  <div class="row">
    <br>
    <div class="input-field col s12 m8 offset-m2">
      <input placeholder="Pesquisar" id="first_name" type="text" class="validate">
      <label for="first_name">Pesquisar</label>
    </div>
    <card></card>
    <card></card>
    <card></card>    
  </div>  
</template>

<script>
import User from '../../domain/user/User'
import Card from '../shared/card/Card.vue'
import AuthenticationService from '../../domain/user/AuthenticationService'

export default {
  components: {
    'card': Card
  },
  name: 'Home',
  data () {
    return {
    }
  },
  mounted () {
    setTimeout(() => {
      let user = new User('Charleston', 'Campos', 'charlinhocjc@gmail.com', '123456')

      this.service = new AuthenticationService(this.$resource)
      this.service.authentication(user).then((data) => console.log(data.status), err => console.log(err))
    }, 5000)
  }
}
</script>

<style scoped>

</style>
