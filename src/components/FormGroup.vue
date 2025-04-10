<template>
    <div class="form-group">
      <input
        type="text"
        class="form-group__input"
        v-model="group.name"
        placeholder="Name"
      />
      <input
        type="email"
        class="form-group__input"
        v-model="group.email"
        placeholder="Email"
      />
      <input
        type="text"
        class="form-group__input"
        v-model="group.mobile"
        placeholder="Mobile (e.g. (844) 448-0110)"
      />
      <button
        v-if="removable"
        @click="emit('remove')"
        class="form-group__remove"
      >Remove</button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    group: Object,
    removable: Boolean
  })
  const emit = defineEmits(['remove'])
  </script>
  
  <style scoped>
  .form-group {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }
  .form-group__input {
    padding: 6px;
  }
  .form-group__remove {
    background: #f44336;
    color: white;
    border: none;
    padding: 6px 10px;
    cursor: pointer;
  }
  </style>
  