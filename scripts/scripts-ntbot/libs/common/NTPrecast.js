var _NTP_HaveCTA = -1;

function NTP_DoPrecastCTA()
{
debugPrint("ntp doPrecastcta" );
	if(me.classid == NTC_CHAR_CLASS_BARBARIAN || NTC_InTown())
		return false;

	if(NTP_BOSwitch())
	{
	delay(350);
		NTC_DoCast(155, NTC_HAND_RIGHT); // Battle Command
		NTC_DoCast(149, NTC_HAND_RIGHT); // Battle Orders

		NTC_DoWeaponSwitch()
		delay(350);
		return true;
	}

	return false;
}

function NTP_DoPrecast()
{
debugPrint("ntp doprecast" );
	NTP_DoPrecastCTA();

	switch(me.classid)
	{
	case NTC_CHAR_CLASS_AMAZON:
		NTC_DoCast(32, NTC_HAND_RIGHT); // Valkyrie
		break;

	case NTC_CHAR_CLASS_SORCERESS:
		NTC_DoCast(57, NTC_HAND_RIGHT); // Thunder Storm
		NTC_DoCast(58, NTC_HAND_RIGHT); // Energy Shield

		if(!NTC_DoCast(50, NTC_HAND_RIGHT)) // Shiver Armor
			if(!NTC_DoCast(60, NTC_HAND_RIGHT)) // Chilling Armor
				NTC_DoCast(40, NTC_HAND_RIGHT); // Frozen Armor
		break;

	case NTC_CHAR_CLASS_NECROMANCER:
		NTC_DoCast(68, NTC_HAND_RIGHT); 
		var ironG = NTC_GetUnit(NTC_UNIT_NPC, 291);
		if (!ironG ){ // check for iron golm
			
			if(XP_Golm == 2 && !NTC_GetUnit(NTC_UNIT_NPC, 292))
				NTC_DoCast(94, NTC_HAND_RIGHT) // Fire Golem
			if(XP_Golm == 1 && !NTC_GetUnit(NTC_UNIT_NPC, 290))
				NTC_DoCast(85, NTC_HAND_RIGHT) // Blood Golem
			if(XP_Golm == 0 && !NTC_GetUnit(NTC_UNIT_NPC, 289))
					NTC_DoCast(75, NTC_HAND_RIGHT); // Clay Golem
			break;
		}

	case NTC_CHAR_CLASS_PALADIN:
		NTC_DoCast(117, NTC_HAND_RIGHT); // Holy Shield
		break;

	case NTC_CHAR_CLASS_BARBARIAN:
		NTC_DoCast(155, NTC_HAND_RIGHT); // Battle Command
		NTC_DoCast(149, NTC_HAND_RIGHT); // Battle Orders
		NTC_DoCast(138, NTC_HAND_RIGHT); // Shout
		break;

	case NTC_CHAR_CLASS_DRUID:
		NTC_DoCast(235, NTC_HAND_RIGHT); // Cyclone Armor
		NTC_DoCast(226, NTC_HAND_RIGHT); // Oak Sage
		NTC_DoCast(247, NTC_HAND_RIGHT); // Summon Grizzly
		NTC_DoCast(250, NTC_HAND_RIGHT); // Hurricane
		break;

	case NTC_CHAR_CLASS_ASSASSIN:
		// Can't use both Fade and BoS
		//NTC_DoCast(258, NTC_HAND_RIGHT); // Burst of Speed
		if(NTConfig_CastFade)
			NTC_DoCast(267, NTC_HAND_RIGHT); // Fade
		NTC_DoCast(277, NTC_HAND_RIGHT); // Blade Shield		
		NTC_DoCast(264, NTC_HAND_RIGHT); // Cloak of Shadows
		
		if(!NTP_GetPet(419) && !NTP_GetPet(418)){
			if(NTConfig_CastShadowMaster)
				NTC_DoCast(279, NTC_HAND_RIGHT); // Shadow Master
			if (NTConfig_CastShadowWarrior)
				NTC_DoCast(268, NTC_HAND_RIGHT); // Shadow Warrior
		}
	}
}

