const Songs = [
    {
        id: 1,
        favourite: false,
        songName: "Felony",
        artist: "Ckay",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2FCkay-Felony-(JustNaija.com).mp3?alt=media&token=917ca02d-9cb3-4fe5-a9cb-c4ba01965698",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2Ffelony%20-%20Ckay.jpg?alt=media&token=533c961f-6af7-4c6d-9c4b-4a478a5d1239"
    },
    {
        id: 2,
        favourite: false,
        songName: "Survive",
        artist: "Jaido P featuring Olamide",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2FJaido-P-Survive-ft-Olamide-(JustNaija.com).mp3?alt=media&token=ac2392a1-fca5-4b57-9bbf-97c6140f124b",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FJaido-P-ft-Olamide-Survive.jpeg?alt=media&token=81498f32-edee-4357-9ce0-fb12a38cfe5b" 
    },
    {
        id: 3,
        favourite: false,
        songName: "Your Body",
        artist: "Mayorkun",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2FMayorkun-Your-Body-(JustNaija.com).mp3?alt=media&token=aad681ab-ed39-4307-a2db-96c6fe791313",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FMayorkun-Your-Body-Artwork.jpg?alt=media&token=664e8857-9c49-4931-a130-aac86cf12e0f"
    },
    {
        id: 4,
        favourite: false,
        songName: "Infinity",
        artist: "Olamide featuring Omah Lay",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2F03-Olamide-Infinity-ft-Omah-Lay-(JustNaija.com).mp3?alt=media&token=2317b2a7-37b9-4d02-b1d4-0a56ced76b56",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FInfinity%20Olamide%20ft%20Omah%20Lay.jpeg?alt=media&token=da2a68f0-1625-46fc-a951-c00902031d7e"
    },
    {
        id: 5,
        favourite: false,
        songName: "Mafo",
        artist: "Naira Marly featuring Young Jonn",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2FNaira_Marley_-_Mafo_(mp3AFRIQ.com).mp3?alt=media&token=a28d8c8f-6e87-4b81-be4e-299ec5f292ae",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2Fmafo%20naira%20marly%20ft%20young%20jonn.jpg?alt=media&token=89d0b18d-0968-42f7-8982-803d0d5ea2c1"
    },
    {
        id: 6,
        favourite: false,
        songName: "Essence",
        artist: "Wizkid featuring Tems",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2F11%20Essence%20-%20(SongsLover.com).mp3?alt=media&token=0ae79348-a0a8-4175-b3c2-3cda9bf38516",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FWizkid%20Essence.jpg?alt=media&token=e55f22fd-d2f2-4a01-a398-5eb2c8d4c2bc"
    },
    {
        id: 7,
        favourite: false,
        songName: "Fem",
        artist: "Davido",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2F01-Davido-Fem-file-1-(JustNaija.com).mp3?alt=media&token=3737a350-1fba-490b-9d96-79222a4e4188",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FDavido%20Fem.jpg?alt=media&token=c7849dac-40d9-41b3-8515-6a70cdf1d76f"
    },
    {
        id: 8,
        favourite: false,
        songName: "Way Too Big",
        artist: "Burna Boy",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2F03%20Way%20Too%20Big%20-%20(SongsLover.com).mp3?alt=media&token=9aa9561b-8a72-4fca-87cc-5a1f0cbd2547",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FBurna-Boy%20Way%20too%20big.jpg?alt=media&token=f3950a1a-6c42-464c-8add-06e08626e931"
    },
    {
        id: 9,
        favourite: false,
        songName: "Vibration",
        artist: "Fireboy DML",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2FFireboy-DML-Vibration-(JustNaija.com).mp3?alt=media&token=404801ae-a6cd-4d30-855c-4a69165e6aeb",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FFireboy_DML_-_Vibration.jpg?alt=media&token=775a8c7d-42cf-44d2-81a6-d7de8735bec9"
    },
    {
        id: 10,
        favourite: false,
        songName: "Lady",
        artist: "Rema",
        song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Songs%2FRema-Lady-(JustNaija.com).mp3?alt=media&token=b1d36b1a-ffc4-4a64-8ccf-fc00b4451158",
        imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-ebce2.appspot.com/o/Artworks%2FRema-Lady.jpg?alt=media&token=539d5d30-78a3-43a9-818a-263249e9a018"
    }
]