// priority: 0

StartupEvents.registry("item", (event) => {
  let mechanism = (name) => {
    let id = name.toLowerCase();
    event.create(`incomplete_${id}_mechanism`).texture(`skyhigh:item/incomplete_${id}_mechanism`).displayName(`Incomplete ${name} Mechanism`);
    event.create(`${id}_mechanism`).texture(`skyhigh:item/${id}_mechanism`).displayName(`${name} Mechanism`);
  };
  mechanism("Refined");
});
// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

