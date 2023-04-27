import { ChangeEvent } from "react"

interface Props {
  name: string
  value?: string
  onChange?: (value: string) => void
}

const Input = ({ name, value, onChange }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e.target.value)
  }

  return (
    <div className="w-56">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {name}
      </label>
      <input
        type="text"
        id={name}
        autoComplete="off"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
