const trail = newEffect(39, e => {
	Draw.blend(Blending.additive);
  Draw.color(Color.valueOf("#f3b380"), Color.valueOf("#f7c7a3"), e.fin());
	Fill.circle(e.x, e.y, ((1 * e.fout()) * e.rotation) / 0.8);
	Draw.color(Color.valueOf("#edcdb4"), Color.valueOf("#e8d8cc"), e.fin());
	Fill.circle(e.x, e.y, ((1 * e.fout()) * e.rotation) / 1.7);
	Draw.blend();
	
	//Draw.color(Color.valueOf("ffffff"));
	//Fill.circle(e.x, e.y, (1 * e.fout()) * (e.rotation / 1.3));
});

const chaos = extendContent(Mech, "overseer, {
  updateAlt(player){
    this.super$updateAlt(player);
    
    const veccc = new Vec2();
    
    veccc.trns(this.rotation, 0, 7.5);
    Effects.effect(trail, this.x + veccc.x, this.y + veccc.y, this.rotation);
  }
});