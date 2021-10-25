<template>
  <nav>
    <a> <c-heading as="h6" size="xs"> Home </c-heading></a>
    <a> <c-heading as="h6" size="xs"> Calculadora de Tempo </c-heading></a>
  </nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style>
nav {
  display: flex;
  align-items: center;
}
nav a {
  margin: 10px 20px;
}
</style>