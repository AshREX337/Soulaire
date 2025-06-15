
let Elder = Java.loadClass("net.minecraft.world.entity.npc.Villager")
StartupEvents.registry("entity_type", event => {
    event.createCustom("the_elder", Elder)
        .sized(1, 1)
        .textureResource(entity => {
            return "kubejs:textures/entity/elder.png"
        })
})
