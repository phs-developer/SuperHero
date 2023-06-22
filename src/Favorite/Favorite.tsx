/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import {css} from '@emotion/react';
import {useState, useEffect, useContext} from 'react';
import SearchBar from '../Common/SearchBar';
import { useNavigate } from 'react-router-dom';
import { fetchHero, HeroDataType } from '../Service/hero';
import { MyHero } from '../store/myhero';


const Favorite = () => {
  const [data, setData] = useState<HeroDataType | null | string> ('loading');
  const value = useContext(MyHero);
  const name = value ? value.name : 'batman';

  useEffect(() => {
    setData('loading');
    (async ()=> {
      const result = await fetchHero(name);
      result ? setData(result) : setData(null);
    })()
  },[name])
  
  let navigate = useNavigate();
  function handleHomePage () {
    navigate('/')
  };
  
  // data 성공
  const SuccessSection = () => {
    // 상세 데이터 오픈
    function handleDetailView(event:React.MouseEvent<HTMLButtonElement>) {
      function hideAllStats() {
        detail.forEach(e => {
          e.classList.remove('active');
        })
        stats.forEach(e => {
          e.classList.remove('active');
        })
      }
      function showCurrentStats() {
        currentStats?.classList.add('active');
        event.currentTarget.classList.add('active');
      }   
      const detail = document.querySelectorAll('.detail')
      const stats = document.querySelectorAll('.stats')
      const currentStats = document.querySelector(`.${event.currentTarget.name}`)
  
      hideAllStats();
      showCurrentStats();
    }

    const Section = styled.section`
      display: flex;
      justify-content: space-around;
      gap: 20px;
      padding: 80px 50px 20px;
      @media screen and (max-width:1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @media screen and (max-width:768px) {
        padding: 20px;
      }
    `
    const HeroName = styled.p`
      color: white;
      font-size: 3rem;
      margin-bottom: 1.5rem;
    `
    const Img = styled.img`
      min-width: 200px;
      min-height: 640px;
      @media screen and (max-width:1024px) {
        margin-bottom: 50px;
      }
      @media screen and (max-width:768px) {
        width: 100%;
        min-width: 300px;
      }
    `
    const Article = styled.article`
      min-width: 500px;
      width: 650px;
      min-height: 100%;
      @media screen and (max-width:768px) {
        width: 100%;
        min-width: 300px;
        margin-bottom: 70px;
      }
    `
    const Stats = styled.div`
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
      button{
        font-size: 1.3rem;
        width: 34%;
        letter-spacing: 1px;
        padding: .5rem 0;
        background: none;
        border: 0;
        color: white;
        cursor: pointer;
      
        border-bottom: 2px solid gray;
        &:hover {
          border-bottom:2px solid red;
        }
      }
      .active {
        border-bottom:2px solid red;
      }
      @media screen and (max-width:768px) {
        flex-direction: column;
        align-items: center;
          button{
            width: 90%;
          }
      }
    `
    const StatsBody = styled.ul`
      display:none;
      font-size: 1.3rem;
      letter-spacing: 1.5px;
      li {
        display: flex;
        align-items: center;
        line-height: 55px;
        span {
          text-align: right;
          margin-left: auto;
        }
        img {
          width: 23px;
          margin-right: 5px;
        }
        @media screen and (max-width:768px) {
          flex-wrap: wrap;
        }
      }
      `
    if(typeof(data)==='string') {
      return (
        <Section>
          <h1>Loading...</h1>
        </Section>
      )
    } else {
      return (
        <Section>
            <Img src={data?.image.url} alt='흠'/>
            <Article>
              <HeroName>{data?.name}</HeroName>
              <Stats>
                <button className='stats active' type='button' name="appearance"  onClick={handleDetailView}>APPEARANCE</button>
                <button className='stats' type='button' name="powerstats" onClick={handleDetailView}>POWERSTATS</button>
                <button className='stats' type='button' name="biography" onClick={handleDetailView}>BIOGRAPHY</button>
              </Stats>
              <div>
                <StatsBody className='appearance detail active'>
                  <li><img src='./img/yellow.png' alt='icon'/>Eye color<span>{data?.appearance['eye-color']}</span></li>
                  <li><img src='./img/yellow.png' alt='icon'/>Gender<span>{data?.appearance.gender}</span></li>
                  <li><img src='./img/yellow.png' alt='icon'/>Hair color<span>{data?.appearance['hair-color']}</span></li>
                  <li><img src='./img/yellow.png' alt='icon'/>Height<span>{data?.appearance.height}</span></li>
                  <li><img src='./img/yellow.png' alt='icon'/>Weight<span>{data?.appearance.weight}</span></li>
                </StatsBody>
                <StatsBody className='powerstats detail'>
                  <li><img src='./img/red.png' alt='icon'/>Combat<span>{data?.powerstats.combat}</span></li>
                  <li><img src='./img/red.png' alt='icon'/>Durability<span>{data?.powerstats.durability}</span></li>
                  <li><img src='./img/red.png' alt='icon'/>Power<span>{data?.powerstats.power}</span></li>
                  <li><img src='./img/red.png' alt='icon'/>Speed<span>{data?.powerstats.speed}</span></li>
                  <li><img src='./img/red.png' alt='icon'/>Strength<span>{data?.powerstats.strength}</span></li>
                </StatsBody>
                <StatsBody className='biography detail'>
                  <li><img src='./img/blue.png' alt='icon'/>Alignment<span>{data?.biography.alignment}</span></li>
                  <li><img src='./img/blue.png' alt='icon'/>Full name<span>{data?.biography['full-name']}</span></li>
                  <li><img src='./img/blue.png' alt='icon'/>Publisher<span>{data?.biography.publisher}</span></li>
                </StatsBody>
              </div>
            </Article>
          </Section>
      )
    }

  }
  // data 실패
  const FailSection = () => {
    const Section = styled.section`
      height: 82vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `
    const FailContent = styled.p`
      text-align:center;
      font-size: 3rem;
    `

    return (
      <Section>
        <FailContent>No hero found.</FailContent>
      </Section>
    )
  }

  const background = css`
    padding: 40px;
    min-height: calc(100vh - 80px);
    background: linear-gradient(to bottom right, #f64445, #7a00c7);
    @media screen and (max-width:768px) {
      padding: 30px;
    }
  `
  const cursor = css`
    cursor: pointer;
  `
  const Container = styled.div`
    min-height: 90vh;
    background-color: black;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgb(32, 32, 32);
    color: white; 
  `
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    padding: 20px 30px;
    color: white; 
    font-size: 20px;
  `
  const hero = css`
    color: red;
  `

  return (
    <div css={background}>
      <Container>
        <Header>
          <h1 css={cursor} onClick={handleHomePage}>
            Super<span css={hero}>Hero</span>
          </h1>
          <SearchBar />
        </Header>
        {data===null ? <FailSection /> : <SuccessSection />}
      </Container>
    </div>
  )
}

export default Favorite