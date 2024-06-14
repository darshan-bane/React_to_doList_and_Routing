import Header from "../common/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const About = () => {
    const notify = () => toast.info("Wow so easy!", { position: "bottom-right", theme: "dark" });

    return (
        <>
            <Header></Header>
            This Is About Page

            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer limit={2} />
            </div>
        </>
    )
}
export default About