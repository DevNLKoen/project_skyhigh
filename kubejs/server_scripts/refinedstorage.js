// priority: 0

ServerEvents.recipes((event) => {
	
  event.remove({ output: "refinedstorage2:silicon", input: "minecraft:quartz" });
  event.remove({ output: "refinedstorage2:quartz_enriched_iron", input: "minecraft:quartz" });
  event.remove({ output: "refinedstorage2:raw_basic_processor" });
  event.remove({ output: "refinedstorage2:raw_improved_processor" });
  event.remove({ output: "refinedstorage2:raw_advanced_processor" });
  event.remove({ output: "refinedstorage2:1k_storage_part" });
  event.remove({ output: "refinedstorage2:4k_storage_part" });
  event.remove({ output: "refinedstorage2:16k_storage_part" });
  event.remove({ output: "refinedstorage2:64k_storage_part" });
  event.remove({ output: "refinedstorage2:64b_fluid_storage_part" });
  event.remove({ output: "refinedstorage2:256b_fluid_storage_part" });
  event.remove({ output: "refinedstorage2:1024b_fluid_storage_part" });
  event.remove({ output: "refinedstorage2:4096b_fluid_storage_part" });
  event.remove({ output: "refinedstorage2:disk_drive" });
  event.remove({ output: "refinedstorage2:storage_monitor" });
  event.remove({ output: "refinedstorage2:controller", input: "refinedstorage2:advanced_processor" });
  event.remove({ output: "refinedstorage2:grid", input: "refinedstorage2:improved_processor" });
  event.remove({ output: "refinedstorage2:crafting_grid", input: "refinedstorage2:advanced_processor" });
  event.remove({ output: "refinedstorage2:pattern_grid", input: "refinedstorage2:advanced_processor" });
  event.remove({ output: "refinedstorage2:fluid_grid", input: "refinedstorage2:advanced_processor" });
  event.remove({ output: "refinedstorage2:security_manager", input: "refinedstorage2:security_card" });
  event.remove({ output: "refinedstorage2:wireless_transmitter", input: "refinedstorage2:advanced_processor" });
  event.remove({ output: "refinedstorage2:disk_manipulator", input: "refinedstorage2:storage_housing" });
  event.remove({ output: "refinedstorage2:crafter", input: "refinedstorage2:advanced_processor" });
  event.remove({ output: "refinedstorage2:crafter_manager", input: "refinedstorage2:advanced_processor" });
  event.remove({ output: "refinedstorage2:crafting_monitor", input: "refinedstorage2:improved_processor" });
  event.remove({ output: "refinedstorage2:wireless_grid" });
  event.remove({ output: "refinedstorage2:wireless_fluid_grid" });
  event.remove({ output: "refinedstorage2:wireless_crafting_monitor" });

  // Refined Mechanism, Base = Conductive Mechanism, 1x Deploying Silicon, 1x Deploying Processor Binding, 1x Filling Molten Nether Quartz, 1x Deploying Raw Basic Processor, 1x Deploying Raw Improved Processor, 1x Deploying Quartz Enriched Iron Ingot
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: {
      item: "create:precision_mechanism",
    },
    results: [
      {
        item: "kubejs:refined_mechanism",
      },
    ],
    loops: 1,
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage2:silicon",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:pressing",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage2:raw_basic_processor",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage2:raw_improved_processor",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
      {
        type: "create:deploying",
        ingredients: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
          [
            {
              item: "refinedstorage2:quartz_enriched_iron",
            },
          ],
        ],
        results: [
          {
            item: "kubejs:incomplete_refined_mechanism",
          },
        ],
      },
    ],
    transitionalItem: {
      item: "kubejs:incomplete_refined_mechanism",
    },
  });
  // Redstone + Iron Nugget + Silicon + Processor Binding = Raw Basic Processor
  
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:redstone",
      },
      {
        item: "minecraft:iron_nugget",
      },
      {
        item: "refinedstorage2:silicon",
      },
      {
        item: "refinedstorage2:processor_binding",
      },
    ],
    results: [
      {
        item: "refinedstorage2:raw_basic_processor",
      },
    ],
  });


  // Redstone + Gold Nugget + Silicon + Processor Binding = Raw Improved Processor
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:redstone",
      },
      {
        item: "minecraft:gold_nugget",
      },
      {
        item: "refinedstorage2:silicon",
      },
      {
        item: "refinedstorage2:processor_binding",
      },
    ],
    results: [
      {
        item: "refinedstorage2:raw_improved_processor",
      },
    ],
  });

  // Redstone + Diamond + Silicon + Processor Binding = Raw Advanced Processor
  event.custom({
    type: "create:mixing",
    ingredients: [
      {
        item: "minecraft:redstone",
      },
      {
        item: "minecraft:diamond",
      },
      {
        item: "refinedstorage2:silicon",
      },
      {
        item: "refinedstorage2:processor_binding",
      },
    ],
    results: [
      {
        item: "refinedstorage2:raw_advanced_processor",
      },
    ],
  });

  // Refined Mechanism, Quartz Enriched Iron, Glass, Redstone, Silicon = 1k Storage Part
  event.shaped(Item.of("refinedstorage2:1k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "#forge:glass",
    D: "refinedstorage2:silicon",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, 1k Storage Part, Redstone, Basic Processor = 4k Storage Part
  event.shaped(Item.of("refinedstorage2:4k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "refinedstorage2:1k_storage_part",
    D: "refinedstorage2:basic_processor",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, 4k Storage Part, Redstone, Improved Processor = 16k Storage Part
  event.shaped(Item.of("refinedstorage2:16k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "refinedstorage2:4k_storage_part",
    D: "refinedstorage2:improved_processor",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, 16k Storage Part, Redstone, Advanced Processor = 64k Storage Part
  event.shaped(Item.of("refinedstorage2:64k_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "refinedstorage2:16k_storage_part",
    D: "refinedstorage2:advanced_processor",
    E: "minecraft:redstone",
  });

  // Refined Mechanism, Quartz Enriched Iron, Glass, Bucket, Silicon = 64b Fluid Storage Part
  event.shaped(Item.of("refinedstorage2:64b_fluid_storage_part"), ["ABE", "CDC", "ECA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "#forge:glass",
    D: "minecraft:bucket",
    E: "refinedstorage2:silicon",
  });

  // Refined Mechanism, Quartz Enriched Iron, 64b Fluid Storage Part, Bucket, Basic Processor = 256b Fluid Storage Part
  event.shaped(Item.of("refinedstorage2:256b_fluid_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "refinedstorage2:64b_fluid_storage_part",
    D: "refinedstorage2:basic_processor",
    E: "minecraft:bucket",
  });

  // Refined Mechanism, Quartz Enriched Iron, 256b Fluid Storage Part, Bucket, Improved Processor = 1024b Fluid Storage Part
  event.shaped(Item.of("refinedstorage2:1024b_fluid_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "refinedstorage2:256b_fluid_storage_part",
    D: "refinedstorage2:improved_processor",
    E: "minecraft:bucket",
  });

  // Refined Mechanism, Quartz Enriched Iron, 1024b Fluid Storage Part, Bucket, Advanced Processor = 4096b Fluid Storage Part
  event.shaped(Item.of("refinedstorage2:4096b_fluid_storage_part"), ["ABD", "CEC", "DCA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:quartz_enriched_iron",
    C: "refinedstorage2:1024b_fluid_storage_part",
    D: "refinedstorage2:advanced_processor",
    E: "minecraft:bucket",
  });

  // Quartz Enriched Iron, Chest, Refined Mechanism, Machine Casing, Advanced Processor = Disk Drive
  event.shaped(Item.of("refinedstorage2:disk_drive"), ["ABA", "CDC", "AEA"], {
    A: "refinedstorage2:quartz_enriched_iron",
    B: "minecraft:chest",
    C: "kubejs:refined_mechanism",
    D: "refinedstorage2:machine_casing",
    E: "refinedstorage2:advanced_processor",
  });

  // Basic Processor, Construction Core, Glass, Refined Mechanism, Machine Casing, Destruction Core = Storage Monitor
  event.shaped(Item.of("refinedstorage2:storage_monitor"), ["ABC", "DEC", "AFC"], {
    A: "refinedstorage2:basic_processor",
    B: "refinedstorage2:construction_core",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage2:machine_casing",
    F: "refinedstorage2:destruction_core",
  });

  // Refined Mechanism, Advanced Processor, Silicon, Machine Casing = Controller
  event.shaped(Item.of("refinedstorage2:controller"), ["ABA", "CDC", "ACA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:advanced_processor",
    C: "refinedstorage2:silicon",
    D: "refinedstorage2:machine_casing",
  });

  // Improved Processor, Construction Core, Glass, Refined Mechanism, Machine Casing, Destruction Core = Grid
  event.shaped(Item.of("refinedstorage2:grid"), ["ABC", "DEC", "AFC"], {
    A: "refinedstorage2:improved_processor",
    B: "refinedstorage2:construction_core",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage2:machine_casing",
    F: "refinedstorage2:destruction_core",
  });
/*/
  // Refined Mechanism, Chest, Security Card, Machine Casing = Security Manager
  event.shaped(Item.of("refinedstorage2:security_manager"), ["ABA", "CDC", "ACA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:chest",
    C: "refinedstorage2:security_card",
    D: "refinedstorage2:machine_casing",
  });
*/
  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Machine Casing, Advanced Processor = Wireless Transmitter
  event.shaped(Item.of("refinedstorage2:wireless_transmitter"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage2:quartz_enriched_iron",
    D: "refinedstorage2:machine_casing",
    E: "refinedstorage2:advanced_processor",
  });
/*
  // Refined Mechanism, Storage Housing, Construction Core, Machine Casing, Destruction Core = Disk Manipulator
  event.shaped(Item.of("refinedstorage2:disk_manipulator"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:storage_housing",
    C: "refinedstorage2:construction_core",
    D: "refinedstorage2:machine_casing",
    E: "refinedstorage2:destruction_core",
  });

  // Refined Mechanism, Construction Core, Advanced Processor, Machine Casing, Destruction Core = Crafter
  event.shaped(Item.of("refinedstorage2:crafter"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "refinedstorage2:construction_core",
    C: "refinedstorage2:advanced_processor",
    D: "refinedstorage2:machine_casing",
    E: "refinedstorage2:destruction_core",
  });

  // Advanced Processor, Crafter, Glass, Refined Mechanism, Machine Casing = Crafter Manager
  event.shaped(Item.of("refinedstorage2:crafter_manager"), ["ABC", "DEC", "ABC"], {
    A: "refinedstorage2:advanced_processor",
    B: "#refinedstorage2:crafter",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage2:machine_casing",
  });

  // Improved Processor, Pattern, Glass, Refined Mechanism, Machine Casing = Crafting Monitor
  event.shaped(Item.of("refinedstorage2:crafting_monitor"), ["ABC", "DEC", "ABC"], {
    A: "refinedstorage2:improved_processor",
    B: "refinedstorage2:pattern",
    C: "#forge:glass",
    D: "kubejs:refined_mechanism",
    E: "refinedstorage2:machine_casing",
  });
*/
  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Grid, Advanced Processor = Wireless Grid
  event.shaped(Item.of("refinedstorage2:wireless_grid"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage2:quartz_enriched_iron",
    D: "#refinedstorage2:grid",
    E: "refinedstorage2:advanced_processor",
  });
/*
  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Fluid Grid, Advanced Processor = Wireless Fluid Grid
  event.shaped(Item.of("refinedstorage2:wireless_fluid_grid"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage2:quartz_enriched_iron",
    D: "#refinedstorage2:fluid_grid",
    E: "refinedstorage2:advanced_processor",
  });

  // Refined Mechanism, Ender Pearl, Quartz Enriched Iron, Crafting Grid, Advanced Processor = Wireless Crafting Grid
  event.shaped(Item.of("refinedstorage2:wireless_crafting_monitor"), ["ABA", "CDC", "AEA"], {
    A: "kubejs:refined_mechanism",
    B: "minecraft:ender_pearl",
    C: "refinedstorage2:quartz_enriched_iron",
    D: "#refinedstorage2:crafting_monitor",
    E: "refinedstorage2:advanced_processor",
  });

  // Shaped
  //

  //
  // Shapeless
*/
  // Grid, Refined Mechanism, Crafting Table = Crafting Grid
  event.shapeless(Item.of("refinedstorage2:crafting_grid"), ["refinedstorage2:grid", "kubejs:refined_mechanism", "minecraft:crafting_table"]);

  // Grid, Refined Mechanism, Pattern = Pattern Grid
//  event.shapeless(Item.of("refinedstorage22:pattern_grid"), ["refinedstorage2:grid", "kubejs:refined_mechanism", "refinedstorage2:pattern"]);

  // Grid, Refined Mechanism, Bucket = Fluid Grid
//  event.shapeless(Item.of("refinedstorage2:fluid_grid"), ["refinedstorage2:grid", "kubejs:refined_mechanism", "minecraft:bucket"]);
});
