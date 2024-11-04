import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import quantityIcon from "../../assets/inventorySummary/Quantity.png";
import onTheWayIcon from "../../assets/inventorySummary/On the way.png";

export default function InventorySummary() {
  return (
    <>
      <Card className="border-none shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
            Inventory Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="p-3 pt-7">
          <div className="flex">
            {/* Quantity in Hand */}
            <div className="w-1/2 flex flex-col items-center gap-1 after-element-home">
              <div>
                <img src={quantityIcon} alt="Logo" />
              </div>
              <div className="col-start-1 font-medium text-lg">868</div>
              <div className="col-start-1 text-center">Quantity in Hand</div>
            </div>

            {/* To be Received */}
            <div className="w-1/2 flex flex-col items-center gap-1">
              <div>
                <img src={onTheWayIcon} alt="Logo" />
              </div>
              <div className="col-start-1 font-medium text-lg">200</div>
              <div className="col-start-1 text-center">To be Received</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
