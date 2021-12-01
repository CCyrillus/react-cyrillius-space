let state = {
  profilePage: {
    postsData: [
      { message: 'Hello React, it is my first post!)', likes: 11 },
      { message: 'AS WE CAN', likes: 21 },
      { message: 'Light weight BABYYY!!', likes: 33 },
      { message: 'No Country for Old Men!)', likes: 19 }
    ]

  },
  dialogPage: {
    dialogsData:
      [
        { id: 1, name: "Nikita" },
        { id: 2, name: "Semen" },
        { id: 3, name: "Gleb" },
        { id: 4, name: "Marianna" },
        { id: 5, name: "Sanchez" },
        { id: 6, name: "Alina" }
      ],

    messagesData:
      [
        { id: 1, txt: 'Hello!' },
        { id: 2, txt: 'How are you?!' },
        { id: 1, txt: 'Good! What about you?) What new?' },
        { id: 2, txt: "YoYoYo" },
        { id: 2, txt: "AeAeAe" },
        { id: 2, txt: "MMM NICE" }
      ]
  },
}

export default state;