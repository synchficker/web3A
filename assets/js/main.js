// Bola bergerak di hero (canvas)
(function(){
  var c=document.getElementById('felt'),x=c.getContext('2d'),W,H,balls=[],colors=['#c8a501','#f2c400','#d8262c','#2b6fe0','#e8e8e8','#8a3ffc','#ff7a1a'];
  function size(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight}
  size();addEventListener('resize',size);
  for(var i=0;i<9;i++)balls.push({x:Math.random()*W,y:Math.random()*H,r:16+Math.random()*16,vx:(Math.random()-.5)*1.6,vy:(Math.random()-.5)*1.6,c:colors[i%colors.length]});
  var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
  function draw(){
    x.clearRect(0,0,W,H);
    balls.forEach(function(b){
      if(!reduce){b.x+=b.vx;b.y+=b.vy;if(b.x<b.r||b.x>W-b.r)b.vx*=-1;if(b.y<b.r||b.y>H-b.r)b.vy*=-1}
      var g=x.createRadialGradient(b.x-b.r*.35,b.y-b.r*.4,b.r*.1,b.x,b.y,b.r);
      g.addColorStop(0,'#fff');g.addColorStop(.25,b.c);g.addColorStop(1,'#0a0803');
      x.globalAlpha=.55;x.shadowColor=b.c;x.shadowBlur=b.c==='#c8a501'?26:8;
      x.fillStyle=g;x.beginPath();x.arc(b.x,b.y,b.r,0,7);x.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
// Reveal + hitung angka
var io=new IntersectionObserver(function(es){es.forEach(function(e){
  if(!e.isIntersecting)return;e.target.classList.add('on');io.unobserve(e.target);
  e.target.querySelectorAll('[data-n]').forEach(function(el){
    var n=+el.dataset.n,t=0;var id=setInterval(function(){t++;el.textContent=Math.round(n*t/30);if(t>=30)clearInterval(id)},30);
  });
})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
// Efek cahaya kartu mengikuti kursor
document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
document.querySelectorAll('.tab').forEach(function(t){t.onclick=function(){document.querySelectorAll('.tab').forEach(function(x){x.classList.remove('act')});t.classList.add('act');var f=t.dataset.f;document.querySelectorAll('.mi').forEach(function(m){var ok=f==='all'||m.dataset.c===f;m.hidden=!ok;if(ok){m.style.animation='none';void m.offsetWidth;m.style.animation='pop .45s both'}})}});

// Slider galeri
(function(){
  Array.prototype.forEach.call(document.querySelectorAll('.slider'),function(box){
    var track=box.querySelector('.track'),prev=box.querySelector('.sl-btn.prev'),next=box.querySelector('.sl-btn.next');
    if(!track)return;
    function step(){var s=track.firstElementChild;return s.getBoundingClientRect().width+14}
    function update(){
      prev.disabled=track.scrollLeft<=2;
      next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-2;
    }
    prev.addEventListener('click',function(){track.scrollBy({left:-step(),behavior:'smooth'})});
    next.addEventListener('click',function(){track.scrollBy({left:step(),behavior:'smooth'})});
    track.addEventListener('scroll',update,{passive:true});
    track.addEventListener('keydown',function(e){
      if(e.key==='ArrowRight'){e.preventDefault();next.click()}
      if(e.key==='ArrowLeft'){e.preventDefault();prev.click()}
    });
    addEventListener('resize',update);
    update();
  });
})();

// Menu mobile (hamburger)
(function(){
  var nav=document.querySelector('nav'),btn=nav.querySelector('.nav-toggle');
  if(!btn)return;
  function set(o){nav.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);btn.setAttribute('aria-label',o?'Tutup menu':'Buka menu')}
  btn.addEventListener('click',function(){set(!nav.classList.contains('open'))});
  nav.querySelectorAll('ul a').forEach(function(a){a.addEventListener('click',function(){set(false)})});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  document.addEventListener('click',function(e){if(!nav.contains(e.target))set(false)});
  addEventListener('resize',function(){if(innerWidth>1000)set(false)});
})();
