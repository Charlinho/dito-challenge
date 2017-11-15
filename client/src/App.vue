<template>
  <div id="app">
    <div class="navbar-fixed">      
      <nav class="nav-extended blue-grey darken-4">
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Dito Challenge</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="hide-on-med-and-down right">                                       
            <li><a href="#!" class="dropdown-button" data-activates="dropdown1"><i class="material-icons left">account_circle</i>Login</a></li>            
          </ul>
          <ul class="side-nav" id="mobile-demo">
            <li><a href="#"><i class="material-icons left">account_circle</i>Login</a></li>
            <li>
              <router-link to="/register"><i class="material-icons left">add_circle</i>Cadastrar</router-link>
            </li>         
          </ul>          
        </div>
      </nav>
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">Entrar</a></li>
        <li><router-link to="/register">Cadastrar</router-link></li>
        <li class="divider"></li>        
        <li><a href="#!">Sair</a></li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .navbar-fixed { z-index: 9999; }
</style>
