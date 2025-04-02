import "./Index.css"

function Conditions(){
    const login=true;
    return (
        <>
        {login?<li>Login</li>:null}
        {login?null:<li>Logout</li>}
        </>
        
    )
}

export default Conditions;