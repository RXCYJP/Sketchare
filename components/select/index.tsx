interface SelectProps {
  name: string;
  label?: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Select({
  name,
  label,
  options,
  defaultValue,
  onChange,
}: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold">
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
