export const usersArray = [
  {
    id: '1',
    givenName: 'Cristo',
    familyName: 'Immacolato',
    email: 'gesùcristo@yourlord.com',
    signups: [],
    profileImage: '/../public/jesus.jpg',
    about:
      ' our lord and saviour. a great lover of the most extreme and dangerous sports since he can recover from every injury in tree days',
  },
  {
    id: '2',
    givenName: 'Twiggy',
    familyName: 'The Surfing Squirrel',
    email: 'twiggy@email.com',
    signups: [],
    profileImage: '/../public/twiggy.webp',
    about: ' a surfing squirrel, what would you want more?',
  },
  {
    id: '3',
    givenName: 'Maximilian',
    familyName: 'Buz',
    email: 'idiot@gmail.com',
    signups: [],
    profileImage: '/../public/buz.jpg',
    about: '  as you can say from the picture, NOT a sport person and many more NOT',
  },
  {
    id: '4',
    givenName: 'Jess',
    familyName: 'Edwards',
    email: 'jess@gmail.com',
    signups: [],
    profileImage: '/../public/puppy.jpg',
    about: '  famous for her puppy vibe, the most non secret dream of Max ',
  },
  {
    id: '5',
    givenName: 'Giordano',
    familyName: 'Bruno',
    email: 'giordano@gmail.com',
    signups: [],
    profileImage: '/../public/giordano.jpg',
    about: ' burns of desire to see the stars',
  },
];


organizer {
  id
  givenName
  familyName
  email
  signups {
    nextToken
  }
  profileImage
  about
  updates {
    nextToken
  }
  watchList {
    nextToken
  }
  createdAt
  updatedAt
}