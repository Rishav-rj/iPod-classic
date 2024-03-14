import song1 from "./audio/Hass Hass.mp3"
import song2 from "./audio/Keejo Kesari Ke Laal.mp3"
import song3 from "./audio/TU HAI KAHAN.mp3"
import song4 from "./audio/Voh Dekhnay Mein.mp3"

export const data = {
    menuItems:[
        {
            index:1,
            name:"Music"
        },
        {
            index:0,
            name:"Videos",
            icon:"fa-solid fa-film",
            color:"skyblue"
        },
        {
            index:0,
            name:"Photos",
            icon:"fa-solid fa-image",
            color:"#FFC5F4"
        },
        {
            index:0,
            name:"Games",
            icon:"fa-solid fa-gamepad",
            color:"#FF4A4A"
        },
        {
            index:0,
            name:"Settings",
            icon:"fa-solid fa-gears",
            color:"grey"
        },
        {
            index:2,
            name:"Now Playing",
        },
    ],
    Music:[{
            index:2,
            name:"Songs"
        },
        {   
            index:1,
            name:"Artists",
            icon:"fa-solid fa-user",
            color:"#6e6f96"
        },
        {   
            index:1,
            name:"Albums",
            icon:"fa-solid fa-compact-disc",
            color:"#B197FC"
        },
        {
            index:1,
            name:"Playlists",
            icon:"fa-solid fa-list-ul",
            color:"#90d0c9"
        }
    ],
    
    Songs:[
        {   
            index:2,
            name:"Hass Hass",
            song:song1,
            duration:151,
            singer:"Diljit X Sia",
            cover:"https://i.ytimg.com/vi/jADTdg-o8i0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS3e6kMs3RA3VEmR3toVjC4mLgJA"
        },
        {   
            index:2,
            name:"Keejo Kesari Ke Laal",
            song:song2,
            duration:234,
            singer:"Dj Ankur x DJ Ashu",
            cover:"https://i.ytimg.com/vi/-YRl9zZJP1w/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8-F2hg-ywZe2YpodlgpxkEsxjTg"
        },
        {   
            index:2,
            name:"TU HAI KAHAN",
            song:song3,
            duration:263,
            singer:"Raffey - Usama - Ahad",
            cover:"https://i.ytimg.com/vi/AX6OrbgS8lI/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqDd7Z22OwtJpf50NjZa_3Cnn-zQ"
        },
        {   
            index:2,
            name:"Voh Dekhnay Mein",
            song:song4,
            duration:159,
            singer:"Ali Zafar",
            cover:"https://i.ytimg.com/vi/nD1jhw6F-J4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJsye-DgFKIbnfS6Eukap_RsJ5OA"
        },
    ],
}