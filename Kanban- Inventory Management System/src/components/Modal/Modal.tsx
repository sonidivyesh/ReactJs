import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Field from "./Field"; // Import the Field component
import { ModalConfig } from "./modalConfigs"; // Import the config types

type ModalProps = {
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
  mode: "create" | "edit";
  config: ModalConfig;
  initialData?: Record<string, any>;
};

export default function Modal({
  open,
  onOpenChange,
  mode,
  config,
  initialData = {},
}: ModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>(initialData);

  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    config.onSubmit(formData);
    onOpenChange(false);
    setFormData({});
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "New" : "Edit"} {config.title}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {config.fields.map((field) => (
              <div
                key={field.id}
                className="grid grid-cols-3 items-center gap-4"
              >
                <Label htmlFor={field.id}>{field.label}</Label>
                <Field
                  field={field}
                  value={formData[field.id] || ""}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Discard
            </Button>
            <Button type="submit">
              {mode === "create" ? "Add" : "Update"} {config.title}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
