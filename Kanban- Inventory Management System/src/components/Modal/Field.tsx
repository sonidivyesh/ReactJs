import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FieldProps = {
  field: {
    id: string;
    label: string;
    type: "text" | "number" | "select" | "date" | "email";
    placeholder?: string;
    options?: { label: string; value: string }[];
    required?: boolean;
  };
  value: string;
  onChange: (id: string, value: string) => void;
};

export default function Field({ field, value, onChange }: FieldProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(field.id, e.target.value);
  };

  switch (field.type) {
    case "select":
      return (
        <Select
          value={value || ""}
          onValueChange={(val) => onChange(field.id, val)}
        >
          <SelectTrigger className="col-span-2">
            <SelectValue
              placeholder={field.placeholder || `Select ${field.label}`}
            />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );

    case "date":
      return (
        <Input
          type="date"
          id={field.id}
          className="col-span-2"
          value={value || ""}
          onChange={handleInputChange}
          required={field.required}
        />
      );

    default:
      return (
        <Input
          type={field.type}
          id={field.id}
          className="col-span-2"
          placeholder={
            field.placeholder || `Enter ${field.label.toLowerCase()}`
          }
          value={value || ""}
          onChange={handleInputChange}
          required={field.required}
        />
      );
  }
}
