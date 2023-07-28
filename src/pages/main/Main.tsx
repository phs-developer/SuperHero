/** @jsxImportSource @emotion/react */
import SearchBar from "../../components/common/SearchBar";
import { BackImg, Section, Title, background } from "./style";

export default function Main () {
  return (
    <div css={background}>
      <div css={BackImg}/>
      <Section>
        <Title className='title'>who is your hero?</Title>
        <SearchBar />
      </Section>
    </div>
  );
}
