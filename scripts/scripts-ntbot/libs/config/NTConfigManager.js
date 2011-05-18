var ShowConfigHooks =[];
var ConfigVals =[];
var ChkHooks =[];
var SliderHooks =[];
var SliderConfigVals =[];


function ShowConfig(){
	this.textColor =13;
	var bossList = getBossList();	//populate boss list with valid scripts from 'libs/bots/' folder;
	
	for (var j = 0 ; j < NTConfig_Script.length; j++){
		for (var k = 0 ; k < bossList.length; k++){
			if (NTConfig_Script[j]==bossList[k])
				bossList.remove(k)
		}
	}
	
	this.txtBosses = new TextBox (20,100,100,100," "); this.txtBosses.visible=false;
	this.txtRuns= new TextBox(170,100,100,100," ");	this.txtRuns.visible=false;
	this.cmdAdd = new TextBox(this.txtBosses.x +120,this.txtBosses.y +5,20,20,">");	this.cmdAdd.visible=false;
	this.cmdSub = new TextBox(this.txtBosses.x +120,this.txtBosses.y +25,20,20,"<");	this.cmdSub.visible=false;
	this.cmdDown = new TextBox(this.txtBosses.x +120,this.txtBosses.y +50,20,20,"V");	this.cmdDown.visible=false;
	this.cmdUp = new TextBox(this.txtBosses.x +120,this.txtBosses.y +75,20,20,String.fromCharCode(47,92)); this.cmdUp.visible=false;
	var j =210;	
	this.NTConfig_PublicMode= new CheckBox(20,j ,"Public Mode",NTConfig_PublicMode)	; 	this.NTConfig_PublicMode.boxOnRight=false; 	this.NTConfig_PublicMode.visible=false; 
	
	this.chkSimonEnableSnagging = new CheckBox(20,j + 15,"Simon: Enable Snagging",SimonEnableSnagging)	; 	this.chkSimonEnableSnagging.boxOnRight=false; 	this.chkSimonEnableSnagging.visible=false; 
	this.SimonAutoReveal = new CheckBox(20,j + 30,"Simon: Auto Reveal",SimonAutoReveal)	; 				this.SimonAutoReveal.boxOnRight=false; 			this.SimonAutoReveal.visible=false; 
	this.SimonStopLifeWatch = new CheckBox(20,j + 45,"Simon: Disable Life Watch",SimonStopLifeWatch)	;	this.SimonStopLifeWatch.boxOnRight=false; 		this.SimonStopLifeWatch.visible=false; 
	this.SimonEnableCommands = new CheckBox(20,j + 60,"Simon: Enable Commands",SimonEnableCommands)	; 	this.SimonEnableCommands.boxOnRight=false; 		this.SimonEnableCommands.visible=false; 
	this.NTConfig_ClearPitLevel1 = new CheckBox(20,j + 75,"Pit: Clear lvl 1 ",NTConfig_ClearPitLevel1)	; 	this.NTConfig_ClearPitLevel1.boxOnRight=false; 		this.NTConfig_ClearPitLevel1.visible=false; 
	this.NTConfig_FireEyeExtension = new CheckBox(20,j + 90,"Summoner: Fire Eye Ext ",NTConfig_FireEyeExtension)	; 	this.NTConfig_FireEyeExtension.boxOnRight=false; 		this.NTConfig_FireEyeExtension.visible=false; 
	this.NTConfig_KillFangskin = new CheckBox(20,j + 105,"ClawViper: Kill Fangskin ",NTConfig_KillFangskin)	; 	this.NTConfig_KillFangskin.boxOnRight=false; 		this.NTConfig_KillFangskin.visible=false; 
	this.NTConfig_CouncilExtension = new CheckBox(20,j + 120,"Mephisto: Kill Council ",NTConfig_CouncilExtension)	; 	this.NTConfig_CouncilExtension.boxOnRight=false; 		this.NTConfig_CouncilExtension.visible=false; 
	this.NTConfig_Moattrick = new CheckBox(20,j + 135,"Mephisto: Moattrick ",NTConfig_Moattrick)	; 	this.NTConfig_Moattrick.boxOnRight=false; 		this.NTConfig_Moattrick.visible=false; 
	this.NTConfig_NihlathakExtension = new CheckBox(20,j + 150,"Pindleskin: NihlathakExtension ",NTConfig_NihlathakExtension)	; 	this.NTConfig_NihlathakExtension.boxOnRight=false; 		this.NTConfig_NihlathakExtension.visible=false; 
	this.NTConfig_PindleskinExtension = new CheckBox(20,j + 165,"Nihlathak: PindleskinExtension ",NTConfig_PindleskinExtension)	; 	this.NTConfig_PindleskinExtension.boxOnRight=false; 		this.NTConfig_PindleskinExtension.visible=false; 
	this.NTConfig_ShenkExtension = new CheckBox(20,j + 180,"Eldritch: Shenk Ext ",NTConfig_ShenkExtension)	; 	this.NTConfig_ShenkExtension.boxOnRight=false; 		this.NTConfig_ShenkExtension.visible=false; 
	this.NTConfig_DacFarrenExtension = new CheckBox(20,j + 195,"Eldritch: DacFarren Ext ",NTConfig_DacFarrenExtension)	; 	this.NTConfig_DacFarrenExtension.boxOnRight=false; 		this.NTConfig_DacFarrenExtension.visible=false; 
	this.NTConfig_WSK2Extension = new CheckBox(20,j + 210,"WSK2 Ext ",NTConfig_WSK2Extension)	; 	this.NTConfig_WSK2Extension.boxOnRight=false; 		this.NTConfig_WSK2Extension.visible=false; 
	this.NTConfig_WSK3Extension = new CheckBox(20,j + 225,"WSK3 Ext ",NTConfig_WSK3Extension)	; 	this.NTConfig_WSK3Extension.boxOnRight=false; 		this.NTConfig_WSK3Extension.visible=false; 
	this.NTConfig_KillBaal = new CheckBox(20,j + 240,"Baal: Kill Baal ",NTConfig_KillBaal)	; 	this.NTConfig_KillBaal.boxOnRight=false; 		this.NTConfig_KillBaal.visible=false;
	
	ChkHooks =[this.NTConfig_PublicMode,this.chkSimonEnableSnagging,this.SimonAutoReveal,this.SimonAutoReveal,this.SimonStopLifeWatch ,this.SimonEnableCommands ,this.NTConfig_ClearPitLevel1 ,this.NTConfig_FireEyeExtension,this.NTConfig_KillFangskin,this.NTConfig_CouncilExtension,this.NTConfig_Moattrick,this.NTConfig_NihlathakExtension,this.NTConfig_PindleskinExtension,this.NTConfig_ShenkExtension,this.NTConfig_DacFarrenExtension,this.NTConfig_WSK2Extension,this.NTConfig_WSK3Extension,this.NTConfig_KillBaal]
	this.NTConfig_RuinedExtension = new CheckBox(20,j + 255,"Ruined Ext ",NTConfig_RuinedExtension)	; 	this.NTConfig_RuinedExtension.boxOnRight=false; 		this.NTConfig_RuinedExtension.visible=false; ChkHooks.push(this.NTConfig_RuinedExtension);
	this.NTConfig_DisusedExtension = new CheckBox(20,j + 270,"Disused Ext ",NTConfig_DisusedExtension)	; 	this.NTConfig_DisusedExtension.boxOnRight=false; 		this.NTConfig_DisusedExtension.visible=false; ChkHooks.push(this.NTConfig_DisusedExtension);
	this.NTConfig_GambleIt = new CheckBox(20,j+285,"Gamble ",NTConfig_GambleIt)	; 	this.NTConfig_GambleIt.boxOnRight=false; 		this.NTConfig_GambleIt.visible=false; ChkHooks.push(this.NTConfig_GambleIt);
	
	this.NTConfig_UseMerc = new CheckBox(300, 360,"Use Merc ",NTConfig_UseMerc)	; 	this.NTConfig_UseMerc.boxOnRight=false; 		this.NTConfig_UseMerc.visible=false; ChkHooks.push(this.NTConfig_UseMerc) ;
	this.NT_PickUtility = new CheckBox(300, 375,"Pick Utility ",NT_PickUtility)	; 	this.NT_PickUtility.boxOnRight=false; 		this.NT_PickUtility.visible=false; ChkHooks.push(this.NT_PickUtility);
	this.FastSnag = new CheckBox(300, 390,"Fast Snag ",FastSnag)	; 	this.FastSnag.boxOnRight=false; 		this.FastSnag.visible=false; ChkHooks.push(this.FastSnag);
	this.NTConfig_SkipHealCurses = new CheckBox(300, 405,"Skip Heal to Remove Curse ",NTConfig_SkipHealCurses)	; 	this.NTConfig_SkipHealCurses.boxOnRight=false; 		this.NTConfig_SkipHealCurses.visible=false; ChkHooks.push(this.NTConfig_SkipHealCurses);
	this.NTConfig_OpenChest = new CheckBox(300, 420,"Open Chest ",NTConfig_OpenChest)	; 	this.NTConfig_OpenChest.boxOnRight=false; 		this.NTConfig_OpenChest.visible=false; ChkHooks.push(this.NTConfig_OpenChest);
	this.NTConfig_ClearPosition = new CheckBox(300, 435,"Clear Position ",NTConfig_ClearPosition)	; 	this.NTConfig_ClearPosition.boxOnRight=false; 		this.NTConfig_ClearPosition.visible=false; ChkHooks.push(this.NTConfig_ClearPosition);
	this.NTConfig_CheckSafe = new CheckBox(300, 450,"Safe Check ",NTConfig_CheckSafe)	; 	this.NTConfig_CheckSafe.boxOnRight=false; 		this.NTConfig_CheckSafe.visible=false; ChkHooks.push(this.NTConfig_CheckSafe);
	
	this.NTConfig_LifeThresh = new SliderWText (300, 100,"Drink Hp pot at",100,NTConfig_LifeThresh,this.textColor,4) ;SliderHooks.push(this.NTConfig_LifeThresh);
	this.NTConfig_LifeRejuvThresh = new SliderWText (300, 130,"Drink rejuve for HP at",100,NTConfig_LifeRejuvThresh,this.textColor,4);SliderHooks.push(this.NTConfig_LifeRejuvThresh);
	this.NTConfig_ManaThresh = new SliderWText (300, 160,"Drink Mana pot at",100,NTConfig_ManaThresh,this.textColor,4) ;SliderHooks.push(this.NTConfig_ManaThresh);
	this.NTConfig_ManaRejuvThresh = new SliderWText (300, 190,"Drink rejuve for mana at",100,NTConfig_ManaRejuvThresh,this.textColor,4) ;SliderHooks.push(this.NTConfig_ManaRejuvThresh);
	this.NTConfig_LifeChicken = new SliderWText (300, 220,"Chicken when Life is",100,NTConfig_LifeChicken,this.textColor,4) ;SliderHooks.push(this.NTConfig_LifeChicken);
	this.NTConfig_ManaChicken = new SliderWText (300, 250,"Chiken when Mana is",100,NTConfig_ManaChicken,this.textColor,4) ;SliderHooks.push(this.NTConfig_ManaChicken);
	this.NTConfig_MercLifeThresh = new SliderWText (300, 280,"Merc Hp Pot at",100,NTConfig_MercLifeThresh,this.textColor,4) ;SliderHooks.push(this.NTConfig_MercLifeThresh);
	this.NTConfig_MercRejuvThresh = new SliderWText (300, 310,"Merc Rejuve at",100,NTConfig_MercRejuvThresh,this.textColor,4) ;SliderHooks.push(this.NTConfig_MercRejuvThresh);
	this.NTConfig_MercChicken = new SliderWText (300, 340,"Chicken when Merc is",100,NTConfig_MercChicken,this.textColor,4) ;SliderHooks.push(this.NTConfig_MercChicken);
	SliderConfigVals=[NTConfig_LifeThresh,NTConfig_LifeRejuvThresh,NTConfig_ManaThresh,NTConfig_ManaRejuvThresh,NTConfig_LifeChicken,NTConfig_ManaChicken,NTConfig_MercLifeThresh,NTConfig_MercRejuvThresh,NTConfig_MercChicken];
	this.mySkills =["Nothing"];
	ShowConfigHooks=[this.txtBosses,this.cmdAdd,this.cmdDown,this.cmdUp,this.cmdSub,this.txtRuns]
	var usableSkills =[5,6,7,8,10,11,12,14,15,16,17,19,20,21,22,24,25,26,27,28,30,31,32,34,35,36,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,64,66,67,68,70,71,72,73,74,75,76,77,78,80,81,82,83,84,85,86,87,88,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,130,131,132,133,134,135,137,138,139,140 ,142,143,144,146,147,149,150,151,152,154,155,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250, 251,253,254,255,256,257,258,259,260,261,262,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281]
	for (var j = usableSkills.length-1; j >0; j =j -1)
		if (me.getSkill(usableSkills[j],1) >0)
			this.mySkills.push(getSkillById(usableSkills[j]))
	if (me.classid == 1){ //sorc
		this.NTConfig_AttackSkill0 = new DropDownBox(500, 100,myGetSkillByID(NTConfig_AttackSkill[0]),13,1,this.mySkills,"Cast First");
		this.NTConfig_AttackSkill1 = new DropDownBox(500, 140,myGetSkillByID(NTConfig_AttackSkill[1]),13,1,this.mySkills,"Primary Boss");
		this.NTConfig_AttackSkill2 = new DropDownBox(500, 180,myGetSkillByID(NTConfig_AttackSkill[2]),13,1,this.mySkills,"Primary For Others");
		this.NTConfig_AttackSkill3 = new DropDownBox(500, 220,myGetSkillByID(NTConfig_AttackSkill[3]),13,1,this.mySkills,"Primary Untimed");
		this.NTConfig_AttackSkill4 = new DropDownBox(500, 260,myGetSkillByID(NTConfig_AttackSkill[4]),13,1,this.mySkills,"Secondary");
		this.NTConfig_AttackSkill5 = new DropDownBox(500, 300,myGetSkillByID(NTConfig_AttackSkill[5]),13,1,this.mySkills,"Secondary Untimed");
		this.NTConfig_CastStatic = new SliderWText (500, 340,"Cast Static ",100,NTConfig_CastStatic,this.textColor,4) ;
	}
	if (me.classid == 2){ // Necro
		this.NTConfig_AttackBoss = new DropDownBox(500, 100,myGetSkillByID(NTConfig_AttackBoss),13,1,this.mySkills,"Boss Skill");ChkHooks.push(this.NTConfig_AttackBoss);
		this.NTConfig_AttackOthers = new DropDownBox(500, 140,myGetSkillByID(NTConfig_AttackOthers),13,1,this.mySkills,"Primary For Others");ChkHooks.push(this.NTConfig_AttackOthers);
		this.XP_Curse = new DropDownBox(500, 180,myGetSkillByID(XP_Curse),13,1,this.mySkills,"Curse after Army is Made");ChkHooks.push(this.XP_Curse);
		this.XP_BuildArmyCurse = new DropDownBox(500, 220,myGetSkillByID(XP_BuildArmyCurse),13,1,this.mySkills,"Curse to Build Army");ChkHooks.push(this.XP_BuildArmyCurse);
		this.XP_Golm = new SliderWText (500, 245,"0=clay 1=blood, 2=fire, 3=iron",3,XP_Golm,this.textColor,4) ;ChkHooks.push(this.XP_Golm);
		this.XP_BuildArmyThresh = new SliderWText (500, 275,"Build Army Threshold",20,XP_BuildArmyThresh,this.textColor,4) ;ChkHooks.push(this.XP_BuildArmyThresh);
		this.XP_useSkel = new CheckBox(500, 295,"Make Skeletons ",XP_useSkel)	; 	this.XP_useSkel.boxOnRight=false; 		this.XP_useSkel.visible=false; ChkHooks.push(this.XP_useSkel);
		this.XP_useSkelMage = new CheckBox(500, 310,"Make Mages ",XP_useSkelMage)	; 	this.XP_useSkelMage.boxOnRight=false; 		this.XP_useSkelMage.visible=false; ChkHooks.push(this.XP_useSkelMage);
		this.XP_useRevive = new CheckBox(500, 325,"Make Revives ",XP_useRevive)	; 	this.XP_useRevive.boxOnRight=false; 		this.XP_useRevive.visible=false; ChkHooks.push(this.XP_useRevive);
		this.XP_CorpseExplosion = new CheckBox(500, 340,"Use Corpse Explosion",XP_CorpseExplosion)	; 	this.XP_CorpseExplosion.boxOnRight=false; 		this.XP_CorpseExplosion.visible=false; ChkHooks.push(this.XP_CorpseExplosion);		
	}	
	if (me.classid == 3){ // Pally
		this.NTConfig_AttackFirst = new DropDownBox(500, 100,myGetSkillByID(NTConfig_AttackFirst),13,1,this.mySkills,"Cast First"); ChkHooks.push(this.NTConfig_AttackFirst);
		this.NTConfig_AttackBoss = new DropDownBox(500, 140,myGetSkillByID(NTConfig_AttackBoss),13,1,this.mySkills,"Boss Skill");ChkHooks.push(this.NTConfig_AttackBoss);
		this.NTConfig_AttackOthers = new DropDownBox(500, 180,myGetSkillByID(NTConfig_AttackOthers),13,1,this.mySkills,"Primary For Others");ChkHooks.push(this.NTConfig_AttackOthers);
		this.NTConfig_AttackSecondary = new DropDownBox(500, 220,myGetSkillByID(NTConfig_AttackSecondary),13,1,this.mySkills,"Secondary For Immunes");ChkHooks.push(this.NTConfig_AttackSecondary);
		this.NTConfig_PutAura = new DropDownBox(500, 260,myGetSkillByID(NTConfig_PutAura),13,1,this.mySkills,"Attack Aura");ChkHooks.push(this.NTConfig_PutAura);
		this.NTConfig_UseRedemption = new CheckBox(500, 275,"Use Redemption ",NTConfig_UseRedemption)	; 	this.NTConfig_UseRedemption.boxOnRight=false; 		this.NTConfig_UseRedemption.visible=false; ChkHooks.push(this.NTConfig_UseRedemption);
	}
	if (me.classid == 5){ //Druid
		this.NTConfig_AttackSkill0 = new DropDownBox(500, 100,myGetSkillByID(NTConfig_AttackSkill[0]),13,1,this.mySkills,"Cast First");ChkHooks.push(this.NTConfig_AttackSkill0);
		this.NTConfig_AttackSkill1 = new DropDownBox(500, 140,myGetSkillByID(NTConfig_AttackSkill[1]),13,1,this.mySkills,"Primary Boss");ChkHooks.push(this.NTConfig_AttackSkill1);
		this.NTConfig_AttackSkill2 = new DropDownBox(500, 180,myGetSkillByID(NTConfig_AttackSkill[2]),13,1,this.mySkills,"Primary For Others");ChkHooks.push(this.NTConfig_AttackSkill2);
		this.NTConfig_AttackSkill3 = new DropDownBox(500, 220,myGetSkillByID(NTConfig_AttackSkill[3]),13,1,this.mySkills,"Primary Untimed");ChkHooks.push(this.NTConfig_AttackSkill3);
		this.NTConfig_AttackSkill4 = new DropDownBox(500, 260,myGetSkillByID(NTConfig_AttackSkill[4]),13,1,this.mySkills,"Secondary");ChkHooks.push(this.NTConfig_AttackSkill4);
		this.NTConfig_AttackSkill5 = new DropDownBox(500, 300,myGetSkillByID(NTConfig_AttackSkill[5]),13,1,this.mySkills,"Secondary Untimed");ChkHooks.push(this.NTConfig_AttackSkill5);		
	}
	if (me.classid == 6){ //sin
		this.NTConfig_AttackSkill0 = new DropDownBox(500, 100,myGetSkillByID(NTConfig_AttackSkill[0]),13,1,this.mySkills,"Cast First");
		this.NTConfig_AttackSkill1 = new DropDownBox(500, 140,myGetSkillByID(NTConfig_AttackSkill[1]),13,1,this.mySkills,"Primary Boss");
		this.NTConfig_AttackSkill2 = new DropDownBox(500, 180,myGetSkillByID(NTConfig_AttackSkill[2]),13,1,this.mySkills,"Primary For Others");
		this.NTConfig_AttackSkill3 = new DropDownBox(500, 220,myGetSkillByID(NTConfig_AttackSkill[3]),13,1,this.mySkills,"Primary Untimed");
		this.NTConfig_AttackSkill4 = new DropDownBox(500, 260,myGetSkillByID(NTConfig_AttackSkill[4]),13,1,this.mySkills,"Secondary");
		this.NTConfig_AttackSkill5 = new DropDownBox(500, 300,myGetSkillByID(NTConfig_AttackSkill[5]),13,1,this.mySkills,"Secondary Untimed");
		this.NTConfig_UseTraps = new CheckBox(500, 340,"Use Traps",NTConfig_UseTraps)	; 	this.NTConfig_UseTraps.boxOnRight=false; 		this.NTConfig_UseTraps.visible=false; ChkHooks.push(this.NTConfig_UseTraps);
		this.NTConfig_CastShadowMaster = new CheckBox(500, 355,"Safe Check ",NTConfig_CastShadowMaster)	; 	this.NTConfig_CastShadowMaster.boxOnRight=false; 		this.NTConfig_CastShadowMaster.visible=false; ChkHooks.push(this.NTConfig_CastShadowMaster);
		this.NTConfig_CastShadowWarrior = new CheckBox(500, 370,"Use Shadow Master ",NTConfig_CastShadowWarrior)	; 	this.NTConfig_CastShadowWarrior.boxOnRight=false; 		this.NTConfig_CastShadowWarrior.visible=false; ChkHooks.push(this.NTConfig_CastShadowWarrior);
		this.NTConfig_CastBrustOfSpeed = new CheckBox(500, 385,"Use Burst Of Speed ",NTConfig_CastBrustOfSpeed)	; 	this.NTConfig_CastBrustOfSpeed.boxOnRight=false; 		this.NTConfig_CastBrustOfSpeed.visible=false; ChkHooks.push(this.NTConfig_CastBrustOfSpeed);
		this.NTConfig_CastFade = new CheckBox(500, 400,"Cast Fade ",NTConfig_CastFade)	; 	this.NTConfig_CastFade.boxOnRight=false; 		this.NTConfig_CastFade.visible=false; ChkHooks.push(this.NTConfig_CastFade);
		this.NTConfig_CastBladeShield = new CheckBox(500, 415,"Cast Blade Sheild ",NTConfig_CastBladeShield)	; 	this.NTConfig_CastBladeShield.boxOnRight=false; 		this.NTConfig_CastBladeShield.visible=false; ChkHooks.push(this.NTConfig_CastBladeShield);
		this.NTConfig_CastCloakOfShadows = new CheckBox(500, 430,"Cast Cloak of Shadows ",NTConfig_CastCloakOfShadows)	; 	this.NTConfig_CastCloakOfShadows.boxOnRight=false; 		this.NTConfig_CastCloakOfShadows.visible=false; ChkHooks.push(this.NTConfig_CastCloakOfShadows);
	}
	
	//this.test = new DropDownBox(600, 100,"Test",13,1,this.mySkills);
	
	for (var j = 0 ; j < SliderHooks.length; j ++){	
		SliderHooks[j].visible=false;		
	}
	var cmdOffset = (me.screensize == 2) ?500 : 30;
		
	
	
	this.cmdExit = new TextBox(450,cmdOffset,130,40," Exit");	this.cmdExit.visible=false; this.cmdExit.font =3;
	this.cmdExit.parent = this; ShowConfigHooks.push(this.cmdExit) ;this.cmdExit.ShowOutline = false;
	this.cmdExit.clickFunction = function(){		
		this.parent.setVisible(false)		
	}
	
	this.cmdSave = new TextBox(200,cmdOffset,130,40," Save");	this.cmdSave.visible=false; this.cmdSave.font =3;
	this.cmdSave.parent = this; ShowConfigHooks.push(this.cmdSave) ;this.cmdSave.ShowOutline = false;
//Save vars to config ////////////////////////////
	this.cmdSave.clickFunction = function(){		
		this.parent.saveVars()
		SaveConfig();
		this.parent.setVisible(false)
	}
	
		this.txtBosses.listboxMode = true;
		this.txtBosses.textLines=bossList; this.txtBosses.selectedRow=0; this.txtBosses.selectedText=this.txtBosses.textLines[this.txtBosses.selectedRow];
	
		this.txtRuns.listboxMode=true;	
		this.txtRuns.textLines=NTConfig_Script; this.txtRuns.selectedRow = 0; this.txtRuns.selectedText=this.txtRuns.textLines[this.txtRuns.selectedRow];
	
		this.cmdAdd.selectedColor =this.cmdAdd.textColor; this.cmdAdd.font = 5; this.cmdAdd.selectedRow=this.cmdAdd.textLines[0];
		this.cmdAdd.parent = this.txtRuns; this.cmdAdd.child = this.txtBosses;
		this.cmdAdd.clickFunction = function() {	
		if (this.child.selectedText){
			NTConfig_Script.push(this.child.selectedText)
			this.parent.textLines=NTConfig_Script;
			this.child.deleteSelectedRow()			
		}	
	};	
	 this.cmdSub.selectedColor =this.cmdSub.textColor;this.cmdSub.font = 5; this.cmdSub.selectedRow=this.cmdSub.textLines[0];
	 this.cmdSub.parent = this.txtRuns; this.cmdSub.child = this.txtBosses;
	this.cmdSub.clickFunction = function() {	
		if (this.parent.selectedText){			
			this.parent.deleteSelectedRow()			
		}
		bossList = getBossList();	//populate boss list with valid scripts from 'libs/bots/' folder;
		for (var j = 0 ; j < NTConfig_Script.length; j++){
			for (var k = 0 ; k < bossList.length; k++){
				if (NTConfig_Script[j]==bossList[k])
					bossList.remove(k)
			}			
		}
		this.child.textLines=bossList;
	};
	
		 this.cmdDown.selectedColor =this.cmdDown.textColor;this.cmdDown.font = 5;
		 this.cmdDown.parent = this.txtRuns; 
		 this.cmdDown.clickFunction = function() {	
				this.parent.moveSelectedRow(1);	
		};		 
	
		 this.cmdUp.selectedColor =this.cmdUp.textColor;this.cmdUp.font = 5;
		 this.cmdUp.parent = this.txtRuns;
		 this.cmdUp.clickFunction =function(){
			this.parent.moveSelectedRow(-1);		 
		 };
		 
	for (var j = 0 ; j < ChkHooks.length; j ++){	
		ChkHooks[j].textColor=this.textColor;		
	}	
}


