/** @jsxImportSource @emotion/react */
import axios from "axios"

const defaultUrl = 'https://superheroapi.com/api.php/3423066867906256/search/'

export interface HeroDataType {
  id: number,
  name: string,
  image: {
    url: string
  },
  appearance: {
    gender: string,
    'eye-color': string,
    'hair-color': string,
    height: string,
    weight: string
  },
  powerstats: {
    combat: string,
    durability: string,
    intelligence: string,
    power: string,
    speed: string,
    strength: string
  },
  biography: {
    alignment: string,
    'full-name': string,
    publisher: string
  }
}

// 상세데이터
export const fetchHero = async (name:string):Promise<HeroDataType | string> => {
  const data = await axios.get(defaultUrl+name);
  if(data.data.error) return '없음';
  const result = data.data.results[0];

  return {
    id: result.id,
    name: result.name,
    image: {
      url: result.image.url
    },
    appearance: {
      gender: result.appearance.gender,
      'eye-color': result.appearance['eye-color'],
      'hair-color': result.appearance['hair-color'],
      height: result.appearance.height[1],
      weight: result.appearance.weight[1]
    },
    powerstats: {
      combat: result.powerstats.combat,
      durability: result.powerstats.durability,
      intelligence: result.powerstats.intelligence,
      power: result.powerstats.power,
      speed: result.powerstats.speed,
      strength: result.powerstats.strength
    },
    biography: {
      alignment: result.biography.alignment,
      'full-name': result.biography['full-name'],
      publisher: result.biography.publisher
    }
  }
}

// 자동완성기능 데이터
export const SearchListData = async (name:string) => {
  const data = await axios({
    method: 'get',
    url: (defaultUrl+name),
    timeout: 2000,
  })
  if(data.data.error) return null

  const result = data.data.results;
  // 3개만 추출해서 보냄
  if(result.length>3) {
    return result.slice(0, 3)
  } else {
    return result
  }

}