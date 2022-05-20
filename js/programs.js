const programsData = [
    {
      id: 0,
      name: 'Sponsor an andean cat',
      phrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet ad! Ullam dignissimos voluptatum voluptatibus?',
      image: './assets/images/sponsor2.jpg',
    },
    {
      id: 1,
      name: 'Adopt a symbolic cat',
      phrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet ad! Ullam dignissimos voluptatum voluptatibus?',
      image: './assets/images/adopt.jpg',
    },
    {
      id: 2,
      name: 'Educa Cat',
      phrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet ad! Ullam dignissimos voluptatum voluptatibus?',
      image: './assets/images/education.jpg',
    },
    {
      id: 3,
      name: 'Catcrafts',
      phrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet ad! Ullam dignissimos voluptatum voluptatibus?',
      image: './assets/images/catcrafts.jpg',
    },
    {
      id: 4,
      name: 'Cat Gold',
      phrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet ad! Ullam dignissimos voluptatum voluptatibus?',
      image: './assets/images/mining.png',
    },
    {
      id: 5,
      name: 'In the field',
      phrase: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eveniet ad! Ullam dignissimos voluptatum voluptatibus?',
      image: './assets/images/field.jpeg',
    },
  ];

const programs = document.querySelector('.program');

const renderProgram = () => {
    programsData.forEach((program) => {
        const programContainer = document.createElement('article');
        programContainer.classList.add('program__container');
        programContainer.innerHTML = `
        <div class="programs__image">
          <img
            class="program-img"
            src="${program.image}"
            alt=""
          />
        </div>
        <div class="information">
          <h3 class="information__name">${program.name}</h3>
          <p class="information__phrase">
          ${program.phrase}
          </p>
          <p class="information__description">
          ${program.description}
          </p>
        </div>
        `;
        programs.appendChild(programContainer);
    });
};

renderProgram();