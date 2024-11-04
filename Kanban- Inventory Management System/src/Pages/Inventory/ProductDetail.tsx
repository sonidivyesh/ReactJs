import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { File, Pen } from "lucide-react";

import { ProductsType } from "@/routes/inventory.index";
import Modal from "../../components/Modal/Modal";
import ProductDetailsTabs from "./ProductDetailsTabs";
import { modalConfigs } from "../../components/Modal/modalConfigs";

type ProductDetailsProps = {
  product: ProductsType;
};

export default function ProductDetail({ product }: ProductDetailsProps) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="page-components lg:ms-[20.1rem]">
        <div className="stat-cards col-span-12 md:col-span-7">
          <Card className="border-none shadow-none">
            <CardHeader className="p-0">
              <CardTitle className="font-medium tracking-normal text-gray-700 text-xl">
                <div className="flex justify-between">
                  <div className="font-medium tracking-normal text-gray-700 text-xl">
                    {product?.title}
                  </div>
                  <div className="flex gap-3 items-center">
                    {/* Update product */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-10 gap-2 px-4"
                      onClick={toggleModal}
                    >
                      <Pen className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Edit
                      </span>
                    </Button>

                    {/* Download */}
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-10 gap-1 px-4"
                    >
                      <File className="h-3.5 w-3.5 sm:hidden" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Download
                      </span>
                    </Button>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            {/* Product Table */}
            <CardContent className="p-3 pt-7">
              <ProductDetailsTabs product={product} />
            </CardContent>
          </Card>
          <Modal
            open={isModalOpen}
            onOpenChange={toggleModal}
            mode="edit"
            config={modalConfigs["products"]}
          />
        </div>
      </div>
    </>
  );
}
