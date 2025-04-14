# Vue.js Dynamic Form Assignment

This project is a form-based Vue.js application that allows users to fill out grouped input fields, select options, upload a file, and submit the data to a simulated API using JWT authentication. After successful submission, the form data is displayed in a table format **without page refresh**.

---

## Features

- Two default input groups with dynamic Add/Remove
- Inputs: Name, Email, Mobile
- Date Picker: Birth date
- Gender (Radio), Language (Checkboxes), City (Multi-select)
- File Upload (JPEG & PDF only)
- API call with simulated JWT
- Displays form submission in a table below the form
- Handles validation errors from API
- BEM-based CSS structure for maintainable styling

---

## Technologies Used

- [Vue 3 + Composition API](https://vuejs.org)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com)
- JavaScript, HTML, CSS (BEM naming)

---

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vue-dynamic-form.git
cd vue-dynamic-form
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

---

## JWT Handling (Mock)

A fake token is hardcoded for simulation:
```js
const jwtToken = 'fake-jwt-token-123456';
```
This is included in the `Authorization` header during the API call.

---

## Submitting Form

All form data including dynamic fields and uploaded file is submitted as `multipart/form-data`. The backend logic is mocked via a `setTimeout()` that mimics delay and handles basic validation.

---

## 📊 Output

Once submitted successfully, the data appears below the form in a table **without refreshing the page**.