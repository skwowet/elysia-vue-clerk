<script setup lang="ts">
import { UserProfile, useAuth } from 'vue-clerk'

const { isSignedIn } = useAuth()

try {
  await fetch('http://localhost:3000/private', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("hello...", data)
    })
} catch (error) {
  throw new Error('Failed to signup')
}

</script>

<template>
  <UserProfile v-if="isSignedIn" />
</template>