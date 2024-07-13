const MyButton = ()=>{
    const handleClick = () => {
        alert("Кнопка нажата")
    }
    return (<button onClick={handleClick}>Кнопка!</button>)
}

//todo Сделать children и type

export default MyButton