let hasClass = 0;
let hasRemove = 0;
let currentDex = 1;
let holdingNonParryItem = 0;

PlayerEvents.advancement(event => {
    //console.log(event.getAdvancement() == "rpgsmw:assassin_class");
    
    switch(event.getAdvancement())
    {
        case "rpgsmw:assassin_class": 
            event.player.runCommand("aptitudes " + event.player.username + " dexterity add 5");
            event.player.runCommand("aptitudes " + event.player.username + " strength add 5");
            hasClass = 1;
            break;
        case "rpgsmw:paladin_class": 
            event.player.runCommand("aptitudes " + event.player.username + " defense add 5");
            event.player.runCommand("aptitudes " + event.player.username + " constitution add 5");
            hasClass = 2;
            break;
        case "rpgsmw:berserk_class": 
            event.player.runCommand("aptitudes " + event.player.username + " strength add 5");
            event.player.runCommand("aptitudes " + event.player.username + " building add 5");
            hasClass = 3;
            break;
        case "rpgsmw:mage_class": 
            event.player.runCommand("aptitudes " + event.player.username + " magic add 5");
            event.player.runCommand("aptitudes " + event.player.username + " intelligence add 5");
            hasClass = 4;
            break;
        case "rpgsmw:ranger_class": 
            event.player.runCommand("aptitudes " + event.player.username + " dexterity add 5");
            event.player.runCommand("aptitudes " + event.player.username + " luck add 5");
            break;
        default:
            break;
    }
})

PlayerEvents.tick(event => {
    const { server, player, player: { username } } = event

    if(player.isHolding(Item.of('rpgsmw:class_remove_orb')))
    {
        hasRemove = 1;
    }
    else
    {
        hasRemove = 0;
    }

    //Fixes right click items overlapping with parry
    // if(player.age % 5 == 0)
    // {
    //     switch(player.mainHandItem)
    //     {
    //         case Item.of('fishing_rod'):
    //             player.runCommandSilent('attribute ' + username + ' just_parry:enableparry base set 0');
    //             holdingNonParryItem = 1;
    //             break;
    //         default:
    //             if(holdingNonParryItem != 0)
    //             {
    //                 player.runCommandSilent('attribute ' + username + ' just_parry:enableparry base set 1');
    //                 holdingNonParryItem = 0;
    //             }
    //             break;

    //     }
    // }
    

    // if(player.age % 20 == 0 && player.defaultMovementSpeed)
    // {
    //     player.runCommand("setEnergy " + (result + 50) + username);
    //     currentDex = result;
    // }

})

ItemEvents.firstRightClicked(event => {


    if(hasClass > 0 && hasRemove > 0)
    {
        switch(hasClass)
        {
            case 1: 
                event.player.runCommand("aptitudes " + event.player.username + " dexterity subtract 5");
                event.player.runCommand("aptitudes " + event.player.username + " strength subtract 5");
                hasClass = 0;
                break;
            case 2: 
                event.player.runCommand("aptitudes " + event.player.username + " defense subtract 7");
                event.player.runCommand("aptitudes " + event.player.username + " constitution subtract 3");
                hasClass = 0;
                break;
            case 3: 
                event.player.runCommand("aptitudes " + event.player.username + " strength subtract 7");
                event.player.runCommand("aptitudes " + event.player.username + " building subtract 3");
                hasClass = 0;
                break;
            case 4: 
                event.player.runCommand("aptitudes " + event.player.username + " magic subtract 7");
                event.player.runCommand("aptitudes " + event.player.username + " intelligence subtract 3");
                hasClass = 4;
                break;
            case 5: 
                event.player.runCommand("aptitudes " + event.player.username + " dexterity subtract 5");
                event.player.runCommand("aptitudes " + event.player.username + " luck subtract 5");
                hasClass = 0;
                break;
            default:
                break;
        }
    }
    

})
