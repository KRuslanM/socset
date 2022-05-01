let state = {
    profilesPage: {
        posts: [
            {id: '1', message: 'Hey, how are you?', likesCount: 12},
            {id: '2', message: 'Hello, i am fine', likesCount: 11},
            {id: '3', message: 'Hello, Dude', likesCount: 16}
        ]
    },
   dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dima'},
            {id: '2', name: 'Sasha'},
            {id: '3', name: 'Victor'},
            {id: '4', name: 'Valera'}
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you IT'},
            {id: '3', message: 'Yo'},
            {id: '4', message: 'You'}
        ]
    },
    sidebarPage: {
        friends: [
            {id: '1', name: 'Dima'},
            {id: '2', name: 'Sasha'},
            {id: '3', name: 'Victor'}
        ]
    }
}

export default state;