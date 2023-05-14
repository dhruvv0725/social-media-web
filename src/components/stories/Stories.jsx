import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react";

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    const stories = [
        
        {
          id: 1,
          name: "Bhoogarv",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "Aryan",
          img: "https://wallpaperaccess.com/full/1183307.jpg",
        },
        {
          id: 3,
          name: "Shivam",
          img: "https://th.bing.com/th/id/OIP.LBBSiBu7bA3jM-_kAOlA0AHaNK?pid=ImgDet&rs=1",
        },
        {
          id: 4,
          name: "Nakul",
          img: "https://th.bing.com/th/id/R.3ca973a254be795f15021eb95fa896b0?rik=E%2bXpNEZoaIMMVg&riu=http%3a%2f%2ftheiphonewalls.com%2fwp-content%2fuploads%2f2014%2f07%2fWimbledon-2014.jpg&ehk=nNhF4VM0dgtyIHpVkT1hT6LuIoyG6Oc23Eb3UGUHe8g%3d&risl=&pid=ImgRaw&r=0",
        },
      ];

    return (
        <div className="stories">
        <div className="story">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
            <button>+</button>
            </div>
        {stories.map(story=>(
            <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name} </span>
            </div>
        ))}
        </div>
    )
}

export default Stories