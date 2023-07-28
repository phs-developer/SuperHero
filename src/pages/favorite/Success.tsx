/** @jsxImportSource @emotion/react */
// data 성공
import { useState } from "react";
import { HeroDataType } from "../../service/hero";
import {Section, HeroName,Img, Article,Stats, StatsBody} from "./style";
import yellow from '../../asset/img/yellow.png'
import red from '../../asset/img/red.png'
import blue from '../../asset/img/blue.png'


export default function Success ({data}:{data:HeroDataType}) {
  const stats = ['appearance', 'powerstats', 'biography']
  const [onDetail, setOnDetail] = useState(0)


  return (
    <Section>
        <Img src={data.image.url} alt='히어로 이미지'/>
        <Article>
          <HeroName>{data.name}</HeroName>
          <Stats>
            {stats.map((title, i)=> {
              const upperTitle = title.toUpperCase();
              return  <button className={`stats ${onDetail===i && 'active'}`} type='button' name={title} onClick={()=>setOnDetail(i)}>{upperTitle}</button>
            })}
          </Stats>
          <StatsItem detail={onDetail} data={data}/>
        </Article>
      </Section>
  )
}

//상태 리스트
function StatsItem ({detail, data}:{detail:number, data:HeroDataType}) {
  const appearance = ['Gender', 'Height', 'Weight','eye-color','hair-color'];
  const powerstats = ['Combat', 'Durability', 'Power', 'Speed', 'Strength'];
  const biography = ['Alignment', 'Publisher', 'full-name'];
  const stats = [appearance, powerstats, biography];
  const color = [yellow, red, blue];

  return (
    <div>
      {stats.map((category,idx)=>{
        const categoryString = idx===0? 'appearance' : idx===1 ? 'powerstats' : 'biography'
        return(
          <StatsBody className={detail===idx ? 'active' : ''}>
            {category.map((title)=>{
              const smallTitle = title.toLowerCase();
              return <li key={title}><img src={color[idx]} alt='icon'/>{title}<span>{data[categoryString][smallTitle]}</span></li> 
            })}
          </StatsBody>
        )
      })}
  </div>
  )
}