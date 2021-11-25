import type { NextPage } from 'next'

interface TextInputProps {
  label?: string
  placeholder?: string
  type?: string
  inputStyle?: string
  classStyle?: string
  multiline?: boolean
  required?: boolean
}

const TextInput: NextPage<TextInputProps> = ({ label, placeholder, type, inputStyle = "", classStyle = "", multiline = false, required = false, ...props }) => {
  const underlineStyle = `
                    peer
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-primary
                    ${inputStyle}
                  `

  return (
    <label className={`flex flex-col-reverse ${classStyle}`}>
      {multiline ? <textarea className={underlineStyle} placeholder={placeholder} rows={6} required {...props} /> : <input type={type} className={underlineStyle} placeholder={placeholder} required {...props} />}
      <span className="text-black font-bold text-sm peer-focus:text-primary">{label?.toUpperCase()}<span className="text-primary">{required ? ' *' : null}</span></span>
      
    </label>
  )
}

export default TextInput



