// TODO - look into 'ctnl' package to wrangle tailwind class name list

type NumberKeyProps = {
  value: string,
}

enum KeyClassNames {
  Main = 'bg-thm1-main-key-bg text-thm1-main-key-txt border-thm1-main-key-shadow text-numbers',
  Secondary = 'bg-thm1-secondary-key-bg border-thm1-secondary-key-shadow text-lg py-3',
  Tertiary = 'bg-thm1-tertiary-key-bg border-thm1-tertiary-key-shadow text-lg py-3'
}

const getKeyColors = (value: string) => {
  if (value === '=') return KeyClassNames.Tertiary
  if (value === 'DEL' || value === 'RESET') return KeyClassNames.Secondary

  return KeyClassNames.Main
}

export const NumberKey = ({ value }: NumberKeyProps) => {

  
  return (
    <div className={`number-key grow position-relative basis-1/4 ${getKeyColors(value)} border-b-4 rounded-lg text-center mx-2 active:opacity-80 active:border-b-0 active:mt-1 hover:cursor-pointer`}>
      {value}
    </div>
  )
}
