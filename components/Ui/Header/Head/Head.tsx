import Container from "../../Utils/Container/Container";
import Logo from "../Brand/Logo";
import headStyle from "./Head.module.css";

export default function Head() {
    return (
        <Container>
            <header className={headStyle.head}>
                <Logo/>
            </header>
       </Container>
    );
}   