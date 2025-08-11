(()=>{
  // Parallax
  const layers = document.querySelectorAll('[data-parallax]');
  let ticking = false;
  function onScroll(){
    if(!ticking){
      requestAnimationFrame(()=>{
        const y = window.scrollY || 0;
        layers.forEach(el=>{
          const s = parseFloat(el.getAttribute('data-parallax'))||0;
          el.style.transform = `translate3d(0, ${y*s}px, 0)`;
        });
        ticking=false;
      });
      ticking=true;
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id=a.getAttribute('href').slice(1);
      const el=document.getElementById(id);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); }
    });
  });

  // Reveal on scroll
  const io=new IntersectionObserver(entries=>entries.forEach(e=>e.target.classList.toggle('is-in', e.isIntersecting)),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
})();