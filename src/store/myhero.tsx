import React, {createContext, useState,} from 'react';

type heroType = {
  name: string,
  changeName: (e:string) => void
}


export const MyHero = createContext<heroType | null>(null);

export default function MyHeroStore({children}: {children:React.ReactNode}) {
  const [name, setName] = useState('name');

  const hero = {
    name: name,
    changeName: (updateName:string) => setName(updateName)
  }

  return(
    <MyHero.Provider value={hero}>
      {children}
    </MyHero.Provider>
  )
}