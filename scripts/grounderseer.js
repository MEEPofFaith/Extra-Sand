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

const gchaos = extendContent(Mech, "grounderseer", {
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

const glaser = extend(ArtilleryBulletType, {});
glaser.bulletSprite = "sandy-sand-overseerblast";
glaser.speed = 15;
glaser.damage = 100000000;
glaser.splashDamage = 100000000;
glaser.splashDamageRadius = 512;
glaser.keepVelocity = false;
glaser.bulletShrink = 0;
glaser.drag = 0;
glaser.incendChance = 0;
glaser.incendAmount = 0;
glaser.incendSpread = 0;
glaser.lifetime = 11;
glaser.collidesTiles = true;
glaser.collides = true;
glaser.collidesAir = true;
glaser.pierce = true;
glaser.drawSize = 32;
glaser.hitSize = 64;
glaser.trailEffect = Fx.smoke;
glaser.hitEffect = Fx.shootBig;
glaser.despawnEffect = Fx.shootBig;
glaser.hitSound = Sounds.none;
glaser.frontColor = Color.valueOf("FF9C5A");
glaser.backColor = Color.valueOf("EC7458");


const ghno = extend(ArtilleryBulletType, {});
ghno.bulletSprite = "sandy-sand-thisisntabulletspriteijustwantittobeghno"
ghno.speed = 30;
ghno.damage = 100000000;
ghno.splashDamage = 100000000;
ghno.splashDamageRadius = 512;
ghno.bulletShrink = 0;
ghno.drag = 0;
ghno.incendChance = 0;
ghno.incendAmount = 0;
ghno.incendSpread = 0;
ghno.lifetime = 11;
ghno.collidesTiles = true;
ghno.collides = true;
ghno.collidesAir = true;
ghno.pierce = true;
ghno.drawSize = 64;
ghno.hitSize = 96;
ghno.trailEffect = Fx.shieldBreak;
ghno.hitEffect = Fx.padlaunch;
ghno.despawnEffect = Fx.padlaunch;
ghno.hitSound = Sounds.none;
ghno.frontColor = Color.valueOf("FF9C5A");
ghno.backColor = Color.valueOf("EC7458");
ghno.fragVelocityMin = 0.5;
ghno.fragVelocityMax = 2;
ghno.fragBullets = 10;
ghno.fragBullet = glaser;

const gcourierofchaos = extendContent(Weapon, "a", {})

gcourierofchaos.length = 3.125;
gcourierofchaos.ejectEffect = Fx.hitMeltdown;
gcourierofchaos.width = 0;
gcourierofchaos.alternate = true;
gcourierofchaos.reload = 2;
gcourierofchaos.shots = 90;
gcourierofchaos.shotDelay = 0;
gcourierofchaos.inaccuracy = 180;
gcourierofchaos.shake = 3;
gcourierofchaos.minPlayerDist = 0;
gcourierofchaos.bullet = ghno;
gcourierofchaos.shootSound = Sounds.laser;

gchaos.localizedName = "Grounderseer";
gchaos.description = "A powerful sandbox only mech for complete obliteration. Ground edition. Though the 'sandbox only' part might be a joke considering you can get this in the campaign now."
gchaos.flying = false;
gchaos.drillPower = 69;
gchaos.mineSpeed = 69420;
gchaos.speed = 0.5;
gchaos.boostSpeed = 1.5;
gchaos.maxSpeed = 1000;
gchaos.hitsize = 7;
gchaos.drag = 0.1;
gchaos.mass = 69420;
gchaos.health = 6942069;
gchaos.itemCapacity = 69420;
gchaos.engineOffset = 0;
gchaos.engineSize = 0;
gchaos.buildPower = 69420;
gchaos.cellTrnsY = 2;
gchaos.weapon = gcourierofchaos;

const becomegchaos = extendContent(MechPad, "grounderseerpad", {});

becomegchaos.mech = gchaos;
becomegchaos.buildTime = 10;