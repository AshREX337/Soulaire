
EntityJSEvents.modifyEntity(event => {
    event.modify("minecraft:zombie", modifyBuilder => {
        // Since zombies extend the PathfinderMob class, a ModifyPathfinderMobBuilder will be provided
        modifyBuilder
    });
});
