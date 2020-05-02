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

const laser = extendContent(ArtilleryBulletType, {
  bulletSprite = "sandy-sand-overseerblast";
  speed = 15;
  damage = 100000000;
  splashDamage = 100000000;
  splashDamageRadius = 512;
  keepVelocity = false;
  bulletShrink = 0;
  drag = 0;
  incendChance = 0;
  incendAmount = 0;
  incendSpread = 0;
  lifetime = 11;
  collidesTiles = true;
  collides = true;
  collidesAir = true;
  pierce = true;
  drawSize = 32;
  hitSize = 64;
  trailEffect = Fx.smoke;
  hitEffect = Fx.shootBig;
  despawnEffect = Fx.shootBig;
  hitSound = Sounds.none;
  frontColor = Color.valueOf("FF9C5A");
  backColor = Color.valueOf("EC7458");
});

const ohno = extendContent(ArtilleryBulletType, {
  bulletSprite = "sandy-sand-thisisntabulletspriteijustwantittobeohno"
  speed = 30;
  damage = 100000000;
  splashDamage = 100000000;
  splashDamageRadius = 512;
  bulletShrink = 0;
  drag = 0;
  incendChance = 0;
  incendAmount = 0;
  incendSpread = 0;
  lifetime = 11;
  collidesTiles = true;
  collides = true;
  collidesAir = true;
  pierce = true;
  drawSize = 64;
  hitSize = 96;
  trailEffect = Fx.shieldBreak;
  hitEffect = Fx.padlaunch;
  despawnEffect = Fx.padlaunch;
  hitSound = Sounds.none;
  frontColor = Color.valueOf("FF9C5A");
  backColor = Color.valueOf("EC7458");
  fragVelocityMin = 0.5;
  fragVelocityMax = 2;
  fragBullets = 10;
  fragBullet = laser;
});
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