ShowConfig.prototype.setVisible = function (vis) {
	for (var j = 0 ; j < ShowConfigHooks.length; j ++){	
		ShowConfigHooks[j].visible=vis;
	}	
	for (var j = 0 ; j < ChkHooks.length; j ++){	
		ChkHooks[j].visible=vis;		
	}
	for (var j = 0 ; j < SliderHooks.length; j ++){	
		SliderHooks[j].visible=vis;		
	}
	if (me.classid == 1){
		this.NTConfig_AttackSkill0.visible=vis;
		this.NTConfig_AttackSkill1.visible=vis;
		this.NTConfig_AttackSkill2.visible=vis;
		this.NTConfig_AttackSkill3.visible=vis;
		this.NTConfig_AttackSkill4.visible=vis;
		this.NTConfig_AttackSkill5.visible=vis;
		this.NTConfig_CastStatic.visible=vis;
	}	
	if (me.classid == 6){
			this.NTConfig_AttackSkill0.visible=vis;
			this.NTConfig_AttackSkill1.visible=vis;
			this.NTConfig_AttackSkill2.visible=vis;
			this.NTConfig_AttackSkill3.visible=vis;
			this.NTConfig_AttackSkill4.visible=vis;
			this.NTConfig_AttackSkill5.visible=vis;				
	}
}
ShowConfig.prototype.saveVars = function () {
	NTConfig_PublicMode=this.NTConfig_PublicMode.checked;
	SimonEnableSnagging=this.chkSimonEnableSnagging.checked;
	SimonAutoReveal=this.SimonAutoReveal.checked;
	SimonStopLifeWatch=this.SimonStopLifeWatch.checked;
	SimonEnableCommands=this.SimonEnableCommands.checked;
	NTConfig_ClearPitLevel1=this.NTConfig_ClearPitLevel1.checked;
	NTConfig_FireEyeExtension=this.NTConfig_FireEyeExtension.checked;
	NTConfig_KillFangskin=this.NTConfig_KillFangskin.checked;
	NTConfig_CouncilExtension=this.NTConfig_CouncilExtension.checked; 
	NTConfig_Moattrick=this.NTConfig_Moattrick.checked;
	NTConfig_NihlathakExtension=this.NTConfig_NihlathakExtension.checked;
	NTConfig_PindleskinExtension=this.NTConfig_PindleskinExtension.checked; 
	NTConfig_ShenkExtension=this.NTConfig_ShenkExtension.checked;
	NTConfig_DacFarrenExtension=this.NTConfig_DacFarrenExtension.checked;
	NTConfig_WSK2Extension=this.NTConfig_WSK2Extension.checked;
	NTConfig_WSK3Extension=this.NTConfig_WSK3Extension.checked;
	NTConfig_KillBaal=this.NTConfig_KillBaal.checked;	
	NTConfig_UseMerc= this.NTConfig_UseMerc.checked;
	NT_PickUtility=this.NT_PickUtility.checked;
	FastSnag=this.FastSnag.checked;
	NTConfig_SkipHealCurses=this.NTConfig_SkipHealCurses.checked;
	NTConfig_OpenChest=this.NTConfig_OpenChest.checked;
	NTConfig_ClearPosition=this.NTConfig_ClearPosition.checked;
	NTConfig_CheckSafe=this.NTConfig_CheckSafe.checked;
	NTConfig_GambleIt=this.NTConfig_GambleIt.checked;
	//Sliders
	NTConfig_LifeThresh = this.NTConfig_LifeThresh.value;	
	NTConfig_LifeRejuvThresh = this.NTConfig_LifeRejuvThresh.value;
	NTConfig_ManaThresh=this.NTConfig_ManaThresh.value;
	NTConfig_ManaRejuvThresh=this.NTConfig_ManaRejuvThresh.value;
	NTConfig_LifeChicken=this.NTConfig_LifeChicken.value;
	NTConfig_ManaChicken=this.NTConfig_ManaChicken.value;
	NTConfig_MercLifeThresh=this.NTConfig_MercLifeThresh.value;
	NTConfig_MercRejuvThresh=this.NTConfig_MercRejuvThresh.value;
	NTConfig_MercChicken=this.NTConfig_MercChicken.value;
	// char secific
		if (me.classid == 1){	//sorc		
			NTConfig_AttackSkill[0]= myGetSkillByName (this.NTConfig_AttackSkill0.topText.text);
			NTConfig_AttackSkill[1]= myGetSkillByName (this.NTConfig_AttackSkill1.topText.text);
			NTConfig_AttackSkill[2]= myGetSkillByName (this.NTConfig_AttackSkill2.topText.text);
			NTConfig_AttackSkill[3]= myGetSkillByName (this.NTConfig_AttackSkill3.topText.text);
			NTConfig_AttackSkill[4]= myGetSkillByName (this.NTConfig_AttackSkill4.topText.text);
			NTConfig_AttackSkill[5]= myGetSkillByName (this.NTConfig_AttackSkill5.topText.text);			
			NTConfig_CastStatic = this.NTConfig_CastStatic.value;
		}
		if (me.classid == 2){ // Necro
			NTConfig_AttackBoss= myGetSkillByName (this.NTConfig_AttackBoss.topText.text);
			NTConfig_AttackOthers= myGetSkillByName (this.NTConfig_AttackOthers.topText.text);
			XP_Curse=this.XP_Curse =myGetSkillByName (this.XP_Curse.topText.text);
			XP_BuildArmyCurse= myGetSkillByName (this.XP_BuildArmyCurse.topText.text);
			XP_Golm=this.XP_Golm.value;
			XP_BuildArmyThresh=this.XP_BuildArmyThresh.value;
			XP_useSkel=this.XP_useSkel.checked;
			XP_useSkelMage=this.XP_useSkelMage.checked;
			XP_useRevive=this.XP_useRevive.checked;
			XP_CorpseExplosion=this.XP_CorpseExplosion.checked;		
		}	
		if (me.classid == 3){ // Pally
			NTConfig_AttackFirst= myGetSkillByName (this.NTConfig_AttackFirst.topText.text);
			NTConfig_AttackBoss= myGetSkillByName (this.NTConfig_AttackBoss.topText.text);
			NTConfig_AttackOthers= myGetSkillByName (this.NTConfig_AttackOthers.topText.text);
			NTConfig_AttackSecondary= myGetSkillByName (this.NTConfig_AttackSecondary.topText.text);
			NTConfig_PutAura= myGetSkillByName (this.NTConfig_PutAura.topText.text);		
			NTConfig_UseRedemption=this.NTConfig_UseRedemption.checked;
		}
		if (me.classid == 6){ //sin
			NTConfig_AttackSkill[0]= myGetSkillByName (this.NTConfig_AttackSkill0.topText.text);
			NTConfig_AttackSkill[1]= myGetSkillByName (this.NTConfig_AttackSkill1.topText.text);
			NTConfig_AttackSkill[2]= myGetSkillByName (this.NTConfig_AttackSkill2.topText.text);
			NTConfig_AttackSkill[3]= myGetSkillByName (this.NTConfig_AttackSkill3.topText.text);
			NTConfig_AttackSkill[4]= myGetSkillByName (this.NTConfig_AttackSkill4.topText.text);
			NTConfig_AttackSkill[5]= myGetSkillByName (this.NTConfig_AttackSkill5.topText.text);			
			
			NTConfig_UseTraps= this.NTConfig_UseTraps.checked;
			NTConfig_CastShadowMaster=this.NTConfig_CastShadowMaster.checked;
			NTConfig_CastShadowWarrior=this.NTConfig_CastShadowWarrior.checked;
			NTConfig_CastBrustOfSpeed=this.NTConfig_CastBrustOfSpeed.checked;
			NTConfig_CastFade=this.NTConfig_CastFade.checked;
			NTConfig_CastBladeShield=this.NTConfig_CastBladeShield.checked;
			NTConfig_CastCloakOfShadows=this.NTConfig_CastCloakOfShadows.checked;
	}
}
function SaveConfig(){
print("Saving Config")

	var configVersion = 2.1;
	var filehandle = File.open('libs/config/NTConfig_'+NTC_CharClassToNameList[me.classid]+"_"+me.name+".dbl", 2);
	var linecount = 0;
	var templine ="";
	var content = '//Universal Config v'+ configVersion;	
	var firstline =filehandle.readLine();  
		if (firstline != content){
		//print(firstline +"!="+content)
			filehandle.close();
			filehandle = File.open("libs/config/NTConfig_Any.dbl", 2);
			firstline =filehandle.readLine();  
		}
	content= content+"\n"	
	while(!filehandle.eof) {
		templine = filehandle.readLine(); 
	
		content += updateConfigLine(templine) +"\n" ;
		
	}
	filehandle.close();
	
	 FileTools.writeText('libs/config/NTConfig_'+NTC_CharClassToNameList[me.classid]+"_"+me.name+".dbl", content); 
  
   return true;

}
function updateConfigLine(line){
 
	var linePrefix = "\t";
 
	if(line.indexOf("NT_logItems")>-1){	
		return linePrefix +"NT_logItems = "+ NT_logItems +";  // enable logging" ;
	}
	if(line.indexOf("NT_LoggingMaxLines")>-1)
		return linePrefix +"NT_LoggingMaxLines = "+ NT_LoggingMaxLines +";" ;
	if(line.indexOf("bobDebug")>-1)
		return linePrefix +"bobDebug = "+ bobDebug +"; //debugs to oog" ;
	if(line.indexOf("NTConfig_PublicMode")>-1)
		return linePrefix +"NTConfig_PublicMode = "+ NTConfig_PublicMode +"; " ;
	if(line.indexOf("NTConfig_Script =")>-1)
		return linePrefix +"NTConfig_Script = "+ NTConfig_Script.toSource() +"; "
	if(line.indexOf("NTConfig_NIPFilePath =")>-1)
		return linePrefix +"NTConfig_NIPFilePath ="+ NTConfig_NIPFilePath.toSource() +"; "	
		
	if(line.indexOf("NT_Leader =")>-1)
		return linePrefix +"NT_Leader = "+ NT_Leader.toSource() +"; //Add all the leader character names you may follow here in the given format" ;	
	if(line.indexOf("SimonAutoReveal")>-1)
		return linePrefix +"SimonAutoReveal = "+ SimonAutoReveal +"; " ;
	if(line.indexOf("SimonEnableSnagging")>-1)
		return linePrefix +"SimonEnableSnagging = "+ SimonEnableSnagging +"; " ;
	if(line.indexOf("SimonStopLifeWatch")>-1)
		return linePrefix +"SimonStopLifeWatch = "+ SimonStopLifeWatch +"; " ;
	if(line.indexOf("SimonEnableCommands")>-1)
		return linePrefix +"SimonEnableCommands = "+ SimonEnableCommands +"; " ;
	if(line.indexOf("NT_PickUtility")>-1)
		return linePrefix +"NT_PickUtility = "+ NT_PickUtility +"; // tries to fill belt and tombs with pickit" ;	
	if(line.indexOf("FastSnag")>-1)
		return linePrefix +"FastSnag = "+ FastSnag +"; // picks after each attack. based on itemdrop event" ;	
	if(line.indexOf("NTConfig_SkipHealLife")>-1)
		return linePrefix +"NTConfig_SkipHealLife = "+ NTConfig_SkipHealLife +"; // If you have more than this percent of life, you won't go to a healer" ;	
	if(line.indexOf("NTConfig_SkipHealMana")>-1)
		return linePrefix +"NTConfig_SkipHealMana = "+ NTConfig_SkipHealMana +"; // If you have more than this percent of mana, you won't go to a healer" ;
	if(line.indexOf("NTConfig_SkipHealCurses")>-1)
		return linePrefix +"NTConfig_SkipHealCurses = "+ NTConfig_SkipHealCurses +"; // If you want to skip curses, set to true" ;
	if(line.indexOf("NTConfig_UseMerc")>-1)
		return linePrefix +"NTConfig_UseMerc = "+ NTConfig_UseMerc +"; // Set to true if you use a mercenary, will revive merc at a reviver npc." ;
	if(line.indexOf("NTConfig_LifeThresh")>-1)
		return linePrefix +"NTConfig_LifeThresh = "+ NTConfig_LifeThresh +"; // Drink a normal potion if under this percent of life." ;		
	if(line.indexOf("NTConfig_LifeRejuvThresh")>-1)
		return linePrefix +"NTConfig_LifeRejuvThresh = "+ NTConfig_LifeRejuvThresh +"; // Drink a rejuvenation potion if under this percent of life." ;
	if(line.indexOf("NTConfig_ManaThresh")>-1)
		return linePrefix +"NTConfig_ManaThresh = "+ NTConfig_ManaThresh +"; // Drink a normal potion if under this percent of mana." ;
	if(line.indexOf("NTConfig_ManaRejuvThresh")>-1)
		return linePrefix +"NTConfig_ManaRejuvThresh = "+ NTConfig_ManaRejuvThresh +"; // Drink a rejuvenation potion if under this percent of mana." ;
	if(line.indexOf("NTConfig_LifeChicken")>-1)
		return linePrefix +"NTConfig_LifeChicken = "+ NTConfig_LifeChicken +"; // This is your chicken life percent. If you go below this life total, exit game." ;
	if(line.indexOf("NTConfig_ManaChicken")>-1)
		return linePrefix +"NTConfig_ManaChicken = "+ NTConfig_ManaChicken +"; // This is your chicken mana percent. If you go below this mana total, exit game." ;
	if(line.indexOf("NTConfig_MercLifeThresh")>-1)
		return linePrefix +"NTConfig_MercLifeThresh = "+ NTConfig_MercLifeThresh +"; // This is the threshold to use a life potion on your merc in percent." ;
	if(line.indexOf("NTConfig_MercRejuvThresh")>-1)
		return linePrefix +"NTConfig_MercRejuvThresh = "+ NTConfig_MercRejuvThresh +"; // This is the threshold to use a rejuv potion on your merc in percent." ;
	if(line.indexOf("NTConfig_MercChicken")>-1)
		return linePrefix +"NTConfig_MercChicken = "+ NTConfig_MercChicken +"; // This is your mercs chicken life percent. If he goes below this, exit game." ;
	
	if(line.indexOf("NTConfig_GambleIt =")>-1)
		return linePrefix +"NTConfig_GambleIt = "+ NTConfig_GambleIt +"; " ;
	
	if(line.indexOf("NTConfig_AttackSkill[0]")>-1)
		return linePrefix +"NTConfig_AttackSkill[0] = "+ NTConfig_AttackSkill[0] +"; // Cast your first spell once. Set to 0 if you won't " ;
	if(line.indexOf("NTConfig_AttackSkill[1]")>-1)
		return linePrefix +"NTConfig_AttackSkill[1] = "+ NTConfig_AttackSkill[1] +"; // Cast your primary spell to boss. " ;
	if(line.indexOf("NTConfig_AttackSkill[2]")>-1)
		return linePrefix +"NTConfig_AttackSkill[2] = "+ NTConfig_AttackSkill[2] +"; // Cast your primary spell to others. " ;
	if(line.indexOf("NTConfig_AttackSkill[3]")>-1)
		return linePrefix +"NTConfig_AttackSkill[3] = "+ NTConfig_AttackSkill[3] +"; // Cast your primary untimed spell if primary spell is timed spell. Set to 0 if you won't " ;
	if(line.indexOf("NTConfig_AttackSkill[4]")>-1)
		return linePrefix +"NTConfig_AttackSkill[4] = "+ NTConfig_AttackSkill[4] +"; // Cast your secondary spell if monster is immune to your primary spell. Set to 0 if you won't " ;
	if(line.indexOf("NTConfig_AttackSkill[5]")>-1)
		return linePrefix +"NTConfig_AttackSkill[5] = "+ NTConfig_AttackSkill[5] +"; // Cast your secondary untimed spell if secondary spell is timed spell. Set to 0 if you won't" ;
	if(line.indexOf("NTConfig_CastStatic =")>-1)
		return linePrefix +"NTConfig_CastStatic = "+ NTConfig_CastStatic +"; // Cast Static Field until monster's HP lower less than this percent. Set to 100 if you won't" ;	
		
	if(line.indexOf("NTConfig_PutAura =")>-1)
		return linePrefix +"NTConfig_PutAura = "+ NTConfig_PutAura +"; // If set to 0, your aura will automatically change based on your current attack.  If anything other than 0, that aura skill is forced for all attacks." ;	
	if(line.indexOf("NTConfig_AttackFirst =")>-1)
		return linePrefix +"NTConfig_AttackFirst = "+ NTConfig_AttackFirst +"; // Cast your first spell once. Set to 0 if you won't" ;	
	if(line.indexOf("NTConfig_AttackBoss =")>-1)
		return linePrefix +"NTConfig_AttackBoss = "+ NTConfig_AttackBoss +"; //  Cast your primary spell to boss." ;	
	if(line.indexOf("NTConfig_AttackOthers =")>-1)
		return linePrefix +"NTConfig_AttackOthers = "+ NTConfig_AttackOthers +"; // Cast your primary spell to others." ;	
	if(line.indexOf("NTConfig_AttackSecondary =")>-1)
		return linePrefix +"NTConfig_AttackSecondary = "+ NTConfig_AttackSecondary +"; // Cast your Secondary spell if monster is immune to your primary spell. Set to 0 if you won't" ;	
	if(line.indexOf("NTConfig_UseRedemption =")>-1)
		return linePrefix +"NTConfig_UseRedemption = "+ NTConfig_UseRedemption +"; //  Set to true to use Redemption after killing monster." ;	
	
	if(line.indexOf("XP_Curse =")>-1)
		return linePrefix +"XP_Curse = "+ XP_Curse +"; // curse to use after army threshold is meet	" ;	
	if(line.indexOf("XP_BuildArmyCurse =")>-1)
		return linePrefix +"XP_BuildArmyCurse = "+ XP_BuildArmyCurse +"; // curse to use after army threshold is meet	" ;	
	if(line.indexOf("XP_Golm =")>-1)
		return linePrefix +"XP_Golm = "+ XP_Golm +"; //0 = clay, 1 = blood, 2 = fire, 3 =iron (will not make) " ;	
	if(line.indexOf("XP_useSkel =")>-1)
		return linePrefix +"XP_useSkel = "+ XP_useSkel +";  " ;	
	if(line.indexOf("XP_useSkelMage =")>-1)
		return linePrefix +"XP_useSkelMage = "+ XP_useSkelMage +"; " ;	
	if(line.indexOf("XP_useRevive =")>-1)
		return linePrefix +"XP_useRevive = "+ XP_useRevive +"; " ;	
	if(line.indexOf("XP_CorpseExplosion =")>-1)
		return linePrefix +"XP_CorpseExplosion = "+ XP_CorpseExplosion +";  " ;	
	if(line.indexOf("XP_BuildArmyThresh =")>-1)
		return linePrefix +"XP_BuildArmyThresh = "+ XP_BuildArmyThresh +";  " ;	
	if(line.indexOf("NTConfig_UseTraps =")>-1)
		return linePrefix +"NTConfig_UseTraps = "+ NTConfig_UseTraps +"; // traps are hardcoded for 3 light sentrys and 2 death sentrys and do not need to be set with skills " ;	
	if(line.indexOf("NTConfig_CastShadowMaster =")>-1)
		return linePrefix +"NTConfig_CastShadowMaster = "+ NTConfig_CastShadowMaster +"; //" ;	
	if(line.indexOf("NTConfig_CastShadowWarrior =")>-1)
		return linePrefix +"NTConfig_CastShadowWarrior = "+ NTConfig_CastShadowWarrior +";  " ;	
	if(line.indexOf("NTConfig_CastBrustOfSpeed =")>-1)
		return linePrefix +"NTConfig_CastBrustOfSpeed = "+ NTConfig_CastBrustOfSpeed +"; // " ;	
	if(line.indexOf("NTConfig_CastFade =")>-1)
		return linePrefix +"NTConfig_CastFade = "+ NTConfig_CastFade +"; // " ;	
	if(line.indexOf("NTConfig_CastCloakOfShadows =")>-1)
		return linePrefix +"NTConfig_CastCloakOfShadows = "+ NTConfig_CastCloakOfShadows +"; // " ;	
	if(line.indexOf("NTConfig_CastBladeShield =")>-1)
		return linePrefix +"NTConfig_CastBladeShield = "+ NTConfig_CastBladeShield +"; // " ;		
	if(line.indexOf("NTConfig_CastStatic =")>-1)
		return linePrefix +"NTConfig_CastStatic = "+ NTConfig_CastStatic +"; // " ;	
	if(line.indexOf("NTConfig_ClearPosition =")>-1)
		return linePrefix +"NTConfig_ClearPosition = "+ NTConfig_ClearPosition +"; // Set to true if you want to clear area after killing boss. " ;	
	if(line.indexOf("NTConfig_CheckSafe =")>-1)
		return linePrefix +"NTConfig_CheckSafe = "+ NTConfig_CheckSafe +"; // Set to true to check for curses, merc and potion (go to town if needed) " ;	
	if(line.indexOf("NTConfig_FireEyeExtension =")>-1)
		return linePrefix +"NTConfig_FireEyeExtension = "+ NTConfig_FireEyeExtension +"; // summoner ext" ;	
	if(line.indexOf("NTConfig_CouncilExtension =")>-1)
		return linePrefix +"NTConfig_CouncilExtension = "+ NTConfig_CouncilExtension +"; // summoner ext" ;		

	return line;
}

