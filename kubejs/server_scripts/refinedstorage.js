// priority: 0

ServerEvents.recipes((event) => {
	
  event.remove({ output: "templates:button"});
  event.remove({ output: "templates:cube"});
  event.remove({ output: "templates:stairs"});
  event.remove({ output: "templates:slab"});
  event.remove({ output: "templates:vertical_slab"});
  event.remove({ output: "templates:post"});
  event.remove({ output: "templates:fence"});
  event.remove({ output: "templates:fence_gate"});
  event.remove({ output: "templates:door"});
  event.remove({ output: "templates:trapdoor"});
  event.remove({ output: "templates:iron_door"});
  event.remove({ output: "templates:iron_trapdoor"});
  event.remove({ output: "templates:pressure_plate"});
  event.remove({ output: "templates:lever"});
  event.remove({ output: "templates:wall"});
  event.remove({ output: "templates:carpet"});
  event.remove({ output: "templates:pane"});
  event.remove({ output: "templates:candle"});
  event.remove({ output: "templates:slope"});
  event.remove({ output: "templates:tiny_slope"});
});
