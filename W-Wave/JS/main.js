
(function(){
// Вход
const modal = new GraphModal();

let enterBtn = document.querySelector('.header-top__button-login');

enterBtn.addEventListener('click', () => {
	new GraphModal().open('first');
});

//header search form
function activateSearchField() {
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-form__input');
  const headerNav = document.querySelector('.header-top__nav');

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.classList.toggle('search-form__input--active');
    searchInput.focus();
    headerNav.classList.toggle('header-top__nav--hidden')
  });

  window.addEventListener('click', e => {
    const activatedSearchInput = document.querySelector('.search-form__input.search-form__input--active');
    if (activatedSearchInput && e.target !== activatedSearchInput && e.target !== searchBtn) {
      activatedSearchInput.classList.remove('search-form__input--active');
      headerNav.classList.remove('header-top__nav--hidden')
    }
  });
};
activateSearchField()

 // btn-play

 function changeBtn() { 
  const btns = document.querySelectorAll('.btn-play');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const activatedBtns = document.querySelectorAll('.btn-play.active');

      activatedBtns.forEach(activatedBtn => {
        if (activatedBtn != btn) {
          activatedBtn.classList.toggle('active');
        };
      });
      btn.classList.toggle('active');
    });
  });
};
changeBtn();

// burger

function activateBurger() {
  const burgerBtnOpen = document.querySelector('.header-top__btn-burger');
  const burgerBtnClose = document.querySelector('.header-top__btn-burger-close');
  const burgerMenu = document.querySelector('.header-nav');
  const burgerMenuMobileBottom = document.querySelector('.header-bottom__nav');

  burgerBtnOpen.addEventListener('click', () => {
    burgerMenu.classList.add('active');
    if (burgerMenuMobileBottom) {
      burgerMenuMobileBottom.classList.add('active');
    }
  });

  burgerBtnClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    if (burgerMenuMobileBottom) {
      burgerMenuMobileBottom.classList.remove('active');
    };
  });
};
activateBurger();

  function launchBroadcastsSelect() {
    const element = document.querySelector('.choices');
    const choices = new Choices(element, {
      position: 'bottom',
      searchEnabled: false,
      shouldSort: false,
      itemSelectText: '',
    });
  };
  launchBroadcastsSelect()
  
  function AddArialabelTobroadcastsLinks() {
    const broadcstsItems = document.querySelectorAll('.broadcasts-item');
  
    broadcstsItems.forEach(item => {
      const link = item.querySelector('.broadcasts-item__link');
      const linkDescr1 = item.querySelector('.broadcasts-item__title').textContent;
      const linkDescr2 = item.querySelector('.broadcasts-item__descr').textContent;
    });
  };
  AddArialabelTobroadcastsLinks();


  // guests

  function activateAccordion() {
    const btns = document.querySelectorAll('.accordion-item__btn');
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const activatedBtn = document.querySelector('.accordion-item__btn.active');
        if (activatedBtn && activatedBtn !== btn) {
          activatedBtn.classList.toggle('active');
          activatedBtn.nextElementSibling.style.maxHeight = 0;
          activatedBtn.nextElementSibling.classList.remove('active');
        };
        this.classList.toggle('active');
  
        const list = this.nextElementSibling;
  
        if (this.classList.contains('active')) {
          const listHeight = Math.max(
            list.scrollHeight,
            list.offsetHeight,
            list.clientHeight,
          );
  
          list.style.maxHeight = listHeight + 'px';
          list.classList.add('active')
        } else {
          list.style.maxHeight = '0px';
          list.classList.remove('active')
        };
      });
    });
  
    let timer;
    window.addEventListener('resize', () => {
      const activatedBtn = document.querySelector('.accordion-item__btn.active');
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (activatedBtn) {
          const list = activatedBtn.nextElementSibling;
          const listHeight = Math.max(
            list.scrollHeight,
            list.offsetHeight,
            list.clientHeight,
          );
          activatedBtn.nextElementSibling.style.maxHeight = 'none';
          list.style.maxHeight = `${listHeight}px`
        }
      }, 100);
    });
  };
  activateAccordion();

  function openHeaderBroadcast() {
    const btnOpen = document.querySelector('.btn-open-broadcasts');
    const svgBtnOpen = document.querySelector('.btn-open-broadcasts__svg');
    const broadcast = document.querySelector('.header-bottom__broadcasts');
    const headerBottom = document.querySelector('.header-bottom');
  
    btnOpen.addEventListener('click', () => {
      broadcast.classList.toggle('active');
      headerBottom.classList.toggle('header-bottom--active');
      svgBtnOpen.classList.toggle('active')
    });
  }
  openHeaderBroadcast();
  
  
  function LaunchGuestsTabs() {
    const accordionBtnNames = document.querySelectorAll('[data-accordion]');
    const tabCards = document.querySelectorAll('[data-people]');
    accordionBtnNames.forEach(btn => {
  
      btn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.accordion-item__item-btn.active');
        if (activeBtn) activeBtn.classList.remove('active');
        btn.classList.add('active')
  
        tabCards.forEach(card => {
          const btnName = btn.getAttribute('data-accordion');
          const cardName = card.getAttribute('data-people');
          if (cardName !== btnName) {
            card.classList.remove('active');
          } else {
            card.classList.add('active');
            const cardSocialLink = card.querySelector('.guests-person__social-link');
            cardSocialLink.focus();
          };
        });
      });
    });
  };
  LaunchGuestsTabs()
  
  function openStartingGuest(name) {
    const accordionGuestBtns = document.querySelectorAll('.accordion-item__item-btn');
    const guestCards = document.querySelectorAll('.guests-people__item');
  
    accordionGuestBtns.forEach(guestBtn => {
  
      if (guestBtn.textContent === name) {
  
        guestBtn.classList.add('active')
        const accordionBtnsWrapper = guestBtn.closest('.accordion-item__list-wrapper');
        const accordionBtn = accordionBtnsWrapper.previousElementSibling;
        accordionBtn.classList.add('active');
        accordionBtnsWrapper.classList.add('active');
  
        const accordionBtnsWrapperHeight = Math.max(
          accordionBtnsWrapper.scrollHeight,
          accordionBtnsWrapper.offsetHeight,
          accordionBtnsWrapper.clientHeight,
        );
  
        accordionBtnsWrapper.style.maxHeight = `${accordionBtnsWrapperHeight}px`;
  
  
        guestCards.forEach (card => {
           if (card.getAttribute('data-people') === guestBtn.getAttribute('data-accordion')) {
            card.classList.add('active')
          };
        });
      };
    });
  };
  openStartingGuest('Ольга Мартынова');
  
  function addArialabelToGuestsAccordionBtns() {
    const btns = document.querySelectorAll('.accordion-item__btn');
    btns.forEach(btn => {
      const btnDescr = btn.querySelector('.accordion-item__btn-name').textContent;
      btn.setAttribute('aria-label', `показать список ${btnDescr}`)
    });
  };
  addArialabelToGuestsAccordionBtns();
  
  function addArialabelToGuestsCards() {
    const guestsCards = document.querySelectorAll('.guests-people__item');
    guestsCards.forEach(card => {
      const cardSocialLinks = card.querySelectorAll('.social-link');
      const instagramLink = cardSocialLinks[0];
      const facebookLink = cardSocialLinks[1];
      const twitterLink = cardSocialLinks[2];
    });
  };
  addArialabelToGuestsCards();

  // playlists

  function actiavatePlaylistsSwiper() {
    const breakpoint = window.matchMedia('(max-width:767px)');
  
    const swiper = new Swiper('.playlists-swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
  
      grabCursor: true,
      wrapperClass: 'playlists-form__fieldset',
      slideClass: 'playlists-form__label',
      breakpoints: {
        767: {
          virtualTranslate: true,
        },
      }
    });
  
    if (!breakpoint.matches) {
      swiper.destroy(true, true);
    };
  };
  
  function launchPlaylistsSwiper() {
    actiavatePlaylistsSwiper();
  
    let timer;
    window.addEventListener('resize', () => {
      clearTimeout(timer);
      timer = setTimeout(actiavatePlaylistsSwiper, 100);
    });
  };
  launchPlaylistsSwiper();

  // about

  function launchAboutSwiper() {
    const swiper = new Swiper('.about-swiper', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.about-slider__btn-next',
        prevEl: '.about-slider__btn-prew',
      },
  
      grabCursor: true,
      breakpoints: {
        320: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 30,
        }
      }
    });
  };
  launchAboutSwiper();

  function launchValidateAboutForm() {
    const validation = new JustValidate('#about-form',
    {
      errorFieldCssClass: 'is-invalid',
      errorLabelCssClass: 'is-label-invalid',
      errorLabelStyle: {
        color: '#D52B1E',
        textDecoration: 'none',
      },
    },
  );

  validation
  .addField('#about-form__textarea', [
    {
      rule: 'required',
      errorMessage: 'Введите сообщение',
    },
  ])
  .addField('#about-form__name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Имя меньше 2 букв',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя больше 30 букв',
    },
  ])
  .addField('#about-form__email', [
    {
      rule: 'required',
      errorMessage: 'Введите e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный e-mail',
    },
  ])
  .addField('#about-form__checkbox', [
    {
      rule: 'required',
      errorMessage: 'Необходимо согласие',
    },
  ]);
};
launchValidateAboutForm()
})()