function myGetSkillByID(id){
if (id == 0)
	return "Nothing"
return getSkillById(id)
}

function myGetSkillByName(name){
if (!name)
	return 0;
if (name == "Nothing")
	return 0;
return getSkillByName(name)
}


//alogwe: added these  functions to read valid script files from folder for onscreen config;
function getBossList()
{
	var list = getScriptsInFolder('libs/bots/');	//populate boss list with valid scripts from 'libs/bots/' folder;
	list.toScriptAliases();							//convert bossList elements from filenames to script aliases (for putting in char config);
	//print(list.toSource());						//debugging;
	
	return list;
}


function getScriptsInFolder(folderPath)
{
	if(arguments.length == 0 || typeof(folderPath) != 'string' || !(FileTools.exists(folderPath)))
		return false;
		
	var filetypes = ['dbl','DBL'];	//Array of valid filetypes to filter the read-in file list;
	var fileArray = [];				//Array to hold function output (file list);
	
	
	function validNTBotScripts(element, index, array)
	{
		var searchString = '';    //Create RegExp search string to test the array elements with;	
		for(var i = 0; i < filetypes.length; i++)
		{
			searchString = '^NT.+\\.' + filetypes[i];
			if((typeof(element) == 'string') && RegExp(searchString, 'g').test(element) && element != 'NTLoader.dbl')
				return true;
		}
		return false;
	}
	
	
	//get all filenames in folderPath;
	fileArray = dopen(folderPath).getFiles();
	
	//filter array to only keep filenames with valid file extensions (set above in 'filetypes' array);
	fileArray = fileArray.filter(validNTBotScripts);
	
	return fileArray;
}


//alogwe: this will remove file extension regardless of filetype
Array.prototype.toScriptAliases =
	function()
	{
		for(var i = 0; i < this.length; i++)
		{
			if(typeof(this[i]) == 'string' && this[i].indexOf('NT') == 0)
				this[i] = this[i].substring(2, this[i].lastIndexOf('.'));
		}
	};
	



