import classes from "./Profile.module.scss"
const Profile = ()=>{
    const user={
        firstName: "Aleksei",
        lastName: "Melenchuk",
        imageUrl: "/vite.svg"
    }
    // const showName = `${user.firstName} ${user.lastName[0]}.`
    function showName(){
        return`${user.firstName} ${user.lastName[0]}.`
    }
    return (
    <div className={classes.profile}>
    <img className={classes.profile__img} src={user.imageUrl} alt="vite"/>
    <span>{showName()}</span>
    </div>)
}
export default Profile