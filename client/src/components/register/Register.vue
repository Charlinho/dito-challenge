<template>
  <div class="row">
    <br>
    <form @submit.prevent="save()" class="col s10 m8 offset-m2">
      <div class="card">        
        <div class="card-content">
          <div class="row">
            <div class="input-field col s12 m6">
              <input v-model="user.name" placeholder="Nome" id="first_name" type="text" class="validate">
              <label for="first_name">Nome</label>
            </div>
            <div class="input-field col s12 m6">
              <input v-model="user.lastName" id="last_name" type="text" class="validate">
              <label for="last_name">Sobre Nome</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input v-model="user.email" id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>      
          <div class="row">
            <div class="input-field col s12">
              <input v-model="user.password" id="password" type="password" class="validate">
              <label for="password">Password</label>
            </div>
          </div>
          <div class="row">
            <div class="col s12 m6 offset-m9">              
              <button @click="backToHome()" class="btn waves-effect waves-light" type="button" name="action">Sair</button>              
              <button class="btn waves-effect waves-light" type="submit" name="action">Salvar</button>
            </div>            
          </div>                                       
        </div>        
      </div>                  
    </form>
  </div>
</template>
<script>
import User from '../../domain/user/User'
import UserService from '../../domain/user/UserService'

export default {
  data () {
    return {
      user: new User()
    }
  },
  created () {
    this.service = new UserService(this.$resource)
  },
  methods: {
    backToHome (event) {
      this.$router.push('/')
    },
    save () {
      this.service.save(this.user)
        .then(this.$router.push('/login'), err => console.log(err))
    }
  }
}
</script>

<style>

</style>


