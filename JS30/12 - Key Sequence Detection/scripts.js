window.addEventListener("keyup", e => {
  console.log(e.key);
  PermissionRequestedEvent.push(e.key);
});
