/** @jsxImportSource @emotion/react */
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchHero, HeroDataType } from "../../commons/types/hero";
import { MyHero } from "../../store/myhero";
import { background, Container, Header, hero } from "./style";
import Success from "./Success";
import Fail from "./Fail";
import SearchBar from "../../components/SearchBar";

const Favorite = () => {
    const [data, setData] = useState<HeroDataType | null>(null);
    const value = useContext(MyHero);
    const name = value ? value.name : "batman";

    useEffect(() => {
        (async () => {
            const result = await fetchHero(name);
            result ? setData(result) : setData(null);
        })();
    }, [name]);

    let navigate = useNavigate();
    function handleHomePage(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div css={background}>
            <Container>
                <Header>
                    <h1>
                        <a href="" onClick={handleHomePage}>
                            Super<span css={hero}>Hero</span>
                        </a>
                    </h1>
                    <SearchBar />
                </Header>
                {data ? <Success data={data} /> : <Fail />}
            </Container>
        </div>
    );
};

export default Favorite;
