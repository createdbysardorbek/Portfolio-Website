function scroll(classSelector, btnClass) {
    document.querySelector(btnClass).addEventListener('click', () => {
        document.querySelector(classSelector).scrollIntoView({
            block: 'center',
            behavior: 'smooth',
        });
    });
};
scroll('.about__section', '.first');
scroll('.special__info', '.second');
scroll('.portfolio', '.fourth');
scroll('.whatIDo', '.fifth');
scroll('.testimonial', '.sixth');
scroll('.contact', '.seventh');

document.querySelector('.sayHi').addEventListener('click', () => { alert('Hello my friend!') });







