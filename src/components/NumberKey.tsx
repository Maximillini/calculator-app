type NumberKeyProps = {
  value: string,
}

enum KeyColors {
  MainBG = 'bg-thm1-main-key-bg text-thm1-main-key-txt border-thm1-main-key-shadow',
  SecondaryBG = 'bg-thm1-secondary-key-bg border-thm1-secondary-key-shadow',
  TertiaryBG = 'bg-thm1-tertiary-key-bg border-thm1-tertiary-key-shadow'
}

const getKeyColors = (value: string) => {
  if (value === '=') return KeyColors.TertiaryBG
  if (value === 'DEL' || value === 'RESET') return KeyColors.SecondaryBG

  return KeyColors.MainBG
}

export const NumberKey = ({ value }: NumberKeyProps) => {

  
  return (
    <div className={`number-key grow basis-1/4 ${getKeyColors(value)} border-b-4 rounded-lg text-center py-4 mx-1`}>
      {value}
    </div>
  )
}
