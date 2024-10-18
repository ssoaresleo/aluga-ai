import { Check, ListFilter, X } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Separator } from "../../../../components/ui/separator";

export const SearchForStays = () => {
  return (
    <div className="flex items-start flex-col gap-5">
      <h3 className="text-xl font-bold">Busque sua melhor estadia.</h3>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Input placeholder="Buscar hotel" />

          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Por Preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="preco1">201 - 323</SelectItem>
              <SelectItem value="preco2">201 - 323</SelectItem>
              <SelectItem value="preco3">201 - 323</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center h-5 space-x-4">
          <Button variant="secondary" className="font-medium text-xs">
            <ListFilter className="size-4" />
            Mais filtros
          </Button>

          <Separator orientation="vertical" />

          <div className="flex gap-2">
            <Button variant="outline">
              <X className="size-4" />
              Remover filtros
            </Button>
            <Button>
              <Check className="size-4" /> Aplicar filtros
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
