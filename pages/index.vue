<script setup lang="ts">
const { loggedIn } = useUserSession();
</script>

<template>
  <UCard>
    <template #header>
      <h3 class="text-lg font-semibold leading-6">Todo List</h3>
      <UButton
        v-if="!loggedIn"
        to="/api/auth/github"
        icon="i-simple-icons-github"
        label="Login with GitHub"
        color="black"
        external
      />
      <UButton
        v-else
        to="/todos"
        icon="i-heroicons-list-bullet"
        label="Go to Todos"
        color="black"
      />
    </template>
  </UCard>
</template>
