<script>
  import { name, teachers, addTeacher, deleteTeacher } from './service.js';

  let newTeacherName = "";

  function addNewTeacher() {
    addTeacher(newTeacherName);
    newTeacherName = "";
  }
</script>

<main>
  <h1>Welcome to {name}!</h1>
  <div>
    <form on:submit|preventDefault={addNewTeacher}>
      <input type="text" placeholder="Name" bind:value={newTeacherName} />
      <button type="submit">Add Teacher</button>
    </form>

    <ul>
      {#each $teachers as teacher, i}
        <li key={teacher.id}>
          <p>{teacher.name}</p>
          <button on:click={() => deleteTeacher(i)}>Delete</button>
        </li>
      {:else}
        <li>No teachers found</li>
      {/each}
    </ul>
  </div>
</main>


<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
