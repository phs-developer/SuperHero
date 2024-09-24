/** @jsxImportSource @emotion/react */
import SearchBar from "../../components/SearchBar";
import { Section, Title } from "./style";
import bacImg from "../../asset/img/bg.png";

export default function Main() {
    return (
        <Section>
            <img src={bacImg} alt="" className="bg" />
            <div className="inner">
                <Title className="title">
                    Search for
                    <br />
                    your hero name
                </Title>
                <SearchBar />
            </div>
        </Section>
    );
}
