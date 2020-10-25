var tl = gsap.timeline({paused: true});
	tl.to('.play', {duration: 0.4, opacity: 0, scale: 0.3})
	tl.to('.carp',{duration: 10, right: 'calc(50% - 150px)', ease: 'power4'}, '+=0.5');
	tl.to('.pupil, .pupil__border', {duration: 0.5, translateX: 5}, '-=1.5');
	tl.to('.pupil, .pupil__border', {duration: 0.5, translateX: -2}, '+=1');
	tl.to('.pupil, .pupil__border', {duration: 0.5, translateX: 5}, '+=1');
	tl.to('.eyebrow', {duration: 0.5, translateY: 5}, '-=0.5');
	tl.to('.eyebrow', {duration: 0.5, translateY: 0}, '+=2');
	tl.to('.pupil, .pupil__border', {duration: 0.5, translateX: -2}, '-=0.5');
	tl.to('.carp',{duration: 6, right: '110%', ease: 'power4'}, '+=0.3');
	tl.to('.carp',{rotationY: 180, rotation: -45, top: '100%'},);
	tl.to('.carp',{duration: 2, right: 'calc(100% - 150px)', top: 'calc(100% - 100px)', ease: 'power4.out'}, '+=1');
	tl.to('.pupil, .pupil__border', {duration: 0.5, translateX: 5}, '-=0.5');
	tl.to('.eyebrow', {duration: 0.5, translateY: 5}, '-=0.5');
	tl.to('.text--first', {duration: 0.3, opacity: 1, }, '-=0.2');
	tl.to('.text--first', {duration: 0.3, opacity: 0, }, '+=3');
	tl.to('.carp',{duration: 2, right: '100%', top: '100%', ease: 'power4.in'}, '-=0.5');
	tl.to('.carp',{duration: 1, rotation: 0, top: 'calc(70% - 100px)'});
	tl.to('.pupil, .pupil__border', {duration: 0.5, translateX: -2}, '-=1');
	tl.to('.eyebrow', {duration: 0.5, translateY: 0}, '-=1');
	tl.to('.carp',{duration: 5, rotation: 0, right: 'calc(70% - 150px)'});
	tl.to('.pupil, .pupil__border', {duration: 0.5, translateX: 5}, '-=0.5');
	tl.to('.eyebrow', {duration: 0.5, translateY: 5}, '-=0.5');
	tl.to('.text--second', {duration: 0.3, opacity: 1, }, '-=0.5');
	tl.to('.wish', {duration: 0.4, opacity: 1, scale: 1}, '+=3');

var tl2 = gsap.timeline({paused: true});
	tl2.to('.wish', {duration: 0.4, opacity: 0, scale: 0.3});
	tl2.to('.text--second', {duration: 0.3, opacity: 0, }, '-=0.4');
	tl2.to('.beer', {duration: 4, bottom: '20%', ease: 'bounce'}, '+=0.5');
	tl2.to('.beer', {duration: 2, scale: 2}, '-=4');
	tl2.to('.beer', {duration: 2, scale: 2}, '-=4');
	tl2.to('.text--third', {duration: 0.3, opacity: 1}, '+=1')


// repeated motion
gsap.to('.fin__main', {duration: 0.8, translateX: 10, translateY: -5, rotation: 30, ease: 'power1.inOut', repeat: -1, yoyo: true});
gsap.to('.fin__bottom, .fin__bottom__border', {duration: 0.8, delay: 0.8, translateX: 5, translateY: -5, ease: 'power1.inOut', repeat: -1, yoyo: true});
gsap.to('.fin__bottom__inner', {duration: 0.8, delay: 0.8, translateX: 5, translateY: -5, rotation: -5, ease: 'power1.inOut', repeat: -1, yoyo: true});
gsap.to('.fin__back', {duration: 0.6, delay: 0.8, translateX: -2, rotation: -4, ease: 'power1.inOut', repeat: -1, yoyo: true});
gsap.to('.scale__bottom', {duration: 0.8, delay: 0.8, translateX: 5, ease: 'power1.inOut', repeat: -1, yoyo: true});

// action
document.querySelector('.play').onclick = () => tl.play();
document.querySelector('.wish').onclick = () => tl2.play();
