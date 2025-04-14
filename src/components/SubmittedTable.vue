<template>
  <div v-if="entries.length" class="table">
    <h2 class="table__title">Submitted Entries</h2>
    <table class="table__content">
      <thead>
        <tr>
          <th>#</th>
          <th>Name(s)</th>
          <th>Email(s)</th>
          <th>Mobile(s)</th>
          <th>Birth Date</th>
          <th>Gender</th>
          <th>Languages</th>
          <th>Cities</th>
          <th>File Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, index) in entries" :key="index">
          <td>{{ index + 1 }}</td>
          <td>
            <ul>
              <li v-for="(group, i) in entry.groups" :key="`name-${i}`">
                {{ group.name }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="(group, i) in entry.groups" :key="`email-${i}`">
                {{ group.email }}
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="(group, i) in entry.groups" :key="`mobile-${i}`">
                {{ group.mobile }}
              </li>
            </ul>
          </td>
          <td>{{ formatDate(entry.birthDate) }}</td>
          <td>{{ entry.gender }}</td>
          <td>{{ entry.languages.join(", ") }}</td>
          <td>{{ entry.cities.join(", ") }}</td>
          <td>{{ entry.fileName }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  entries: Array,
});

// Format date into "Month DD, YYYY"
const formatDate = (rawDate) => {
  return new Date(rawDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped>
.table {
  margin-top: 30px;
}
.table__title {
  font-size: 1.3rem;
  margin-bottom: 10px;
}
.table__content {
  width: 100%;
  border-collapse: collapse;
}
.table__content th,
.table__content td {
  border: 1px solid #ccc;
  padding: 6px;
  text-align: left;
}
</style>
