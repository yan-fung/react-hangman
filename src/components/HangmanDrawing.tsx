const HEAD = (
    <div style={{ width:"50px", height: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute" , top: "50px", right: "-30px" }} />
)

const BODY = (
    <div style={{ width:"10px", height: "100px", background: "black", position: "absolute" , top: "120px", right: "0" }} />
)

const RIGHT_ARM = (
    <div style={{ width:"100px", height: "10px", background: "black", position: "absolute" , top: "150px", right: "-100px", rotate: "-30deg", transformOrigin: "left bottom" }} />
)

const LEFT_ARM = (
    <div style={{ width:"100px", height: "10px", background: "black", position: "absolute" , top: "150px", right: "10px", rotate: "30deg", transformOrigin: "right bottom" }} />
)

const RIGHT_LEG = (
    <div style={{ width:"100px", height: "10px", background: "black", position: "absolute" , top: "210px", right: "-100px", rotate: "50deg", transformOrigin: "top left" }} />
)

const LEFT_LEG = (
<div style={{ width:"100px", height: "10px", background: "black", position: "absolute" , top: "210px", right: "10px", rotate: "-50deg", transformOrigin: "top right" }} />
)

const HangmanDrawing = () => {
  return (
    <div style={{ position: "relative" }}>
        {HEAD}
        {BODY}
        {RIGHT_ARM}
        {LEFT_ARM}
        {RIGHT_LEG}
        {LEFT_LEG}
        <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", right: "0", top: "0" }} />
        <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px"}} />
        <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px"}} />
        <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  )
}

export default HangmanDrawing;