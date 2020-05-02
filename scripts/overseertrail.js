const trailBot = newEffect(39, e => {
	Draw.blend(Blending.additive);
  Draw.color(Color.valueOf("#f3b380"), Color.valueOf("#f7c7a3"), e.fin());
	Fill.circle(e.x, e.y, ((1 * e.fout()) * e.rotation) / 0.8);
	Draw.blend();
});
const trailTop = newEffect(39, e => {
	Draw.blend(Blending.additive);
	Draw.color(Color.valueOf("#edcdb4"), Color.valueOf("#e8d8cc"), e.fin());
	Fill.circle(e.x, e.y, ((1 * e.fout()) * e.rotation) / 1.7);
	Draw.blend();
});

const chaos = extendContent(Mech, "overseer", {
  updateAlt: function(player){
    const veccc = new Vec2();
    
    veccc.trns(this.rotation, 0, 7.5);
    Effects.effect(trailBot, this.x + veccc.x, this.y + veccc.y, this.rotation);
    Effects.effect(trailTop, this.x + veccc.x, this.y + veccc.y, this.rotation);
  }
});