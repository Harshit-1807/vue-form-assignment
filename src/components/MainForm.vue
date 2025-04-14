<template>
  <div class="main-form__wrapper">
    <form class="main-form" @submit.prevent="handleSubmit">
      <!-- Dynamic Group Fields -->
      <div class="main-form__group-wrapper">
        <FormGroup
          v-for="(group, index) in formData.groups"
          :key="index"
          :group="group"
          :removable="formData.groups.length > 2"
          @remove="removeGroup(index)"
        />
        <button type="button" class="main-form__add-btn" @click="addGroup">
          + Add More
        </button>
      </div>

      <!-- Birth Date -->
      <label class="main-form__label">Birth Date</label>
      <input
        type="date"
        class="main-form__input"
        v-model="formData.birthDate"
      />

      <!-- Gender -->
      <div class="main-form__section">
        <label class="main-form__label">Gender</label>
        <label><input type="radio" value="Male" v-model="formData.gender" /> Male</label>
        <label><input type="radio" value="Female" v-model="formData.gender" /> Female</label>
      </div>

      <!-- Languages -->
      <div class="main-form__section">
        <label class="main-form__label">Languages</label>
        <label><input type="checkbox" value="Angular" v-model="formData.languages" /> Angular</label>
        <label><input type="checkbox" value="Vuejs" v-model="formData.languages" /> Vuejs</label>
        <label><input type="checkbox" value="ReactJs" v-model="formData.languages" /> ReactJs</label>
      </div>

      <!-- City Multi-select -->
      <label class="main-form__label">City</label>
      <select multiple v-model="formData.cities" class="main-form__select">
        <option v-for="city in cityOptions" :key="city">{{ city }}</option>
      </select>

      <!-- File Upload -->
      <label class="main-form__label">Upload File (JPEG/PDF)</label>
      <input type="file" accept=".jpg, .jpeg, .pdf" @change="handleFileChange" class="main-form__input" />

      <!-- Error Message -->
      <div v-if="errorMessage" class="main-form__error">
        {{ errorMessage }}
      </div>

      <!-- Submit Button -->
      <button type="submit" class="main-form__submit">Submit</button>
    </form>

    <!-- Submitted Data Table -->
    <SubmittedTable :entries="submittedEntries" />
  </div>
</template>

  
  <script setup>
  import { ref } from 'vue'
  import FormGroup from './FormGroup.vue'
  import SubmittedTable from './SubmittedTable.vue'
  import { submitFormData } from '../services/api'
  
  // Form state
  const formData = ref({
    groups: [
      { name: '', email: '', mobile: '' },
      { name: '', email: '', mobile: '' }
    ],
    birthDate: '',
    gender: '',
    languages: [],
    cities: [],
    file: null
  })
  
  const errorMessage = ref('')
  const submittedEntries = ref([])
  
  const cityOptions = [
    'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad',
    'Chennai', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ]
  
  // Add new group
  const addGroup = () => {
    formData.value.groups.push({ name: '', email: '', mobile: '' })
  }
  
  // Remove a group field
  const removeGroup = (index) => {
    if (formData.value.groups.length > 2) {
      formData.value.groups.splice(index, 1)
    }
  }
  
  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && (file.type === 'application/pdf' || file.type.startsWith('image/jpeg'))) {
      formData.value.file = file
    } else {
      errorMessage.value = 'Only JPEG and PDF files are allowed.'
    }
  }
  
  // Form submission
  const handleSubmit = async () => {
    errorMessage.value = ''
    try {
      const response = await submitFormData(formData.value)
      submittedEntries.value.push(response.data)
    } catch (err) {
      errorMessage.value = err.response?.data?.message || 'Something went wrong!'
    }
  }
  </script>
  
  <style scoped>
  .main-form {
    max-width: 800px;
    margin: auto;
  }
  .main-form__group-wrapper {
    margin-bottom: 1rem;
  }
  .main-form__add-btn,
  .main-form__submit {
    margin-top: 10px;
    padding: 8px 12px;
    background-color: #1976d2;
    color: white;
    border: none;
    cursor: pointer;
  }
  .main-form__label {
    display: block;
    margin: 10px 0 5px;
  }
  .main-form__input,
  .main-form__select {
    width: 100%;
    padding: 6px;
  }
  .main-form__error {
    color: red;
    margin-top: 10px;
  }
  .main-form__section {
    margin-top: 10px;
  }
  </style>
  