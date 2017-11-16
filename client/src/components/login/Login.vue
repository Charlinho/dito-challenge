<template>
  <div class="row">
    <br>
    <form @submit.prevent="authentication()" class="col s12 m4 offset-m4">
      <div class="card">        
        <div class="card-content">
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
            <div class="col s12 m7 offset-m8">              
              <button class="btn waves-effect waves-light" type="submit" name="action">Logar</button>
            </div>            
          </div>                                       
        </div>        
      </div>                  
    </form>
  </div>  
</template>
<script>
import User from '../../domain/user/User'
import AuthenticationService from '../../domain/User/AuthenticationService'

export default {
  data () {
    return {
      user: new User()
    }
  },
  created () {
    this.service = new AuthenticationService(this.$resource, 'users/authentication')
  },
  methods: {
    authentication () {
      this.service.authentication(this.user)
        .then((data) => {
          this.user = data.body
          this.$ls.set('logged', this.user)
          this.$store.dispatch({
            type: 'login',
            user: this.user
          })
          this.$router.push('/')
        }, err => console.log(err))
    }
  }
}
</script>
<style>

</style>

