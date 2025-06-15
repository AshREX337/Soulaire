PlayerEvents.tick(event => {
    const { player } = event;
    
    // Check if player right-clicked this tick
    if (player.isShiftKeyDown()) return; // Skip if sneaking
    
    // Get the entity the player is looking at
    const hitResult = player.rayTrace(5.0, false);
    
    if (hitResult && hitResult.type === 'entity') {
        const entity = hitResult.entity;
        
        // Check if the entity is a villager
        if (entity.type === 'minecraft:villager') {
            // Check if player right-clicked (interact)
            if (player.getMainHandItem().isEmpty() || !player.isUsingItem()) {
                // Run the dialog command
                player.runCommandSilent('dialog show elder_dialog1');
            }
        }
    }
});