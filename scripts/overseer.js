const engineTrail = newEffect(39, e => {
	Draw.blend(Blending.additive);
  Draw.color(Color.valueOf("#f3b380"), Color.valueOf("#f7c7a3"), e.fin());
	Fill.circle(e.x, e.y, ((1 * e.fout()) * e.rotation) / 0.8);
	Draw.color(Color.valueOf("#edcdb4"), Color.valueOf("#e8d8cc"), e.fin());
	Fill.circle(e.x, e.y, ((1 * e.fout()) * e.rotation) / 1.7);
	Draw.blend();
});

const chaos = extendContent(Mech, "overseer", {
  updateAlt(player){
    const veccc = new Vec2();
    
    veccc.trns(player.rotation, 0, 7.5);
    Effects.effect(engineTrail, this.x + veccc.x, this.y + veccc.y, this.rotation);
  }
});

const laser = extendContent(ArtilleryBulletType, {});
laser.bulletSprite = "sandy-sand-overseerblast";
laser.speed = 15;
laser.damage = 100000000;
laser.splashDamage = 100000000;
laser.splashDamageRadius = 512;
laser.keepVelocity = false;
laser.bulletShrink = 0;
laser.drag = 0;
laser.incendChance = 0;
laser.incendAmount = 0;
laser.incendSpread = 0;
laser.lifetime = 11;
laser.collidesTiles = true;
laser.collides = true;
laser.collidesAir = true;
laser.pierce = true;
laser.drawSize = 32;
laser.hitSize = 64;
laser.trailEffect = Fx.smoke;
laser.hitEffect = Fx.shootBig;
laser.despawnEffect = Fx.shootBig;
laser.hitSound = Sounds.none;
laser.frontColor = Color.valueOf("FF9C5A");
laser.backColor = Color.valueOf("EC7458");


const ohno = extendContent(ArtilleryBulletType, {});
ohno.bulletSprite = "sandy-sand-thisisntabulletspriteijustwantittobeohno"
ohno.speed = 30;
ohno.damage = 100000000;
ohno.splashDamage = 100000000;
ohno.splashDamageRadius = 512;
ohno.bulletShrink = 0;
ohno.drag = 0;
ohno.incendChance = 0;
ohno.incendAmount = 0;
ohno.incendSpread = 0;
ohno.lifetime = 11;
ohno.collidesTiles = true;
ohno.collides = true;
ohno.collidesAir = true;
ohno.pierce = true;
ohno.drawSize = 64;
ohno.hitSize = 96;
ohno.trailEffect = Fx.shieldBreak;
ohno.hitEffect = Fx.padlaunch;
ohno.despawnEffect = Fx.padlaunch;
ohno.hitSound = Sounds.none;
ohno.frontColor = Color.valueOf("FF9C5A");
ohno.backColor = Color.valueOf("EC7458");
ohno.fragVelocityMin = 0.5;
ohno.fragVelocityMax = 2;
ohno.fragBullets = 10;
ohno.fragBullet = laser;

const courierofchaos = extendContent(Weapon, "a", {})

courierofchaos.length = 3.125;
courierofchaos.ejectEffect = Fx.hitMeltdown;
courierofchaos.width = 0;
courierofchaos.alternate = true;
courierofchaos.reload = 2;
courierofchaos.shots = 90;
courierofchaos.shotDelay = 0;
courierofchaos.inaccuracy = 180;
courierofchaos.shake = 3;
courierofchaos.minPlayerDist = 0;
courierofchaos.bullet = ohno;
courierofchaos.shootSound = Sounds.laser;

chaos.localizedName = "Overseer";
chaos.description = "A powerful sandbox only ship for complete obliteration. Though the 'sandbox only' part might be a joke considering you can get this in the campaign now."
chaos.flying = true;
chaos.drillPower = 69;
chaos.mineSpeed = 69420;
chaos.speed = 2;
chaos.maxSpeed = 1000;
chaos.hitsize = 7;
chaos.drag = 0.1;
chaos.mass = 69420;
chaos.health = 6942069;
chaos.itemCapacity = 69420;
chaos.engineOffset = 0;
chaos.engineSize = 0;
chaos.buildPower = 69420;
chaos.cellTrnsY = 2;
chaos.weapon = courierofchaos;

const becomeChaos = extendContent(MechPad, "overseerpad", {});

becomeChaos.mech = chaos;
becomeChaos.buildTime = 10;