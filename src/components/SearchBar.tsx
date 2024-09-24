/** @jsxImportSource @emotion/react */
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyHero } from "../store/myhero";
import { SearchListData } from "../commons/types/hero";
import { Form, Input, Btn, SearchList } from "./style";

// 자동완성 리스트 타입
type list = {
    id: number;
    image: {
        url: string;
    };
    name: string;
}[];

const SearchBar = () => {
    const [name, setName] = useState<string>("");
    const [list, setList] = useState<list | null>(null);
    const value = useContext(MyHero);
    let navigate = useNavigate();

    // 자동완성 리스트업
    useEffect(() => {
        (async () => {
            const result = await SearchListData(name);
            setList(result);
        })();
    }, [name]);

    // 엔터 검색으로 이동
    function handleFavoritePage(e: React.MouseEvent<HTMLButtonElement>) {
        //submit과 navigate의 충돌 방지 --> preventDefault()
        e.preventDefault();
        value?.changeName(name);
        setName("");
        navigate(`/favorite`);
    }

    // 자동완성 클릭으로 이동
    function handleNavigate(name: string) {
        value?.changeName(name);
        setName("");
        navigate("/favorite");
    }

    return (
        <Form>
            <Input
                type="text"
                placeholder="search name !"
                autoComplete="off"
                name="search"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="search-box"
            />
            <Btn type="submit" onClick={handleFavoritePage}>
                <span className="blind">검색</span>
            </Btn>
            <SearchList className={name.length >= 1 ? "active" : ""}>
                {list &&
                    list.map((e) => {
                        return (
                            <li key={e.id}>
                                <button type="button" onClick={() => handleNavigate(e.name)}>
                                    <img src={e.image.url} alt={e.name} />
                                    <span>{e.name}</span>
                                </button>
                            </li>
                        );
                    })}
            </SearchList>
        </Form>
    );
};
export default SearchBar;
