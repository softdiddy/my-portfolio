<template>
    
  <header>
      <div class="header-containt">
          <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <img src="../assets/testgorilla-logo.png" width="221" class="me-2" viewBox="0 0 118 94" role="img" />
           
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <router-link to="/" class="links"> Overview</router-link>
          <router-link to="/about" class="links">About Me</router-link>
          <router-link to="/blog" class="links">Blog</router-link>

          ||
          <router-link to="/register" class="links">Register</router-link>
         <router-link to="/login" class="links">Signin</router-link>
            
      </nav>
    </div>
      </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
    header{
        background-color: rgb(22,27,34);
        height: 8rem;
      
    }
    .header-containt{
        margin-left: 10%;
        margin-right: 10%;
        padding-top: 15px;
    }
    .links{
        margin-left: 15px;
        margin-right: 5px;
        text-decoration: none;
        color: #fff;
    }
</style>