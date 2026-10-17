import { useNavigate } from "react-router-dom"

const Footer = () => {

    const navigate = useNavigate();
    return (
        <div className="footer">
            <button onClick={() => navigate('/')}>Return to home page</button>
            <button onClick={() => navigate(-1)}>Go back</button>
            <button onClick={() => navigate(1)}>Go forward</button>
        </div>
    )
}

export default Footer
