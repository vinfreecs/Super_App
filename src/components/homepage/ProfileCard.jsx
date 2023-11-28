

export default function ProfileCard(){
    const details = (JSON.parse(localStorage.getItem("userData")))
    // const checkScrollBar = ["Action","Fantasy","Fiction","Action","Fantasy","Fiction"]
    
    console.log(details);
    return(
        <>
            <div className="profile-wrapper">
                <div className="profile-img">
                </div>
                <div className="profile-info">
                    <div className="profile-details">
                        <p className="profile-name">{details.name}</p>
                        <p className="profile-email">{details.email}</p>
                        <p className="profile-username">{details.username}</p>
                    </div>
                    <div className="genre-details">
                        {details.categories.map((ele,index)=>(
                            <div key={index} className="genre-div">{ele}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}