<template>
  <div>
    <!-- Delete Button -->
    <button @click="confirmDelete">Delete Account</button>
  </div>
</template>

<script>
export default {
  name: 'DeleteUserComponent',
  methods: {
    // Method to confirm deletion
    confirmDelete() {
      if (confirm("Are you sure you want to delete this account?")) {
        this.deleteAccount();
      }
    },
    // Method to delete account
    async deleteAccount() {
      try {
        const response = await fetch(`api/auth/profile`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any necessary headers, such as authentication tokens
            // For example: 'Authorization': `Bearer ${your_token}`
          }
        });
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // alert("Account deleted successfully");
        // Redirect to the home page
        this.$router.push('/');
      } catch (error) {
        console.error('There was a problem with the delete request:', error);
        // alert("There was an error deleting the account");
      }
    }
  }
};
</script>

<style scoped>
/* Add any necessary styling for your button */
button {
  background-color: var(--orange-text-color);
  color: #000;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}

button:hover {
  background-color: darkred;
}
</style>
