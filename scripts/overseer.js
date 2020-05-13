const engineTrail = newEffect(90, e => {
  Draw.blend(Blending.normal);
  Draw.color(Color.valueOf("#b30000").shiftHue(Time.time() * 1.5));
  Fill.circle(e.x, e.y, e.fout() * 2.5);
  Draw.color(Color.valueOf("#ff0000").shiftHue(Time.time() * 1.5));
  Fill.circle(e.x, e.y + 0.25 , e.fout() * 1.5);
  Draw.blend();
});

const length = 60;
const c = new Vec3();
const n = new Vec3();
lastX = -1;
lastY = -1;

const chaos = extendContent(Mech, "overseer", {
  updateAlt(player){
    const veccc = new Vec2();
    
    veccc.trns(player.rotation + 90, 0, 7.5);
    if(player.isFlying()){
      Effects.effect(engineTrail, player.x + veccc.x, player.y + veccc.y, player.rotation - 90);
    }
  }/*,
  draw(){
    Draw.color(Color.valueOf("#ff0000").shiftHue(Time.time() * 1.5));

    for(car i = 0; i < points.length - 1; i++){
      c.trns(points.get(i));
      n.trns(points.get(i + 1));
      size = 2.5 * 1 / length;

      cx = Mathf.sin(c.z) * i * size;
      cy = Mathf.cos(c.z) * i * size;
      nx = Mathf.sin(n.z) * (i + 1) * size;
      ny = Mathf.cos(n.z) * (i + 1) * size;
      
      Fill.quad(c.x - cx, c.y - cy, c.x + cx, c.y + cy, n.x + nx, n.y + ny, n.x - nx, n.y - ny);
    }

    Draw.reset();
  },
  update(x, y){
    if(points.length > length){
      Pools.free(points.first());
      points.remove(0);
    }

    angle = -Angles.angle(x, y, lastX, lastY);

    points.add(Pools.obtain(Vec3, () => new Vec3()).set(x, y, (angle) * Mathf.degRad));

    lastX = x;
    lastY = y;
  }*/
});

const laser = extend(ArtilleryBulletType, {});
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


const ohno = extend(ArtilleryBulletType, {});
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