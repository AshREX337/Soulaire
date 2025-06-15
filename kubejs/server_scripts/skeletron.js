
// Event to handle old man death and spawn Skeletron at night
EntityEvents.death("terra_entity:old_man", event =>{
    if(event.level.isNight())
    {
        event.level.tell("Now you will face the §4CURSE§r you've wrought upon the land")
        //Add Wait
        event.level.server.scheduleInTicks(40, () => {
            event.level.runCommand("summon terra_entity:skeletron")
        })
    }
    else
    {
        event.level.tell("Why have you slain but a feeble old man...")
    }
})