function NTP_BOSwitch()
{
debugPrint("ntp boSwitch" );
	if(_NTP_HaveCTA < 0)
	{
		var _weapon;

		_NTP_HaveCTA = 0;

		_weapon = NTC_GetItems();

		if(_weapon)
		{
			for(var i = 0 ; i < _weapon.length ; i++)
			{
				if(_weapon[i].mode == 1)
				{
					if(_weapon[i].bodylocation == 4 || _weapon[i].bodylocation == 5)
					{
						if(_weapon[i].getFlag(0x4000000) && parseInt(_weapon[i].getStat(97, 149)) > 0)
						{
							_NTP_HaveCTA = (me.weaponswitch == 0) ? 1 : 2;
							break;
						}
					}
					else if(_weapon[i].bodylocation == 11 || _weapon[i].bodylocation == 12)
					{
						if(_weapon[i].getFlag(0x4000000) && parseInt(_weapon[i].getStat(97, 149)) > 0)
						{
							_NTP_HaveCTA = (me.weaponswitch == 0) ? 2 : 1;
							break;
						}
					}
				}
			}
		}
	}

	if(_NTP_HaveCTA > 0)
		return NTC_DoWeaponSwitch(_NTP_HaveCTA-1);

	return false;
}
function NTP_UpdatePrecast()
{
debugPrint("ntp UpdatePrecast" );
if(!NTC_InTown()){

	if(_NTP_HaveCTA > 0 && !me.getState(51))
		NTP_DoPrecastCTA();

	if(_NTP_HaveCTA==-1)
		NTP_DoPrecastCTA();
}
	switch(me.classid)
	{
	case NTC_CHAR_CLASS_AMAZON:
		NTC_DoCast(32, NTC_HAND_RIGHT); // Valkyrie
		break;

	case NTC_CHAR_CLASS_SORCERESS:
		if(!me.getState(38))
			NTC_DoCast(57, NTC_HAND_RIGHT); // Thunder Storm
		
		if(!me.getState(30))
			NTC_DoCast(58, NTC_HAND_RIGHT); // Energy Shield

		if(!me.getState(88) && !me.getState(20) && !me.getState(10) ){
		if(!NTC_DoCast(50, NTC_HAND_RIGHT)) // Shiver Armor
			if(!NTC_DoCast(60, NTC_HAND_RIGHT)) // Chilling Armor
				NTC_DoCast(40, NTC_HAND_RIGHT); // Frozen Armor
		}
		break;

	case NTC_CHAR_CLASS_NECROMANCER:
		if(!me.getState(14))
			NTC_DoCast(68, NTC_HAND_RIGHT);
		var ironG = NTC_GetUnit(NTC_UNIT_NPC, 291);
		if (!ironG ){ // check for iron golm
			
			if(XP_Golm == 2 && !NTC_GetUnit(NTC_UNIT_NPC, 292))
				NTC_DoCast(94, NTC_HAND_RIGHT) // Fire Golem
			if(XP_Golm == 1 && !NTC_GetUnit(NTC_UNIT_NPC, 290))
				NTC_DoCast(85, NTC_HAND_RIGHT) // Blood Golem
			if(XP_Golm == 0 && !NTC_GetUnit(NTC_UNIT_NPC, 289))
					NTC_DoCast(75, NTC_HAND_RIGHT); // Clay Golem
			break;
		}
	case NTC_CHAR_CLASS_PALADIN:
		if(!me.getState(101))
			NTC_DoCast(117, NTC_HAND_RIGHT); // Holy Shield
		break;

	case NTC_CHAR_CLASS_BARBARIAN:
		NTC_DoCast(155, NTC_HAND_RIGHT); // Battle Command
		NTC_DoCast(149, NTC_HAND_RIGHT); // Battle Orders
		NTC_DoCast(138, NTC_HAND_RIGHT); // Shout
		break;

	case NTC_CHAR_CLASS_DRUID:
		NTC_DoCast(235, NTC_HAND_RIGHT); // Cyclone Armor
		NTC_DoCast(226, NTC_HAND_RIGHT); // Oak Sage
		NTC_DoCast(247, NTC_HAND_RIGHT); // Summon Grizzly
		NTC_DoCast(250, NTC_HAND_RIGHT); // Hurricane
		break;

	case NTC_CHAR_CLASS_ASSASSIN:
		// Can't use both Fade and BoS
		//NTC_DoCast(258, NTC_HAND_RIGHT); // Burst of Speed
		if(NTConfig_CastFade)
			NTC_DoCast(267, NTC_HAND_RIGHT); // Fade
		NTC_DoCast(277, NTC_HAND_RIGHT); // Blade Shield		
		NTC_DoCast(264, NTC_HAND_RIGHT); // Cloak of Shadows

		if(!NTP_GetPet(419) && !NTP_GetPet(418)){
			if(NTConfig_CastShadowMaster)
				NTC_DoCast(279, NTC_HAND_RIGHT); // Shadow Master
			if (NTConfig_CastShadowWarrior)
				NTC_DoCast(268, NTC_HAND_RIGHT); // Shadow Warrior
		}
	}
	if(!NTC_InTown()){

	if(_NTP_HaveCTA > 0 && !me.getState(51))
		NTP_DoPrecastCTA();

	if(_NTP_HaveCTA==-1)
		NTP_DoPrecastCTA();
	}

}


function NTP_GetPet(classid)
{
	var pet = NTC_GetUnit(NTC_UNIT_MONSTER);
	if (pet)
	{
		do{
			if (pet.classid == classid && pet.mode != 12)
			{
				print("petfound");
				return pet;			
			}		 
		}while(pet.getNext())
	}
	return false;
}


function NTP_DoEnchantAll(force)
{
	var result = true;
	
	if(arguments.length == 0)
		force = false;

	//Set target as any NPC-type units;
	var target = NTC_GetUnit(NTC_UNIT_NPC);
	do
	{
		if(!NTP_DoEnchant(target, force))
			result = false;
	}while(target.getNext());

	//Set target as any Player-type units;
	target = NTC_GetUnit(NTC_UNIT_PLAYER);
	do
	{
		if(!NTP_DoEnchant(target, force))
			result = false;
	}while(target.getNext());

	return result;
}


function NTP_DoEnchant(target, force)
{
	if(arguments.length == 0)
		return false;
	if(arguments.length < 2)
		force = false;
	
	if(target.isEnchanted && !force)
		return true;
		
	var haveEnchant = me.getSkill(52, 1) > 0;
	
	//	TODO : Add support to allow enchanting from item charges in future;
	if(!me.isSorceress || !haveEnchant)
		return false;
	
	//	TODO : Check if getDistance() is really needed here? Should it just rely on getUnit() search distance?
	if(target.isEnchantable && getDistance(me, target) <= 60) {
		// print("Going to enchant " + target.name);
		NTC_DoCast(52, NTC_HAND_RIGHT, target);
		NTC_Delay(400);
		if (target.isEnchanted)	
			NTC_Say(target.name + ' is enchanted.');
		// else print('missed enchantment on '+ target.name);	//alogwe debugging;
	}
	
	//	TODO : Rewrite so function will return true if(NTC_DoCast()) else false;
	return true;
}

