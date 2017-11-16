<template>
  <div id="app">
    <div class="navbar-fixed">      
      <nav class="nav-extended blue-grey darken-4">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Dito Challenge</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="hide-on-med-and-down right">                                       
            <li><a href="#" class="dropdown-button" data-activates="dropdown1"><i class="material-icons left">account_circle</i> {{ getAuthenticatedUserName }}</a></li>            
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li v-show="!isAuthenticated()"><router-link to="/login"><i class="material-icons left">account_circle</i>Entrar</router-link></li>
            <li>
              <router-link to="/register"><i class="material-icons left">add_circle</i>Cadastrar</router-link>
            </li>         
            <li><a href="#" @click="logout()">Sair</a></li>
          </ul>          
        </div>
      </nav>
      <ul id="dropdown1" class="dropdown-content">
        <li v-show="!isAuthenticated()"><router-link to="/login">Entrar</router-link></li>
        <li><router-link to="/register">Cadastrar</router-link></li>
        <li class="divider"></li>        
        <li><a href="#" @click="logout()">Sair</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  computed: mapGetters(['getAuthenticatedUserName']),
  methods: {
    isAuthenticated () {
      return this.$ls.get('logged') !== null
    },
    logout () {
      this.$ls.remove('logged')
      location.reload()
    }
  }
}
</script>

<style>
  .navbar-fixed {
     z-index: 9999;
  }
</style>
