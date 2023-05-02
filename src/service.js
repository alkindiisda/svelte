import { writable } from 'svelte/store';

export let name = "Teacher Room";

export let teachers = writable([
  { id: 1, name: "John Smith" },
  { id: 2, name: "Jane Doe" },
]);

export function addTeacher(newTeacherName) {
  // TODO: answer here
}

export function deleteTeacher(index) {
  // TODO: answer here
}
